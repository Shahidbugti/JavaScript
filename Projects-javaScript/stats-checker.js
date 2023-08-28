//Takes User's Favorite Player
//Displays the batsman's stats


//batsmen data
const odiBatsmen = [
    {
      name: "Virat Kohli",
      matches: 254,
      runs: 12169,
      average: 59.07,
    },
    {
      name: "Babar Azam",
      matches: 103,
      runs: 5202,
      average: 58.4,
    },
    {
      name: "Kane Williamson",
      matches: 151,
      runs: 6173,
      average: 47.48,
    },
  ];
  
  // Function to display batsman's stats
  function displayBatsmanStats(batsmanName) {
    const batsman = odiBatsmen.find((b) => b.name.toLowerCase() === batsmanName.toLowerCase());
  
    if (batsman) {
      console.log(`name: ${batsman.name}`);
      console.log(`Matches: ${batsman.matches}`);
      console.log(`Runs: ${batsman.runs}`);
      console.log(`Average: ${batsman.average}`);
    } else {
      console.log(`Batsman "${batsmanName}" not found.`);
    }
  }
  
  // Prompt the user for their favorite batsman
  const userFavoriteBatsman = prompt("Enter your favorite ODI batsman:");
  
  // Display the stats for the user's favorite batsman
  displayBatsmanStats(userFavoriteBatsman);