//Usage ==> Loops are used to perform a repeated action based on conditions


//FOR LOOP
//Syntex
// for (initialization; condition; finalExpression) {
//     // code
//   };

  //Example
  for (let i = 0; i < 9; i++) {
    console.log(i);
  }
// we can exit the loop using break statement also;
for (let i = 0; i < 9; i++) {
    if(i === 6){
        break;
    }
    console.log("Total items:" + i);
  }

  //Common Pitfall:Exceeding the Bounds of an Array

const arr = [ 1, 2, 3 ];

for (let i = 0; i <= arr.length; i++) {
  console.log(arr[i]);
}


//FOR.....IN LOOP
//Syntax
for (property in object) {
    // code
  };
//EXAMPLE

const capitals = {
    a: "Athens",
    b: "Belgrade",
    c: "Cairo"
  };
  
  for (let key in capitals) {
    console.log(key + ": " + capitals[key]);
  }
  
//Common Pitfall: Unexpected Behavior When Iterating Over an Array
const array = [1, 2, 3];

for (const i in array) {
  console.log(i);
}// 0 // 1 // 2

  

//For.....Of LOOP ==> The for...of loop iterates over the values of many types of iterables, including arrays, and special collection types like Set and Map. For each value in the iterable object, the code in the code block is executed.

//Syntax

for (variable of object) {
  // code
}


//Example
//ARRAYs
const arr2 = [ "Fred", "Tom", "Bob" ];

for (let i of arr) {
  console.log(i);
};//fred tom bob


//MAP
const m = new Map();
m.set(1, "black");
m.set(2, "red");

for (let n of m) {
  console.log(n);
};// [1, black] // [2, red]

//SET
const s = new Set();
s.add(1);
s.add("red");

for (let n of s) {
  console.log(n);
}// 1 red



//WHILE LOOP ====> The while loop starts by evaluating condition. If condition evaluates to true, the code in the code block gets executed. If condition evaluates to false, the code in the code block is not executed and the loop ends.


//Syntax
while (condition) {
  // statement
};


//EXAMPLE

let i = 1;
while(i < 10){
  console.log(i);
  i++;
};


//DO.........WHILE LOOP ===> First the code in  the block is exicuted atleast once than the condition is checked if its true it will loop over other wise loop will stop;

//Syntax

do {
  // statement
} while(condition);


//EXAMPLE
let a = 1;

do {
  console.log(a);
  a++;
} while (a < 10);
