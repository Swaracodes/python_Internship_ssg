class Student:
    def __init__(self, name, student_id):
        self.name = name
        self.student_id = student_id
        self.courses = {}         # {course_name: grade}
        self.course_credits = {}  # {course_name: credits}

    def enroll(self, course_name):
        self.courses[course_name] = None

    def update_grade(self, course_name, grade):
        if course_name in self.courses:
            self.courses[course_name] = grade

    def add_credits(self, course_name, credits):
        self.course_credits[course_name] = credits

    def calculate_gpa(self):
        total = 0
        count = 0
        for grade in self.courses.values():
            if grade is not None:
                total += grade
                count += 1
        return total / count if count != 0 else 0

    def calculate_weighted_gpa(self):
        total_weighted = 0
        total_credits = 0
        for course, grade in self.courses.items():
            if grade is not None and course in self.course_credits:
                credit = self.course_credits[course]
                total_weighted += grade * credit
                total_credits += credit
        return total_weighted / total_credits if total_credits != 0 else 0

    def get_highest_grade(self):
        max_course = None
        max_grade = -1
        for course, grade in self.courses.items():
            if grade is not None and grade > max_grade:
                max_grade = grade
                max_course = course
        return (max_course, max_grade)

    def display_info(self):
        print("Name:", self.name)
        print("Student ID:", self.student_id)
        print("Courses and Grades:")
        for course, grade in self.courses.items():
            print(f" - {course}: {grade} | Credits: {self.course_credits.get(course, 'N/A')}")
        print("GPA:", self.calculate_gpa())
        print("Weighted GPA:", self.calculate_weighted_gpa())

    def __str__(self):
        return f"Student(Name: {self.name}, ID: {self.student_id}, GPA: {self.calculate_gpa():.2f})"
s1 = Student("Ravi", "S003")
s1.enroll("Math")
s1.add_credits("Math", 4)
s1.update_grade("Math", 90)

s1.enroll("Physics")
s1.add_credits("Physics", 3)
s1.update_grade("Physics", 85)

s1.enroll("History")
s1.add_credits("History", 2)
s1.update_grade("History", 80)

s1.display_info()

# Get highest grade course
course, grade = s1.get_highest_grade()
print(f"\nHighest Grade: {grade} in {course}")

# Print string representation
print("\nStudent Summary:", s1)
