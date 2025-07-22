import mysql.connector
from Sneha import db_config

def get_connection():
    try:
        conn = mysql.connector.connect(**db_config)
        # print("Connection successfull!!")
        return conn
    except mysql.connector.Error as err:
        print("Connection error: ", err)
        return None
    
# get_connection()