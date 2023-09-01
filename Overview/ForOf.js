//FOR--OF LOOPS
//genral form of for-of loops
// for (let variable for iterable){
//     code  to be excuted
// }

const names = ["Shahid", "Zahid", "Irfan", "Noman", "Awais", "Saad"];

for (let name of names) {
    console.log(names.indexOf(name)); // Print the index of the current name in the array
    console.log(name); // Print the current name
}

for (let name of names){
    if(name === "Irfan"){
    break;
}
console.log(name);//This will brak when name === Irfan 
                  //output will be shahid and zahid .
}

//ForEach loops
names.forEach(function(name,index){
    console.log(name ,index)
})