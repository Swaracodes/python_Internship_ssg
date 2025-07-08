# Creating the frozen sets
A = frozenset([10, 20, 30, 40])
B = frozenset([30, 40, 50, 60])

# 1. Union
union_result = A | B
print("Union of A and B:", union_result)

# 2. Intersection
intersection_result = A & B
print("Intersection of A and B:", intersection_result)

# 3. Difference (A - B)
difference_result = A - B
print("Difference (A - B):", difference_result)

# 4. Symmetric Difference (A ^ B)
symmetric_diff_result = A ^ B
print("Symmetric Difference (A ^ B):", symmetric_diff_result)

# 5. Check if A is a superset of {10, 20}
is_superset = A.issuperset({10, 20})
print("Is A a superset of {10, 20}?", is_superset)

# 6. Try to add an element to A (observe error)
try:
    A.add(100)
except AttributeError as e:
    print("Error when trying to add to frozenset A:", e)

# 7. Print the length of A and B
print("Length of A:", len(A))
print("Length of B:", len(B))
