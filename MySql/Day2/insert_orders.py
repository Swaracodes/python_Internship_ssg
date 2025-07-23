from db_conn import get_connection

def insert_orders():
    try:
        conn = get_connection()
        cursor = conn.cursor()
        data = [
            (1, "Laptop", 50000.00),
            (1, "Mouse", 500.00),
            (2, "Keyboard", 1000.00)
        ]
        cursor.executemany("INSERT INTO orders (user_id, product, amount) VALUES (%s, %s, %s)", data)
        conn.commit()
        print("✅ Orders inserted!")
    except Exception as e:
        print(f"❌ Error inserting orders: {e}")
    finally:
        cursor.close()
        conn.close()
