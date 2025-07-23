from db_conn import get_connection

def delete_user_by_name(name):
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM users WHERE name = %s", (name,))
        conn.commit()
        print(f"🗑️ User '{name}' deleted!")
    except Exception as e:
        print(f"❌ Error deleting user: {e}")
    finally:
        cursor.close()
        conn.close()
