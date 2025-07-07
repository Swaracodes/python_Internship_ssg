## 🐍 Python Comments Summary:
- Single-line comment → Use #
> - Example:
> - This is a single-line comment
> - Multi-line comment → Use triple quotes 
> -  """ ... """ or ''' ... '''
> - """This is a multi-line comment.
> - Used to explain longer things."""
✅ Comments are ignored by Python when running code — they’re just for human readers to understand the code better.

# 🐍 Python Built-in Data Types
Python has the following data types built-in by default, in these categories:

    Text Type      :	str
    Numeric Types  :	int, float, complex
    Sequence Types :	list, tuple, range
    Mapping Type   :	dict
    Set Types      :	set, frozenset
    Boolean Type   :	bool
    Binary Types   :	bytes, bytearray, memoryview
    None Type      :	NoneType
Python provides several built-in data types which are grouped into the following categories:

## 📄 Data-types
```python
x = str("Hello World")  # type: str
x = int(20)	                                     :  int	
x = float(20.5)	                                 :  float	
x = complex(1j)	                                 :  complex	
x = list(("apple", "banana", "cherry"))	         :  list	
x = tuple(("apple", "banana", "cherry"))	     :  tuple	
x = range(6)	                                 :  range	
x = dict(name="John", age=36)	                 :  dict	
x = set(("apple", "banana", "cherry"))           :	set	
x = frozenset(("apple", "banana", "cherry"))	 :  frozenset	
x = bool(5)	                                     :  bool	
x = bytes(5)	                                 :  bytes	
x = bytearray(5)	                             :  bytearray	
x = memoryview(bytes(5))                         :  memoryview 


# 📋 Python List Methods with Examples

Python lists come with several built-in methods to manipulate and work with list data easily.

| Method       | Description                                                                              | Example |
|--------------|------------------------------------------------------------------------------------------|---------|
| `append()`   | Adds an element at the end of the list                                                   | `my_list.append(10)` |
| `clear()`    | Removes all the elements from the list                                                   | `my_list.clear()` |
| `copy()`     | Returns a copy of the list                                                               | `new_list = my_list.copy()` |
| `count()`    | Returns the number of elements with the specified value                                  | `my_list.count(2)` |
| `extend()`   | Adds the elements of a list (or any iterable), to the end of the current list            | `my_list.extend([4, 5])` |
| `index()`    | Returns the index of the first element with the specified value                          | `my_list.index(3)` |
| `insert()`   | Adds an element at the specified position                                                 | `my_list.insert(1, 100)` |
| `pop()`      | Removes the element at the specified position (last by default)                          | `my_list.pop()` |
| `remove()`   | Removes the first item with the specified value                                           | `my_list.remove(3)` |
| `reverse()`  | Reverses the order of the list                                                           | `my_list.reverse()` |
| `sort()`     | Sorts the list in ascending order by default                                             | `my_list.sort()` |

---

## 🔍 Code Example

```python
my_list = [1, 2, 3]

my_list.append(4)         # [1, 2, 3, 4]
my_list.insert(1, 100)    # [1, 100, 2, 3, 4]
my_list.remove(2)         # [1, 100, 3, 4]
print(my_list.index(3))   # Output: 2
my_list.extend([5, 6])    # [1, 100, 3, 4, 5, 6]
print(my_list.count(3))   # Output: 1
my_list.sort()            # [1, 3, 4, 5, 6, 100]
my_list.reverse()         # [100, 6, 5, 4, 3, 1]
copy_list = my_list.copy()
my_list.clear()           # []
print(copy_list)          # [100, 6, 5, 4, 3, 1]
