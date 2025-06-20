## Methods in JavaScript

- Strings
- Arrays

## String Methords
- Lenght
>    let text = "Hello";
    let len = text.length; // len will be 5

- charAt(index)
>     let text = "Hello";
    let char = text.charAt(1); // char will be "e"

- charCodeAt(index)
>     let text = "Hello";
    let code = text.charCodeAt(0); // code will be 72 (for 'H')

- concat(str1, str2, ...)
>     let str1 = "Hello";
    let str2 = "World";
    let result = str1.concat(" ", str2); // result will be "Hello World"

- indexOf(substring, start)
>     let text = "Hello World";
    let index = text.indexOf("o"); // index will be 4

- lastIndexOf(substring, start)
>     let text = "Hello World";
    let index = text.lastIndexOf("o"); // index will be 7

- slice(start, end)
>     let text = "Apple, Banana, Kiwi";
    let part = text.slice(7, 13); // part will be "Banana"

- substring(start, end)
>     let text = "Apple, Banana, Kiwi";
    let part = text.substring(7, 13); // part will be "Banana"

- substr(start, length)
>     let text = "Apple, Banana, Kiwi";
    let part = text.substr(7, 6); // part will be "Banana"

- replace(searchValue, replaceValue)
>     let text = "Visit Microsoft!";
    let newText = text.replace("Microsoft", "W3Schools"); // newText will be "Visit W3Schools!"

- replaceAll(searchValue, replaceValue)
>     let text = "I love cats. Cats are cute.";
    let newText = text.replaceAll("Cats", "Dogs"); // newText will be "I love cats. Dogs are cute."

- toUpperCase()
>     let text = "Hello World";
    let upper = text.toUpperCase(); // upper will be "HELLO WORLD"

- toLowerCase()
>     let text = "Hello World";
    let lower = text.toLowerCase(); // lower will be "hello world"

- trim()
>     let text = "   Hello World   ";
    let trimmed = text.trim(); // trimmed will be "Hello World"

- startsWith(substring, position)
>     let text = "Hello World";
    let starts = text.startsWith("Hello"); // starts will be true

- endsWith(substring, length)
>     let text = "Hello World";
    let ends = text.endsWith("World"); // ends will be true

- includes(substring, position)
>     let text = "Hello World";
    let includes = text.includes("World"); // includes will be true

- split(separator, limit)
>     let text = "Apple,Banana,Kiwi";
    let fruits = text.split(","); // fruits will be ["Apple", "Banana", "Kiwi"]


## Array Methods
- push(value)
>     let fruits = ["apple", "banana"];
    fruits.push("orange"); // fruits is now ["apple", "banana", "orange"]

- pop()
>     let fruits = ["apple", "banana", "orange"];
    let lastFruit = fruits.pop(); // lastFruit is "orange", fruits is now ["apple", "banana"]

- shift()
>     let fruits = ["apple", "banana", "orange"];
    let firstFruit = fruits.shift(); // firstFruit is "apple", fruits is now ["banana", "orange"]

- unshift()
>     let fruits = ["banana", "orange"];
    fruits.unshift("apple"); // fruits is now ["apple", "banana", "orange"]

- concat
>     let arr1 = [1, 2];
    let arr2 = [3, 4];
    let newArr = arr1.concat(arr2); // newArr is [1, 2, 3, 4]

- froEach()
>     let numbers = [1, 2, 3];
    numbers.forEach(num => console.log(num * 2)); // Outputs: 2, 4, 6

- map()
>     let numbers = [1, 2, 3];
    let doubledNumbers = numbers.map(num => num * 2); // doubledNumbers is [2, 4, 6]

- filter()
>     let numbers = [1, 2, 3, 4, 5];
    let evenNumbers = numbers.filter(num => num % 2 === 0); // evenNumbers is [2, 4]

- find()
>     let users = [{id: 1, name: "Alice"}, {id: 2, name: "Bob"}];
    let user = users.find(u => u.id === 2); // user is {id: 2, name: "Bob"}

- includes()
>     let colors = ["red", "green", "blue"];
    let hasGreen = colors.includes("green"); // hasGreen is true

- indexOf()
>     let colors = ["red", "green", "blue"];
    let index = colors.indexOf("green"); // index is 1

- splice()
>     let fruits = ["apple", "banana", "orange", "grape"];
    fruits.splice(1, 2, "kiwi", "mango"); // fruits is now ["apple", "kiwi", "mango", "grape"]

- slice()
>     let numbers = [1, 2, 3, 4, 5];
    let subArray = numbers.slice(1, 4); // subArray is [2, 3, 4]

- sort()
>     let numbers = [3, 1, 2];
    numbers.sort(); // numbers is now [1, 2, 3]

    