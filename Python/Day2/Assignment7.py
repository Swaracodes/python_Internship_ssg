# Assignment 7: Array (List) Program

# 1. Store daily temperatures in a list (example: 7 days)
temperatures = [30.5, 32.0, 29.0, 35.2, 33.8, 28.4, 31.1]

# 2. Find the hottest and coldest day
hottest = max(temperatures)
coldest = min(temperatures)
print("Temperatures:", temperatures)
print(f"Hottest Temperature: {hottest}°C")
print(f"Coldest Temperature: {coldest}°C")

# 3. Calculate average temperature
average_temp = sum(temperatures) / len(temperatures)
print(f"Average Temperature: {average_temp:.2f}°C")

# 4. Calculate days above average
above_avg_days = [temp for temp in temperatures if temp > average_temp]
print(f"Number of days above average: {len(above_avg_days)}")
print("Temperatures above average:", above_avg_days)

# 5. Demonstrate list slicing
print("First 3 days:", temperatures[:3])
print("Last 2 days:", temperatures[-2:])
print("Middle days (2nd to 5th):", temperatures[1:5])
