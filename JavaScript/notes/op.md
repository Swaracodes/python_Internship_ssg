## Operators in JavaScript
- Arithmatic operators
>     let a = 10;
    let b = 3;

    let sum = a + b;       // Addition: 13
    let difference = a - b; // Subtraction: 7
    let product = a * b;    // Multiplication: 30
    let quotient = a / b;   // Division: 3.333...
    let remainder = a % b;  // Modulus (remainder): 1
    let exponent = a ** b;  // Exponentiation (10 to the power of 3): 1000

- Assignment operators
>     let x = 5; // Simple assignment

    x += 3; // Addition assignment: x is now 8 (x = x + 3)
    x -= 2; // Subtraction assignment: x is now 6 (x = x - 2)
    x *= 4; // Multiplication assignment: x is now 24 (x = x * 4)
    x /= 2; // Division assignment: x is now 12 (x = x / 2)

- Comparison operators
>     let num1 = 7;
    let num2 = 5;

    console.log(num1 == num2);  // Equal to: false
    console.log(num1 === num2); // Strict equal to (value and type): false
    console.log(num1 != num2);  // Not equal to: true
    console.log(num1 !== num2); // Strict not equal to: true
    console.log(num1 > num2);   // Greater than: true
    console.log(num1 <= num2);  // Less than or equal to: false

- Logical operators
>     let isAdult = true;
    let hasLicense = false;

    console.log(isAdult && hasLicense); // Logical AND: false (both must be true)
    console.log(isAdult || hasLicense); // Logical OR: true (at least one must be true)
    console.log(!isAdult);             // Logical NOT: false (inverts the boolean)

- unary operators
>     let count = 0;
    count++; // Increment: count is now 1
    count--; // Decrement: count is now 0

    let textNum = "123";
    let actualNum = +textNum; // Unary plus (converts to number): actualNum is 123 (number)
    console.log(typeof actualNum); // "number"

- Ternary operator
>     let age = 20;
    let status = (age >= 18) ? "Adult" : "Minor"; // status is "Adult"
