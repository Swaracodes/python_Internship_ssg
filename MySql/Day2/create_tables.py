from db_conn import get_connection

def create_tables():
    try:
        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("""
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(100),
                email VARCHAR(100)
            )
        """)

        cursor.execute("""
            CREATE TABLE IF NOT EXISTS orders (
                id INT AUTO_INCREMENT PRIMARY KEY,
                user_id INT,
                product VARCHAR(100),
                amount DECIMAL(10, 2),
                FOREIGN KEY (user_id) REFERENCES users(id)
            )
        """)

        conn.commit()
        print("✅ Tables created successfully!")

    except Exception as e:
        print(f"❌ Error creating tables: {e}")
    finally:
        cursor.close()
        conn.close()
