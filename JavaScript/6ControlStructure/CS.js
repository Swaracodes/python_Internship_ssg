//If statement
var a=10,b=2;
if(a>b)
{
    console.log("A is greater than B");
}

//If-else Statement
if(a<b)
{
    console.log("A is greater than B");
}
else
{
    console.log("B is Greater than A");
}

//If else ladder
var mark=55;
if(mark<=75)
{
    console.log("Distintion");
}
else if(mark<=65)
{
    console.log("First class");
}
else
{
    console.log("Second class");
}

//Truthly-fasly
//Truthly: hello,positive values, negative values, [],{}
//Falsly: false,0,null,undefine,nan
if(NaN)
{
    console.log("Truth block");
}
else
{
    console.log("False block");
}