# Assignment 5: Tuple Unpacking & Conversion

# 1. Take a tuple of (product, price, quantity)
item = ("Laptop", 800.00, 2)

# 2. Unpack into separate variables
product, price, quantity = item

# 3. Calculate total cost
total_cost = price * quantity
print(f"Product: {product}")
print(f"Price per unit: ${price}")
print(f"Quantity: {quantity}")
print(f"Total Cost: ${total_cost}")

# 4. Convert tuple to list to modify quantity
item_list = list(item)
item_list[2] = 3  # updated quantity

# 5. Convert back to tuple and print all values
updated_item = tuple(item_list)
print("Updated Tuple:", updated_item)

# Optional: Calculate and print new total cost
_, updated_price, updated_quantity = updated_item
updated_total_cost = updated_price * updated_quantity
print(f"Updated Total Cost: ${updated_total_cost}")
