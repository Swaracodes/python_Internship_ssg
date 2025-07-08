# Assignment 3: String Methods

# 1. Combine first and last name
first_name = "Sneha"
last_name = "Gaikwad"
full_name = first_name + " " + last_name
print("Full Name:", full_name)

# 2. Formatted string with item and price
item = "Iphone"
price = 99999.99
formatted_string = f"The price of {item} is ${price}"
print(formatted_string)

# 3. Convert "hello world" to uppercase
greeting = "hello world"
uppercase_greeting = greeting.upper()
print("Uppercase Greeting:", uppercase_greeting)

# 4. Use .join() to convert list to sentence
words = ['Python', 'is', 'awesome']
sentence = ' '.join(words)
print("Joined Sentence:", sentence)

# 5. Print today's date in "DD-MM-YYYY" format
from datetime import datetime
today = datetime.today()
formatted_date = today.strftime("%d-%m-%Y")
print("Today's Date:", formatted_date)
