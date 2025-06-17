/* Keywords Are reseved words of Any Language
   1.var: redefined and redeclared
   2.let: only redefined and not redeclare
   3.const: not redeclare and not redefined
*/

var A=100;
var A=300;
console.log("Value of A: ",A);

let S=200;
//let S=400; error thrown: Identifier 'S' has already been declared
console.log("Value of S: ",S);
S=400;
console.log("Value of S After changes: ",S);

const pi=3.14;
//pi=100; Error thrown:  Assignment to constant variable.
console.log("Value of Constant: ",pi);