from db_conn import get_connection

# INNER JOIN: Returns only rows with matching values in both tables
def inner_join():
    print("\n🔗 INNER JOIN (Users with Orders):")
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("""
            SELECT u.name, u.email, o.product, o.amount
            FROM users u
            INNER JOIN orders o ON u.id = o.user_id
        """)
        for row in cursor.fetchall():
            print(row)
    except Exception as e:
        print(f"❌ Error in INNER JOIN: {e}")
    finally:
        cursor.close()
        conn.close()


# LEFT JOIN: Returns all users, even if they have no orders
def left_join():
    print("\n🔗 LEFT JOIN (All Users, even if no Orders):")
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("""
            SELECT u.name, u.email, o.product, o.amount
            FROM users u
            LEFT JOIN orders o ON u.id = o.user_id
        """)
        for row in cursor.fetchall():
            print(row)
    except Exception as e:
        print(f"❌ Error in LEFT JOIN: {e}")
    finally:
        cursor.close()
        conn.close()


# RIGHT JOIN: Returns all orders, even if the user doesn't exist
def right_join():
    print("\n🔗 RIGHT JOIN (All Orders, even if no matching User):")
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("""
            SELECT u.name, u.email, o.product, o.amount
            FROM users u
            RIGHT JOIN orders o ON u.id = o.user_id
        """)
        for row in cursor.fetchall():
            print(row)
    except Exception as e:
        print(f"❌ Error in RIGHT JOIN: {e}")
    finally:
        cursor.close()
        conn.close()


# FULL OUTER JOIN (Simulated using UNION of LEFT and RIGHT JOINs)
def full_outer_join():
    print("\n🔗 FULL OUTER JOIN (All Users + All Orders, match or no match):")
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("""
            SELECT u.name, u.email, o.product, o.amount
            FROM users u
            LEFT JOIN orders o ON u.id = o.user_id
            UNION
            SELECT u.name, u.email, o.product, o.amount
            FROM users u
            RIGHT JOIN orders o ON u.id = o.user_id
        """)
        for row in cursor.fetchall():
            print(row)
    except Exception as e:
        print(f"❌ Error in FULL OUTER JOIN: {e}")
    finally:
        cursor.close()
        conn.close()


# CROSS JOIN: Returns the Cartesian product of both tables (every combination)
def cross_join():
    print("\n🔗 CROSS JOIN (Every combination of Users and Orders):")
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("""
            SELECT u.name, o.product
            FROM users u
            CROSS JOIN orders o
        """)
        for row in cursor.fetchall():
            print(row)
    except Exception as e:
        print(f"❌ Error in CROSS JOIN: {e}")
    finally:
        cursor.close()
        conn.close()
