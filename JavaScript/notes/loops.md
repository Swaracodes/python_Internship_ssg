## Loops
- for
> for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}
// Output:
// Iteration number: 0
// Iteration number: 1
// Iteration number: 2
// Iteration number: 3
// Iteration number: 4

- while
> let count = 0;
while (count < 3) {
  console.log("Count is: " + count);
  count++;
}
// Output:
// Count is: 0
// Count is: 1
// Count is: 2

- do-while
> let i = 0;
do {
  console.log("Value of i: " + i);
  i++;
} while (i < 2);
// Output:
// Value of i: 0
// Value of i: 1

- forEach()
> const numbers = [10, 20, 30];
numbers.forEach(function(number) {
  console.log("Number: " + number);
});
// Output:
// Number: 10
// Number: 20
// Number: 30