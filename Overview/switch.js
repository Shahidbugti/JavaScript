// const text = "banana";
// switch(text){
//     case "banana":
//             console.log("this is banana");
// break;
//     case "Apple":
//         console.log("this is Apple");  
// }


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
}