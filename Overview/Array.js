//Array=>is an obect that can store multiple values at once 

//[]=>these are called array litral

const listUser = ["Shahid","Zahid","Irfan","Noman","Awais","Saad"];
console.log(listUser);
console.log(listUser[0]);
console.log(listUser[1]);
console.log(listUser[2]);
console.log(listUser[3]);
console.log(listUser[4]);
console.log(listUser[5]);

//checking datatype of Array
console.log(typeof listUser);

listUser.pop(); //=>removes the last element fron the Array
console.log(listUser);

listUser.push("new");//=>this string to last of Array
console.log(listUser)

listUser.shift();//=>this removes first element from Array
console.log(listUser);

console.log(listUser.length);//=>this is used to measur the length of Array

console.log(listUser.indexOf("Shahid"));//=>this is used to find index of specific element in Array