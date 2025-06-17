let fName="Sneha";
let lName="Gaikwad";

var Full_Name=fName+ " " +lName+"      ";// String concatination
console.log("Full Name: ",Full_Name);

console.log("Length of Full name: ", Full_Name.length);//string length

//Boolean values
console.log(" 5 < 2: ", 5<2);
console.log(" 5 > 2: ", 5>2);
console.log(" 5 == 2: ", 5==2);
console.log(" 5 != 2: ", 5!=2);

//Sliceing
console.log("Full Name: ",Full_Name.slice(0,7));

//Null And Undefined Also typeOf
var A;
var B=null;
console.log("Value of A: ",A);
console.log("Value of B: ",B);
console.log("Type of Full Name: ",typeof(Full_Name));

//Trim, toUpper Case, toLower case
var X="Swara";
console.log("All letter in Upper case: ",X.toUpperCase());
console.log("All letter in Lower case: ",X.toLowerCase());
var newString=Full_Name.trim();
console.log("Length of new Full name: ",newString.length);
console.log("Length of Full name: ",Full_Name.length);

//Template String
var first_name="Sneha",age=20;
let intro =`my name is ${first_name} and my age is ${age}`;
console.log(intro);