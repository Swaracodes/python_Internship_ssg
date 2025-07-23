from Assignment1 import create_table
from insert_data import insert_data
from view import view_data
from update import update_data
from delete import delete_data
from resert import reset_autoincrement


def main():
    while True:
        print("\n=== MENU ===")
        print("1. Create Table")
        print("2. Insert Data")
        print("3. Update Data")
        print("4. Delete Data")
        print("5. View Data")
        print("6. Reset Data and ID")
        print("0. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            create_table()
        elif choice == "2":
            insert_data()
        elif choice == "3":
            update_data()
        elif choice == "4":
            delete_data()
        elif choice == "5":
            view_data()
        elif choice == "6":
            reset_autoincrement()
        elif choice == "0":
            print("Exiting program. Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
