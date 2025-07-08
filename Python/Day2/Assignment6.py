# Assignment 6: Dictionary Program

# 1. Store student names and their grades in a dictionary
students = {
    "Tanuja": 85,
    "Sneha": 90,
    "Sanika": 78
}

# 2. Allow adding new students
# You can loop this or just add one for demo
new_name = input("Enter new student's name: ")
new_grade = float(input(f"Enter grade for {new_name}: "))
students[new_name] = new_grade

# 3. Find the average grade
average_grade = sum(students.values()) / len(students)
print(f"\nAverage Grade: {average_grade:.2f}")

# 4. Identify the top performer
top_student = max(students, key=students.get)
print(f"Top Performer: {top_student} with grade {students[top_student]}")
