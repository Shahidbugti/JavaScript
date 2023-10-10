//VAR==>veriable defined with var are reasigned and redecleared
var a = 10;
var a = 15;
console.log(a);//output is 15

//SCOPE OF VAR ==> veriables defined with var has global/function/local scope


//HOISTING ==> hoisting is a machenism where variable are moved to top of there scope before excution of code
console.log(greeter);
var greeter = "say hello"
//here the output will be for the following code
var greeter;
console.log(greeter);
var greeter = "say hello";



// The variable functionally scoped defined with var effects the globaly defined variable
var greeter = "hello";
if(true){
    var greeter = "hello instead";
}
console.log(greeter);


//LET ==> veriables defined with "let" can be redeclared not redefined
let a = 8;
a = 10;
console.log(a);//Output is 10

//but

let a = 8;
let a = 10;
console.log(a);//Will throuh an error 
//SCOPE ==> veriable declared with "let" are block scoped

//BLOCK ==> chunk of code written inside {};

// HOISTING ===> Unlike "var" in "let" if we try to use a variable befoe decleration we will get a refrencee error;
console.log("c");
let c = 5;


//CONST ===> Can't be reasigned and redeclared 
const g = "10";
g = 10;//error

// const Z = "9";
// const Z= "10";//error
//SCOPE ===> Block scoped

// HOISTING ===> hoisted on top of scope but nott initialized


// camel case 
const firstName = "shahid";
const lastName = "bugti";