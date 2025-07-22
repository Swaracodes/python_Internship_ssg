from db_conn import get_connection

def update_data1():
    try:
        conn = get_connection()
        if conn is None:
            return
        cursor = conn.cursor()
        query = "UPDATE users1 SET Work_be_done = %s WHERE Sr_no = %s"
        cursor.execute(query, ("Play Games",5))
        conn.commit()
        if cursor.rowcount > 0:
            print("✅ Data updated!")
        else:
            print("⚠️ No matching record found to update.")
    except Exception as e:
        print(f"❌ Error updating data: {e}")
    finally:
        if conn:
            cursor.close()
            conn.close()
