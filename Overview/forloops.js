//FOR LOOPS

//this will print consloe.log(i) and check the value if it is equal to 20 when "i" is indeed equal to 20 it prints the "if" condition and terminate  the loop.
//Number is printed than the condition is checked
for (let i = 0; i < 100; i++){
    console.log(i); 
    
    if(i ===20){
        console.log("you reached 20");
        break;
    }
}

//Condition is checked and than number is printerd
for (let i = 0; i < 100; i++){
    if(i === 20){
        console.log("you reached 20");
        break;
    }
    console.log(i); 
}


//printing just index of Array items
const texts = ["going to pray","Reached In Mosque","Offered prayer","coming back"];
for(let i = 0; i <= texts.length; i++){
    console.log(i); 
}

//printing Array elements
 let text = ["going to pray","Reached In Mosque","Offered prayer","coming back"];
for(let i = 0; i < text.length; i++){
    console.log(text[i]); 
}

