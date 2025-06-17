// logical oprator
console.log("Logical And: ",5>2 && 2>7);
console.log("Logical And: ",5>2 || 2>7);
console.log("Logical And: ", !(2>7));

//Relational operator
console.log("Relational operator grater than: ",5>2);
console.log("Relational operator grater than or equal to: ",5>=2);
console.log("Relational operator less than: ",1<=2);
console.log("Relational operator less than or equal to: ",1<=2);
console.log("Relational operator equal to: ",5==2);
console.log("Relational operator not equal to: ",5!=2);

//Switch case

var a=2;
switch(a)
{
    case 1: console.log("you select 1");
            break;
    case 2: console.log("you select 2");
            break;
    case 3: console.log("you select 3");
            break;
    default:console.log("invalid input");
            break;
}

//ternary oprator

var TO= 10>20? 10:20;
console.log("Greater number between 10 and 20: ", TO)