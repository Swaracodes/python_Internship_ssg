from db_conn import get_connection

def insert_users():
    try:
        conn = get_connection()
        cursor = conn.cursor()
        data = [
            ("Namrata", "namrata@example.com"),
            ("Amit", "amit@example.com"),
            ("Priya", "priya@example.com")
        ]
        cursor.executemany("INSERT INTO users (name, email) VALUES (%s, %s)", data)
        conn.commit()
        print("✅ Users inserted!")
    except Exception as e:
        print(f"❌ Error inserting users: {e}")
    finally:
        cursor.close()
        conn.close()
