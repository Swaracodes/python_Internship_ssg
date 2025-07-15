import time
from functools import wraps

def log_execution(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.time()
        print(f"[START] {func.__name__} called at {time.ctime(start_time)} with args: {args}, kwargs: {kwargs}")
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"[END] {func.__name__} ended at {time.ctime(end_time)}")
        print(f"Execution time: {end_time - start_time:.4f} seconds\n")
        return result
    return wrapper

@log_execution
def add(a, b):
    time.sleep(1)
    return a + b

@log_execution
def greet(name):
    time.sleep(0.5)
    return f"Hello, {name}!"

# Demo
print(add(5, 7))
print(greet("Swara"))

