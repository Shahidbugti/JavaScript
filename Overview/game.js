//Genrate a random number
//Give the user the ability to guess
//if they are wrong, ask them again
//If they win congratulate them

function guessGame(){
   let randomNr = Math.floor(Math.random()*10);
   let guess;

   do{
    guess = prompt("Guess a number between 1 - 10");
    console.log(guess , randomNr);
    if(randomNr > guess){
        console.log("You guessed too low");
    }
    else if(randomNr < guess){
        console.log("you gussed too high");
    }
   }
   while(guess != randomNr);
   console.log("congratulations you won");
}
guessGame();

//OTHER WAY TO DO
function guessGame(){
    let randomNr = Math.floor(Math.random()*10 + 1);
    let guess;
    while(true){
        guess = prompt("Guess a number a b/w 1 - 10");
        guess = parseInt(guess);

        if(isNaN(guess)){
            console.log("Please enter a valid number");
        }
       
 if(randomNr > guess){
     console.log("guess is lower");
        } else if(randomNr < guess){
            console.log("guess is higher");
        }
        else{
            console.log("COngratulations, You won");
            break;
        }
    }
}
guessGame();