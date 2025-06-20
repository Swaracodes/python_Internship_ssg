// Object intro
const person = {
    name : "Sneha",
    age : 20,
    hobbie : ["chess","games","Coding"]
}
console.log(typeof person);
// -----------------------------------------------------------

// how to access data from objects (Dot Notation)
console.log(person.name);
console.log(person.age);
console.log(person);
console.log(person.hobbie);

// Accessing with help of key other way (Bracket Notation)
console.log(person["name"]);
console.log(person["age"]);
console.log(person["hobbie"]);
// -----------------------------------------------------------

// how to add key value pair to objects (Dot Notation)
person.gender = "Female";
console.log(person);

// adding with help of (bracket Notation)

person["city"]="Nashik";
console.log(person);

// Feaching keys by using for in loop
for(let key in person){
     console.log(person.key);
}

// feaching by using Objects.keys(person);

console.log(Object.keys(person));
// Gives Array of Keys
console.log(Object.values(person));
// Gives Array of Values
//-------------------------------------------------------------

console.log(typeof Object.values(person));

// Objects inside Array

const users = [
    {
    userid : 1,
    user_name: "Sneha",
    gender : "Female"},
    {
    userid : 2,
    user_name: "Priyanka",
    gender : "Female"},
    {
    userid : 3,
    user_name: "Tanu",
    gender : "female"},

]

console.log(users);

// Iterating it :

for(let user of users){
    console.log(user.user_name);
    console.log(user.userid);
    console.log(user.gender);
}

//Sperd operator
// Cloning in Objects

const obj1 = {
    key1 : "value1",
    key2 : "value2",
};
const obj2 = {
    key3 : "value3",
    key4 : "value4",
};

// const newobj = {...obj1}
const newobj = {...obj1,...obj2};

console.log(newobj);

// #################### Object Destructuring ###################


const band = {
    bandName : "ZUDIO",
    productName: "Lipstick",
};

const{ bandName, productName}= band;
console.log(band);
