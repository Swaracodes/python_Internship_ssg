from db_conn import get_connection

def create_table1():
    try:
        conn = get_connection()
        if conn is None:
            return
        cursor = conn.cursor()
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS users1 (
                Sr_no INT AUTO_INCREMENT PRIMARY KEY,
                Work_be_done VARCHAR(100)
            )
        """)
        conn.commit()
        print("✅ Table created!")
    except Exception as e:
        print(f"❌ Error creating table: {e}")
    finally:
        if conn:
            cursor.close()
            conn.close()