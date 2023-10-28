//DEFFINATION
//FUNCTIONS ===> A function is a block of code that encapsulates one isolated, self-contained behavior for the computer to perform.

//Why we need a function
// 1-)Code Reusability: Functions allow you to encapsulate a block of code and reuse it multiple times in your program.


const viratKohli = {
    matches: 254,
    runs: 12169,
    centuries: 43,
    halfCenturies: 62,
    highestScore: 183,
    battingAverage: 59.07,
    battingStrikeRate: 93.17,
    hundreds: 43,
    fifties: 62,
    notOuts: 39,
    ballsFaced: 13049,
    fours: 1124,
    sixes: 247,
    wickets: 4,
    bowlingAverage: 166.75,
    economyRate: 5.09,
    bestBowlingFigures: "1/15",
  };
  
  const babarAzam = {
    matches: 80,
    runs: 3808,
    centuries: 13,
    halfCenturies: 17,
    highestScore: 125,
    battingAverage: 56.57,
    battingStrikeRate: 87.11,
    hundreds: 13,
    fifties: 17,
    notOuts: 10,
    ballsFaced: 4364,
    fours: 355,
    sixes: 23,
    wickets: 6,
    bowlingAverage: 50.83,
    economyRate: 5.23,
    bestBowlingFigures: "1/15",
  };
  
  const kaneWilliamson = {
    matches: 156,
    runs: 6173,
    centuries: 13,
    halfCenturies: 41,
    highestScore: 148,
    battingAverage: 47.48,
    battingStrikeRate: 80.37,
    hundreds: 13,
    fifties: 41,
    notOuts: 32,
    ballsFaced: 7673,
    fours: 546,
    sixes: 45,
    wickets: 34,
    bowlingAverage: 38.35,
    economyRate: 5.08,
    bestBowlingFigures: "3/22",
  };
  
  
  favouriteBatsman = prompt("Enter your favourite player");
  
  if (favouriteBatsman == "Virat"){
    document.write(viratKohli);
  };