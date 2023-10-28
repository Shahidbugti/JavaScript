//Function ===> Functions are block of code encapsulates one isolated.


//DECLARING A FUNCTION
function name(paramer1,paramer2) {
  // the code statements to be executed
};


// INVOCATION OF FUNCTION ===> When we declare a function and than call it  that calling of function is called "invocation";
greeting();


//Diffrence between PERAMETER and ARGUMENT
// PERAMETRER ===> It is a veriable used in functions to recieve nd work with values that are passed to function when it i called
function add(a, b) {
  return a + b;
}//"a" and "b" are perameters

//ARGUMENT ===>  an "argument" refers to a value that is passed to a function when the function os called.
function add(a, b) {
  return a + b;
}
add(2 , 3); //2 and 3 are arguments


//HIGHER ORDER FUNCTIONS AND CALLBACK FUNCTIONS
// HIGHER OREDER FUNCTION ===> Function that take one or more than one function as argument or return a function as their result
function higherOrderFunction(func){
  console.log('I am higher order function')
  func()
}

higherOrderFunction(callbackFunction);
 
//CALLBACK FUNCION ===> A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some sort action.

