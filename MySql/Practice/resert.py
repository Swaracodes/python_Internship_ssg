from db_conn import get_connection

def reset_autoincrement():
    try:
        conn = get_connection()
        if conn is None:
            return
        cursor = conn.cursor()

        # Delete all records (be careful!)
        cursor.execute("DELETE FROM users")

        # Reset AUTO_INCREMENT to 1
        cursor.execute("ALTER TABLE users AUTO_INCREMENT = 1")

        conn.commit()
        print("✅ All records deleted and ID reset to 1.")
    except Exception as e:
        print(f"⚠️ Error: {e}")
    finally:
        if conn:
            conn.close()
