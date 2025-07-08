Set1 = {3,4,5,6}
Set2 = {1,2,3,4,5,6,7}

# union
set3 = Set1.union(Set2)
print(set3)

# intersection
set3 = Set1.intersection(Set2)
print(set3)

# Difference
set3 = Set2.difference(Set1)
print(set3)

# Symmetric-difference
set3 = Set2.symmetric_difference(Set1)
print(set3)

# Check subset
set3 = Set1.issubset(Set2)
print(set3)

# some bacis operation

setA={1,2,3,4,5,6}
setB={1,3,5,6,7,8,9,0}

setA.add(19)
print(setA)
setB.remove(8)
print(setB)