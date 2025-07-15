class Student:
    def __init__(self, name, student_id):
        self.name = name
        self.student_id = student_id
        self.courses = {}  # empty dictionary to store course and grade

    def enroll(self, course_name):
        self.courses[course_name] = None  # add course with no grade yet

    def update_grade(self, course_name, grade):
        if course_name in self.courses:
            self.courses[course_name] = grade  # update the grade

    def calculate_gpa(self):
        total = 0
        count = 0
        for grade in self.courses.values():
            if grade is not None:
                total += grade
                count += 1
        if count == 0:
            return 0
        return total / count  # average grade

    def display_info(self):
        print("Name:", self.name)
        print("Student ID:", self.student_id)
        print("Courses and Grades:")
        for course, grade in self.courses.items():
            print(f" - {course}: {grade}")
        print("GPA:", self.calculate_gpa())
# Create first student
s1 = Student("Rahul", "101")
s1.enroll("Math")
s1.enroll("Science")
s1.update_grade("Math", 80)
s1.update_grade("Science", 90)
s1.display_info()

# Create second student
s2 = Student("Anjali", "102")
s2.enroll("English")
s2.enroll("History")
s2.update_grade("English", 85)
s2.update_grade("History", 95)
s2.display_info()
