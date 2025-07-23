from mysql.connector import IntegrityError
import mysql.connector

from db_conn import get_connection

def insert_data():
    try:
        conn = get_connection()
        if conn is None:
            return
        cursor = conn.cursor()
        query = "INSERT INTO users (name, email, age) VALUES (%s, %s, %s)"
        n=input("Enter Your name: ")
        e=input("Enter Your Email: ")
        a=input("Enter your age: ")
        data = [
            (n, e, a),
        ]
        cursor.executemany(query, data)
        conn.commit()
        print("✅ Data inserted!")
    except IntegrityError as e:
        print(f"⚠️ Duplicate or constraint error: {e}")
    except Exception as e:
        print(f"❌ Error inserting data: {e}")
    finally:
        if conn:
            cursor.close()
            conn.close()
