# Assignment 4: Basic Tuple Operations

# 1. Create a tuple of 5 student names
students = ("Swara", "Tanuja", "Priyanka", "Hemlata", "Steve")

# 2. Print the second student's name (index 1)
print("Second student:", students[1])

# 3. Check if "Alice" is in the tuple
is_present = "Swara" in students
print("Is Swara in the tuple?", is_present)

# 4. Concatenate with another tuple of 3 new students
new_students = ("Karen", "Tom", "Lucy")
all_students = students + new_students

# 5. Print the length of the final tuple
print("Final tuple of students:", all_students)
print("Total number of students:", len(all_students))
