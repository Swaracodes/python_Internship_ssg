## 1. Array (from array module)

**Description:**  
Array is a collection of elements of the same data type stored in a contiguous memory location.

**Operations:**
- Import: `from array import array`
- Create: `arr = array('i', [1, 2, 3])`
- Access: `arr[0]`
- Append: `arr.append(4)`
- Insert: `arr.insert(1, 10)`
- Remove: `arr.remove(2)`
- Pop: `arr.pop()`
- Loop: `for i in arr: print(i)`

---

## 2. String

**Description:**  
String is a sequence of Unicode characters enclosed in quotes.

**Operations:**
- Create: `s = "Hello"`
- Access: `s[0]`
- Slice: `s[1:4]`
- Length: `len(s)`
- Replace: `s.replace("H", "J")`
- Uppercase: `s.upper()`
- Concatenate: `s + " World"`
- Loop: `for ch in s: print(ch)`

---

## 3. Set

**Description:**  
Set is an unordered collection of unique items.

**Operations:**
- Create: `s = {1, 2, 3}`
- Add: `s.add(4)`
- Remove: `s.remove(2)`
- Union: `s1 | s2`
- Intersection: `s1 & s2`
- Difference: `s1 - s2`
- Loop: `for item in s: print(item)`

---

## 4. Tuple

**Description:**  
Tuple is an immutable ordered sequence of elements.

**Operations:**
- Create: `t = (1, 2, 3)`
- Access: `t[0]`
- Slice: `t[1:3]`
- Length: `len(t)`
- Count: `t.count(2)`
- Index: `t.index(3)`
- Loop: `for i in t: print(i)`

---

## 5. List

**Description:**  
List is a mutable ordered collection of elements.

**Operations:**
- Create: `lst = [1, 2, 3]`
- Access: `lst[0]`
- Append: `lst.append(4)`
- Insert: `lst.insert(1, 10)`
- Remove: `lst.remove(2)`
- Pop: `lst.pop()`
- Sort: `lst.sort()`
- Loop: `for i in lst: print(i)`

---

## 6. Dictionary

**Description:**  
Dictionary stores data in key-value pairs, where each key is unique.

**Operations:**
- Create: `d = {'a': 1, 'b': 2}`
- Access: `d['a']`
- Add: `d['c'] = 3`
- Update: `d.update({'d': 4})`
- Delete: `del d['b']`
- Keys: `d.keys()`
- Values: `d.values()`
- Loop: `for k, v in d.items(): print(k, v)`
