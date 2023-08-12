import mysql.connector
from flask import Flask, jsonify, request, Response

app = Flask(__name__)

# แนะนำให้ใช้ connection pool หรือ context manager กับการเชื่อมต่อฐานข้อมูล


def get_db_connection():
    """Retrieve a new database connection to the gdsc database."""
    return mysql.connector.connect(
        host="mysql-container", user="root", password="root", database="gdsc"
    )

"""Retrieve a list of all users from the database."""
@app.route("/users", methods=["GET"])
def get_users():
    with get_db_connection() as conn:
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM users")
        users = cursor.fetchall()
    return jsonify(users)

"""Check if a user with a given name exists in the database.
    
    Parameters:
    - name (str): The name of the user to check.
    
    Returns:
    - "true" if the user exists, "false" otherwise.
    """
@app.route("/check_name", methods=["GET"])
def check_name():
    name = request.args.get("name")
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT COUNT(*) FROM users WHERE name = %s", (name,))
        result = cursor.fetchone()
    return "true" if result and result[0] > 0 else "false"


"""Retrieve the result (role) of a specific user based on their name.
    
    Parameters:
    - name (str): The name of the user whose result is to be fetched.
    
    Returns:
    - The result (role) of the user if found, else a 404 status with "ไม่พบข้อมูล".
    """
@app.route("/check_result", methods=["GET"])
def check_result():
    name = request.args.get("name")
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT result FROM users WHERE name = %s", (name,))
        result = cursor.fetchone()
    return (
        Response(result[0], status=200, mimetype="text/plain")
        if result
        else Response("ไม่พบข้อมูล", status=404, mimetype="text/plain")
    )



"""Add a new user to the database based on provided answers.
    
    Payload should include:
    - name (str): Name of the user.
    - ans_1 to ans_10 (str): User's answers to questions.
    
    Returns:
    - Confirmation message with 201 status if successful, else relevant error message with 400 status.
    """
@app.route("/new_user", methods=["POST"])
def new_user():
    data = request.json
    if not data or "name" not in data:
        return "Invalid data", 400

    name = data["name"]

    answer_counts = {
        "A": sum(1 for i in range(1, 11) if data.get(f"ans_{i}") == "A"),
        "B": sum(1 for i in range(1, 11) if data.get(f"ans_{i}") == "B"),
        "C": sum(1 for i in range(1, 11) if data.get(f"ans_{i}") == "C"),
    }

    result = "Unknown role"
    if answer_counts["A"] >= 7:
        result = "Project Manager"
    elif answer_counts["B"] >= 7:
        result = "UX/UI Designer"
    elif answer_counts["C"] >= 7:
        result = "Data Scientist/Analyst"
    elif answer_counts["A"] + answer_counts["B"] >= 7:
        result = "Marketing"
    elif answer_counts["B"] + answer_counts["C"] >= 7:
        result = "Software Engineer/Developer"

    with get_db_connection() as conn:
        cursor = conn.cursor()


        cursor.execute(
            "INSERT INTO users (name, ans_1, ans_2, ans_3, ans_4, ans_5, ans_6, ans_7, ans_8, ans_9, ans_10, result) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)",
            (
                name,
                data.get("ans_1"),
                data.get("ans_2"),
                data.get("ans_3"),
                data.get("ans_4"),
                data.get("ans_5"),
                data.get("ans_6"),
                data.get("ans_7"),
                data.get("ans_8"),
                data.get("ans_9"),
                data.get("ans_10"),
                result,
            ),
        )
        conn.commit()
    return "User added successfully", 201


if __name__ == "__main__":
    app.run(debug=True)
