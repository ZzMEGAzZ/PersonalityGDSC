const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Personality GDSC API',
            version: '1.0.0',
            description: 'A simple API for GDSC Personality Test'
        },
        servers: [
            {
                url: 'http://localhost:3000'
            }
        ],
    },
    apis: ['./server.cjs']
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);


const swaggerUi = require('swagger-ui-express');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'gdsc'
});

/**
 * @swagger
 * /all-users:
 *   get:
 *     description: Retrieve all users
 *     responses:
 *       200:
 *         description: A list of users
 */
app.get('/all-users', (req, res) => {
    pool.query('SELECT * FROM users', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

/**
 * @swagger
 * /username-exists:
 *   get:
 *     description: Check if username exists
 *     parameters:
 *       - in: query
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: True if exists, false otherwise
 */
app.get('/username-exists', (req, res) => {
    const name = req.query.name;
    pool.query('SELECT COUNT(*) as count FROM users WHERE name = ?', [name], (error, results) => {
        if (error) throw error;
        res.send(results[0].count > 0 ? 'true' : 'false');
    });
});

/**
 * @swagger
 * /result-by-id:
 *   get:
 *     tags:
 *       - Results
 *     description: Retrieve the result of a user by their ID
 *     parameters:
 *       - in: query
 *         name: user_id
 *         required: true
 *         description: ID of the user to retrieve the result for
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The result of the user
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *       400:
 *         description: Missing user_id parameter
 *       404:
 *         description: No result found for the provided user ID
 */
app.get('/result-by-id', (req, res) => {
    const userId = req.query.user_id;
    if (!userId) {
        return res.status(400).send('Missing user_id parameter');
    }
    pool.query('SELECT result FROM users WHERE id = ?', [userId], (error, results) => {
        if (error) throw error;
        if (results.length) {
            res.send(results[0].result);
        } else {
            res.status(404).send('ไม่พบข้อมูล');
        }
    });
});

/**
 * @swagger
 * /result-by-name:
 *   get:
 *     tags:
 *       - Results
 *     description: Retrieve the result of a user by their name
 *     parameters:
 *       - in: query
 *         name: name
 *         required: true
 *         description: Name of the user to retrieve the result for
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The result of the user
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *       400:
 *         description: Missing name parameter
 *       404:
 *         description: No result found for the provided user name
 */
app.get('/result-by-name', (req, res) => {
    const name = req.query.name;
    pool.query('SELECT result FROM users WHERE name = ?', [name], (error, results) => {
        if (error) throw error;
        if (results.length) {
            res.send(results[0].result);
        } else {
            res.status(404).send('ไม่พบข้อมูล');
        }
    });
});


/**
 * @swagger
 * /add-user:
 *   post:
 *     tags:
 *       - Users
 *     description: Add a new user and calculate their result based on their answers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               ans_1:
 *                 type: string
 *               ans_2:
 *                 type: string
 *               ans_3:
 *                 type: string
 *               ans_4:
 *                 type: string
 *               ans_5:
 *                 type: string
 *               ans_6:
 *                 type: string
 *               ans_7:
 *                 type: string
 *               ans_8:
 *                 type: string
 *               ans_9:
 *                 type: string
 *               ans_10:
 *                 type: string
 *     responses:
 *       201:
 *         description: User added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 result:
 *                   type: string
 *       400:
 *         description: Invalid data
 */
app.post('/add-user', (req, res) => {
    const data = req.body;

    if (!data || !data.name) {
        return res.status(400).send('Invalid data');
    }

    const answerCounts = {
        "A": Array.from({ length: 10 }).filter((_, i) => data[`ans_${i + 1}`] === "A").length,
        "B": Array.from({ length: 10 }).filter((_, i) => data[`ans_${i + 1}`] === "B").length,
        "C": Array.from({ length: 10 }).filter((_, i) => data[`ans_${i + 1}`] === "C").length,
    };

    let result = "Unknown role";

    if (answerCounts["A"] >= 7) {
        result = "Project Manager";
    } else if (answerCounts["B"] >= 7) {
        result = "UX/UI Designer";
    } else if (answerCounts["C"] >= 7) {
        result = "Data Scientist/Analyst";
    } else if (answerCounts["A"] + answerCounts["B"] >= 7) {
        result = "Marketing";
    } else if (answerCounts["B"] + answerCounts["C"] >= 7) {
        result = "Software Engineer/Developer";
    }

    pool.query('INSERT INTO users (name, ans_1, ans_2, ans_3, ans_4, ans_5, ans_6, ans_7, ans_8, ans_9, ans_10, result) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [data.name, data.ans_1, data.ans_2, data.ans_3, data.ans_4, data.ans_5, data.ans_6, data.ans_7, data.ans_8, data.ans_9, data.ans_10, result],
        (error) => {
            if (error) {
                throw error;
            }
            res.status(201).json({ message: 'User added successfully', result: result });
        });
});



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
