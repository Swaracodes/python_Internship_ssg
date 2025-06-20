// ##################### Every Method #####################

const numbers = [2,4,6,8,10];

const ans = numbers.every((number)=>{
    return number % 2 ===0;
})
console.log(ans);// returns boolean values

// ####################### fill Method ##################################

const number = [1,2,3,4,5,76,6,78,9,9,8];

number.fill(0,3,7);
console.log(number);// 0 will be filled, start from 3rd index, End before 7th index

// ###################### filter Method in Array Methods. ###############################

const num = [1,3,2,6,4,8];
const isEven= function(num){
    return num % 2 === 0;
}
const Even_num = num.filter(isEven);
console.log(Even_num);// It is stored in array and return as array

// ###################### Find Method in Array Methods. ###############################


 const myArray = ["hello","catt" ,"dog","lion"];
 function islength3(string){
           return string.length===3;
 }
 const answer = myArray.find(islength3);
 console.log(ans);

//  ################# For Each ##############
const num1 = [4,2,5,8];

function myfunct(number,index){
    console.log(`index is ${index} and number is ${num1}`);
}

// ################### Map method #####################

const num2 = [4,3,5,6,5];
const sqr = function (num2){
    return num2 * num2;
}

const sqrnumber = num2.map(sqr);
console.log(sqrnumber);

// ###################### Reduce Method ###################

const num4 = [1,2,3,4,5,10];

const total = num4.reduce((accumulator,currentvalue)=>{
       return accumulator + currentvalue;
});

console.log(total);

// ######################## some method ####################### //

const num5 = [3,5,8,9];
const answ = num5.some((number)=>{

    return number % 2==0;
});

console.log(answ);
// ######################## Sort method ####################### //

const num6 = [5,9,1200,400,3000];
num6.sort((a,b)=>{
    return a-b;
});
console.log(num6);