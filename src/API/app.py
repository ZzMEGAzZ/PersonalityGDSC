import mysql.connector
from flask import Flask, jsonify, request, Response

app = Flask(__name__)



def connect_to_database():
    return mysql.connector.connect(
        host="mysql-container", user="root", password="root", database="gdsc"
    )

@app.route("/all-users", methods=["GET"])
def fetch_all_users():
    with connect_to_database() as conn:
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM users")
        users = cursor.fetchall()
    return jsonify(users)


@app.route("/username-exists", methods=["GET"])
def is_username_exists():
    name = request.args.get("name")
    with connect_to_database() as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT COUNT(*) FROM users WHERE name = %s", (name,))
        count = cursor.fetchone()
    return "true" if count and count[0] > 0 else "false"


@app.route("/result-by-id", methods=["GET"])
def fetch_result_by_id():
    user_id = request.args.get("user_id")
    if not user_id:
        return Response("Missing user_id parameter", status=400, mimetype="text/plain")

    with connect_to_database() as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT result FROM users WHERE id = %s", (user_id,))
        result = cursor.fetchone()
        
    return (
        Response(result[0], status=200, mimetype="text/plain")
        if result
        else Response("ไม่พบข้อมูล", status=404, mimetype="text/plain")
    )




@app.route("/result-by-name", methods=["GET"])
def fetch_result_by_name():
    name = request.args.get("name")
    with connect_to_database() as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT result FROM users WHERE name = %s", (name,))
        result = cursor.fetchone()
    return (
        Response(result[0], status=200, mimetype="text/plain")
        if result
        else Response("ไม่พบข้อมูล", status=404, mimetype="text/plain")
    )



@app.route("/add-user", methods=["POST"])
def add_user():
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
    elif answer_counts["A"] + answer_counts["C"] >= 7:
        result = "Quality Assurance"

    with connect_to_database() as conn:
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

    # ส่งกลับ response ในรูปแบบ JSON ประกอบด้วย message และ result
    return jsonify(message="User added successfully", result=result), 201


if __name__ == "__main__":
    app.run(debug=True)
