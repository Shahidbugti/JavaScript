//String
const data = "Shahid"; 
console.log(typeof data);

//number
 const dabo = 5;
 console.log(typeof dabo);

 //buleon
// this contain two values true and false

//undefined
let day;
console.log(typeof day);

//null
// this means variable has  value of nothing


//Symbol
const name = Symbol();
console.log(typeof name);



//CONCETINATION 

// string and string concetination
const greeting = "welcome to our website ";
const user = "shahid"
console.log(greeting+user);


//same thing can be done as

const greet = `welcome to our website ${user}`;
console.log(greet);


// number and string concetination
const num1 = "5";
const num2 = 6;
console.log(num1 + num2);

const num3 = num1+num2;
console.log(typeof num3);


// changing a string to number

const str = "120";
const num = parseInt(str);
console.log(num);

// This can be done in another way
const str2 = "120";
const number = parseFloat(str2);
console.log(number);

// or

let string = "123.45";
let no= Number(string);
console.log(no);

// or

let class1 = "5";
let class2 = +class1;
console.log(class2);


