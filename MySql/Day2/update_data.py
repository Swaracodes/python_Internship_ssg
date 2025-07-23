from db_conn import get_connection

def update_user_email():
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("UPDATE users SET email = %s WHERE name = %s", ("namrata@newmail.com", "Namrata"))
        conn.commit()
        print("✅ Email updated!")
    except Exception as e:
        print(f"❌ Error updating data: {e}")
    finally:
        cursor.close()
        conn.close()
