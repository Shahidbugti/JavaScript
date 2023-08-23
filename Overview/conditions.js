// const age = prompt("enter your age");
// if(age >=18){
//     console.log("great keep processing");
// }
// else{
//     console.log("sorry but you can't process further");
// }

// TRUTHY AND FALSY VALUES IN JAVASCRIPT
// Falsy values
console.log(Boolean(false));         // false
console.log(Boolean(0));             // false
console.log(Boolean(null));          // false
console.log(Boolean(undefined));     // false
console.log(Boolean(''));            // false
console.log(Boolean(NaN));           // false

// Truthy values
console.log(Boolean(true));          // true
console.log(Boolean(1));             // true (any non-zero number is truthy)
console.log(Boolean('Hello'));       // true (any non-empty string is truthy)
console.log(Boolean([]));            // true (an empty array is still an object, so it's truthy)
console.log(Boolean({}));            // true (an empty object is also truthy)
console.log(Boolean(function() {})); // true (a function is truthy)



