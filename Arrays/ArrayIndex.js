//ARRAY ===> In JavaScript, an array is an object constituted by a group of items having a specific order.;
//Created by a literal-syntax,Its content is insde Square brackets,Seperated by comma;
//Not have fixed size 
let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];

console.log(nobleGases);
//Also can use Array Constructor,
let noblGases = Array('He', 'Ne', 'Ar', 'Kr', 'Xn');

console.log(noblGases);


//ARRAY INDEXING
let nobleGase = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];
console.log(nobleGase[0]);
console.log(nobleGase[1]);
console.log(nobleGase[3]);
console.log(nobleGase[4]);
//this will give undeffined because this is out of index range;
console.log(noblGases[5]);

//Appending a new value in Array
let nobeGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];
nobeGases[5] = 'Rn'; 
console.log(nobeGases); //Appended a fifth value "Rn";

//"LENGTH" property
console.log(nobeGases.length);