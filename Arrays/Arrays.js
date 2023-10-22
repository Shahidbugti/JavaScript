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
console.log(nobleGase.length);




//MULTIDIMENSIONAL ARRAYS
let elements = [[['H', 'Li', 'Na'], ['Be', 'Mg']], [['B', 'Al'], ['C', 'Si']]];
//Will print first element of the outermost array.
console.log(elements[0]); // [['H', 'Li', 'Na'], ['Be', 'Mg']]

//Will print the first element of the first sub-array within the outermost array.
console.log(elements[0][0]); // ['H', 'Li', 'Na']

//Will print the first element of the first sub-array within the first sub-array.
console.log(elements[0][0][0]); // 'H'



//SPARSE ARRAYS
//Sparse arrays are arrays containing empty slots
let firstGroup = ['H', 'Li', 'Na',, 'K', 'Rb', 'Cs'];
console.log(firstGroup);//After "Na" there is a empty space

// Also created by Increasing the length property
firstGroup.length = 11;
console.log(firstGroup);


//COMPARISON OF TWO OR MORE ARRAYS
let fruits = ["apple", "banana"];
let fruit = ["apple", "banana"];
console.log(fruits === fruit);//False

//AND
let dough1 = ['flour', 'water', 'yeast', 'salt'];
let dough2 = dough1;
console.log(dough1 === dough2);//True


//SPREAD OPERATORS
let alkali = ['Li', 'Na', 'K'];
let alkEarth = ['Be', 'Mg', 'Ca'];
let metals = [...alkali, ...alkEarth];
console.log(metals);// ['Li', 'Na', 'K', 'Be', 'Mg', 'Ca']

//REST PERAMETER
function f1(first, second, third, ...others) {
	console.log(first);
    console.log(second);
    console.log(third);
    console.log(others);
};

f1('He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn');
// He
// Ne
// Ar
// ['Kr', 'Xn', 'Rn']