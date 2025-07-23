from db_conn import get_connection

def delete_data():
    try:
        conn = get_connection()
        if conn is None:
            return
        cursor = conn.cursor()
        query = "DELETE FROM users WHERE id = %s"
        i=input("Enter Id to delete record: ")
        cursor.execute(query, (i,))
        conn.commit()
        if cursor.rowcount > 0:
            print("🗑️ Data deleted!")
        else:
            print("⚠️ No matching record found to delete.")
    except Exception as e:
        print(f"❌ Error deleting data: {e}")
    finally:
        if conn:
            cursor.close()
            conn.close()
