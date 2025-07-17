import math

# Base class
class Shape:
    def area(self):
        return 0

# Child class 1
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return math.pi * self.radius * self.radius

# Child class 2
class Rectangle(Shape):
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def area(self):
        return self.length * self.width

# List of different shapes (polymorphism in action)
shapes = [Circle(5), Rectangle(4, 6), Circle(3)]

print("=== Shape Areas (Polymorphism) ===")
for shape in shapes:
    print(f"Area: {shape.area():.2f}")
