//Switch case statements go through every condeition and check strickt equality between codition and expression
//Will print the case wherre condition matches the expression
//If at many occasions condition and expression matches than will print first one


//Switch statements works with block scoped veriables means if a veriable is defined in one case you cannot define it in another case;

const errand = "Going Shopping";
switch (errand) {
  case "Going to the Dentist":
    let message = "I hate going to the dentist";
    console.log(message);
    break;
  case "Going Shopping":
    let message = "I love to shop";
    console.log(message);
    break;
  default:
    console.log("No errands");
    break;
}

// In order to get rid of that error message, the cases need to be wrapped in a set of curly braces.

const errand = "Going Shopping";
switch (errand) {
  case "Going to the Dentist": {
    let message = "I hate going to the dentist";
    console.log(message);
    break;
  }
  case "Going Shopping": {
    let message = "I love to shop";
    console.log(message);
    break;
  }
  default: {
    console.log("No errand");
    break;
  }
}
























const text = "banana";
switch(text){
    case "banana":
            console.log("this is banana");
break;
    case "Apple":
        console.log("this is Apple");  
}

//Practice game
const userInput = prompt("Enter your favorite fruit");
const fruit = userInput.toLocaleLowerCase();
switch (fruit) {
    case "apple":
        console.log("This is apple");
    break;
        case "banana":
        console.log("this is banana");
    break;
        default:
        console.log("unknown fruit");
    break;
};
