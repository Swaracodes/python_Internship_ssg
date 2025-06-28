//  Function Declaration & Calling

function printText(){
    console.log("This is console text");
}
printText(); // called multiple times

// Function with Return Value

function addition() {
  return 2 + 4;
}
console.log(addition()); // 6

// Function with Parameters
function addition1(num1, num2){
  return num1 + num2;
}
console.log(addition1(10, 20)); // 30

// Dealing with Missing Parameters

function additionofThree(n1,n2,n3){
  return n1+n2+n3;
}
console.log(additionofThree(10, 20)); // 10 + 20 + undefined = NaN

// check even or odd
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(2)); // true

// Get First Character of String

function firstChar(str){
  return str[0];
}
console.log(firstChar("abcdef")); // 'a'

// Linear Search in Array

function linearSearch(arr, target) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === target) return i;
  }
  return -1;
}

// Arrow Function
console.log("Arrow function");
const printText1 = () => {
  console.log("This is console text");
}
printText1(); 

const addition2 = () => {
  return 2 + 4;
}
console.log(addition2()); // Output: 6

const additionOfThree2 = (num1, num2, num3) => {
  return num1 + num2 + num3;
}
console.log(additionOfThree2(10, 20, 30)); // Output: 60

const isEven1 = (num) => {
  return num % 2 === 0;
}
console.log(isEven1(10)); // Output: true

// CallBack Function
console.log("Call Back Function");

function myfunc2() {
    console.log("inside my function 2.");
}
function myfunc(callback) {
    callback(); // call the function passed as argument
}
myfunc(myfunc2); // myfunc2 is passed and then executed

// More detail example
function myfunc2(name){
    console.log("inside my function 2.");
    console.log(`my name is ${name}`);
}

function myfunc(callback){
    console.log("hello there code is been executed");
    callback("Sneha Gaikwad"); // calling the passed function with an argument
}

myfunc(myfunc2);

// function return function
function myfunc() {
    function hello() {
        return "hello world";
    }
    return hello;
}

const ans = myfunc();
console.log(ans());

// function inside function

const app = () => {

    // Declaring function inside function
    const myfunction = () => {
        console.log("Inside myFunction");
    }

    const addition = (num1, num2) => {
        return num1 + num2;
    }

    const multiply = (num1, num2) => num1 * num2;

    // Actions of Main Function:
    console.log("inside app");
    myfunction();
    console.log(addition(5, 3));
    console.log(multiply(5, 3));
}

app(); // Main function is called

// Default parameters
console.log("Without default parameter")
function addtwo(a, b) {
    return a + b;
}
const ans1 = addtwo(4);
console.log(ans1); // NaN (4 + undefined)

console.log("With default parameters");

function addtwo1(a, b = 0) {
    return a + b;
}
const ans2 = addtwo1(4, 8);
console.log(ans2); // 12

// Scopeing 
// ################### Block Scope with let and const ###################

{
    let firstChar = "let-block";
    const name_var = "const-block";
    console.log("Inside block: let =", firstChar);     // ✅ Accessible inside block
    console.log("Inside block: const =", name_var);    // ✅ Accessible inside block
}
// console.log(firstChar); // ❌ ReferenceError: firstChar is not defined
// console.log(name_var);  // ❌ ReferenceError: name_var is not defined

// ######################################################################

console.log("---------------------------------------------------");

// ################### Same Name in Different Scopes ###################

{
    const firstname = "Sneha";
    console.log("Block scope firstname:", firstname); // Sneha
}

const firstname = "Shubham";
console.log("Global scope firstname:", firstname);    // Shubham

// ######################################################################

console.log("---------------------------------------------------");

// ################### var is Function Scoped ###################

{
    var varName = "Sneha";
}
console.log("Accessing var outside block:", varName); // ✅ Accessible

// ######################################################################

console.log("---------------------------------------------------");

// ################### Function Scope and Lexical Scope ###################

let firstnameOuter = "abcd"; // Case 2: Global lexical scope

function myApp() {
    if (true) {
        let firstname = "Sneha"; // Case 1: Block-scoped
        console.log("Inside if block:", firstname); // ✅ Sneha
    }

    // This line will cause ReferenceError if uncommented because `firstname` was block scoped
    // console.log("Outside if block:", firstname); // ❌ ReferenceError (Case 1)

    // Accessing global variable due to lexical scope
    console.log("Lexical scope (outer variable):", firstnameOuter); // ✅ abcd (Case 2)
}

myApp();
// ######################################################################
console.log("Proble without using rest parmeters");
function myfunction3(a, b, c) {
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}

myfunction3(1, 3, 4, 5, 6, 7);
// Only a, b, c are printed — extra values are ignored

console.log("Solution using rest parmeters");
function myfunction4(a, b, ...c) {
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}

myfunction4(1, 3, 4, 5, 6);

const addAll = (...numbers) => {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

const ans3 = addAll(1,2,3,4,5,6,7,8,9,10);
console.log(ans3);

//************************************************************************ */
// Without destructing
const person = {
    firstname: "Sneha",
    gender: "female",
};

function printpersonDetails(obj) {
    console.log(obj.firstname); // sneha
    console.log(obj.gender);    // female
    console.log(obj.age);       // undefined
}

printpersonDetails(person);
// with destructring 
const person1 = {
    firstname1: "sneha",
    gender1: "female",
    age1: 20,
};

function printpersonDetails1({ firstname1, gender1, age1 }) {
    console.log(firstname1); // sneha
    console.log(gender1);    // female
    console.log(age1);       // 20
}

printpersonDetails1(person1);
