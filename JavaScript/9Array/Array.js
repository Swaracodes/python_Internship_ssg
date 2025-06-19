let arr = [1,2,3,4,5];

console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

let names = ["Sneha","Tanuja","Priyanka","Hemlata"];

console.log(names);
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

let mixed = [1,2,3.23,"Sneha",null,undefined];
console.log(mixed);

let car = ["Lamborgine","Porche","Kia"];
console.log(car);
car[1]="Swift";
console.log(car);

//to check if fruit is a object of array
let fruits = ["apple","mango","grapes"];

console.log(typeof fruits);
console.log(Array.isArray(fruits));
//push
fruits.push("banana");
console.log(fruits);
//pop
let poppedelement=fruits.pop();
console.log(fruits);
console.log(poppedelement);
//unshift
fruits.unshift("banana");
fruits.unshift("myfruit");
console.log(fruits);
//shift
let shiftedele = fruits.shift();
console.log(fruits);
console.log(shiftedele);

//Cloning of Array
let array1=["item1","item2"];
//let array_2 = array_1;
let array2=["item1","item2"];

array1.push("item3");

console.log(array1==array2);
console.log(array1);
console.log(array2);

// cloning with slice

// fastest cloning method

let arr1=["item1","item2"];
//let array_2 = array_1;
let arr2=arr1.slice(0)

arr1.push("item3");

console.log(arr1==arr2);
console.log(arr1);
console.log(arr2);


let a1=["item1","item2"];
// let array_2 = array_1;
let a2=[].concat([a1]); 

// array_1.push("item3");
console.log(a1==a2);
console.log(a1);
console.log(a2);

//spread
let arra_1=["item1","item2"];
let arra_2=[...arra_1];

arra_1.push("item3");
console.log(arra_1==arra_2);
console.log(arra_1);
console.log(arra_2);
