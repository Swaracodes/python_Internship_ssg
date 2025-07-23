from db_conn import get_connection

def view_all_users():
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM users")
        rows = cursor.fetchall()
        print("\n👤 All Users:")
        for row in rows:
            print(row)
    except Exception as e:
        print(f"❌ Error viewing users: {e}")
    finally:
        cursor.close()
        conn.close()
