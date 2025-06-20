## Datatypes in Javascript
- Primitive Data Types
> Basic data types
- Refrence Data Types
> Derived data types

## Primitive data types
- String 
>     let name = "John Doe";
- Number
>     let age = 30;
>     let price = 19.99;
- Boolean
>     let isActive = true;
- Undefined
>     let city; // city is undefined
- Null
>     let car = null;
- Symbol
>     let id = Symbol("uniqueId");
- Bigint
>     let largeNumber = 9007199254740991n; // The 'n' indicates a BigInt

## Reference Data types
- Object
>     let person = {
        firstName: "Jane",
        lastName: "Smith"
    };

- Array
>     let arr1 = [1, 2, 3];

    let arr2 = arr1; // arr2 now references the same array as arr1
    arr2.push(4); // Modifying arr2 also changes arr1

    console.log(arr1); // Output: [1, 2, 3, 4]

- Functions
>     function greet(name) {
      console.log(`Hello, ${name}!`);
    }

    let myFunc = greet; // myFunc now references the same function as greet
    myFunc("Bob"); // Output: Hello, Bob!