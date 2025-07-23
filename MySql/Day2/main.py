from create_tables import create_tables
from insert_users import insert_users
from insert_orders import insert_orders
from view_users import view_all_users
from update_data import update_user_email
from delete_data import delete_user_by_name
from joins import inner_join, left_join, right_join, full_outer_join, cross_join


def main():
    create_tables()
    insert_users()
    insert_orders()
    view_all_users()
    update_user_email()
    view_all_users()
    inner_join()
    left_join()
    delete_user_by_name("Priya")
    view_all_users()

if __name__ == "__main__":
    main()
