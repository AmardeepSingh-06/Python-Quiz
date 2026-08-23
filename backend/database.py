import os
import time
import mysql.connector

def get_connection():
    for _ in range(30):
        try:
            return mysql.connector.connect(
                host=os.getenv("DB_HOST", "mysql-container"),
                port=int(os.getenv("DB_PORT", "3306")),
                user=os.getenv("DB_USER", "amardeep"),
                password=os.getenv("DB_PASSWORD", "quizpassword"),
                database=os.getenv("DB_NAME", "quiz_db")
            )
        except mysql.connector.Error:
            time.sleep(2)
    raise RuntimeError("Could not connect to MySQL")
