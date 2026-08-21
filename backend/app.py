from flask import Flask, jsonify, request
from flask_cors import CORS
from database import get_connection

app = Flask(__name__)
CORS(app)

@app.get("/health")
def health():
    return jsonify({"status": "UP"})

@app.get("/questions")
def questions():
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute(
        "SELECT id, question, option_a, option_b, option_c, option_d, correct_answer "
        "FROM questions ORDER BY id"
    )
    rows = cursor.fetchall()
    cursor.close()
    conn.close()

    result = []
    for row in rows:
        result.append({
            "id": row["id"],
            "question": row["question"],
            "options": [
                row["option_a"], row["option_b"],
                row["option_c"], row["option_d"]
            ],
            "correct_answer": row["correct_answer"]
        })
    return jsonify(result)

@app.post("/scores")
def save_score():
    data = request.get_json() or {}
    player_name = str(data.get("player_name", "")).strip()
    score = int(data.get("score", 0))
    total_questions = int(data.get("total_questions", 0))

    if not player_name or total_questions <= 0 or score < 0 or score > total_questions:
        return jsonify({"error": "Invalid score data"}), 400

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("INSERT INTO players (name) VALUES (%s)", (player_name,))
    player_id = cursor.lastrowid

    cursor.execute(
        "INSERT INTO scores (player_id, score, total_questions) VALUES (%s, %s, %s)",
        (player_id, score, total_questions)
    )
    conn.commit()

    cursor.close()
    conn.close()

    return jsonify({
        "player_name": player_name,
        "score": score,
        "total_questions": total_questions
    }), 201

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
