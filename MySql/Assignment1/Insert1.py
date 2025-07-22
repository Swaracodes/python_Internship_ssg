import mysql.connector
from mysql.connector import IntegrityError
from db_conn import get_connection

def insert_data1():
    try:
        conn = get_connection()
        if conn is None:
            return
        cursor = conn.cursor()
        query = "INSERT INTO users1 (Work_be_done) VALUES (%s)"
        data = [
            ("DBMS Unit 1",),
            ("Portfolio Website",),
            ("Tasks Provided by Internship",),
            ("Assignment Given By College",)
        ]
        cursor.executemany(query, data)
        conn.commit()
        print("✅ Data inserted!")
    except mysql.connector.IntegrityError as e:
        print(f"⚠️ Duplicate or constraint error: {e}")
    except Exception as e:
        print(f"❌ Error inserting data: {e}")
    finally:
        if conn:
            cursor.close()
            conn.close()
