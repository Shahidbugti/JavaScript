// function greet(){
//     console.log("Welcome to our Website " + name);//I cant access name here because i havent passed the arrgument.                                                 //THIS CONCEPT IS KNOWN AS "LEXICAL SCOPING" OR "FUNCTION SCOPE"
//  }
 
//  console.log("hello");
 
//  function signUp(){
//      let name = prompt("Enter your name");
//      greet();
//  }
 
//  signUp();


//Here i can access name because i have passed  arrgument

// function greet(name){
//    console.log("Welcome to our Website " + name);
// }
// console.log("hello");

// function signUp(){
//     let name = prompt("Enter your name");
//     greet(name);
// }

// signUp();




function max(nr1, nr2){
    if(nr1 > nr2){
        return nr1;
    }
    else{
        return nr2
    }
}
let number = max(1 , 5)
console.log(number);