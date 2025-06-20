// ########### Arrow Function ##########

const addition = ()=>{
    return 2+4;
  }
  const result = addition();
  console.log(result);

// ########### Call back Function  #############

function myfunc(a){
    console.log(a);
    console.log('hello world');
}
myfunc();
myfunc("abc");
myfunc([1,2,3]);
myfunc({name:"abc",age:22});

