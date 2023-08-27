//FOR-IN LOOPS

const user = {
    name : "Shahid",//=>Name is "key" and Shahid is value
    age : "18",
    conections: "34",
    platform :"LinkdIn",
};
//To access the key
for(let x in user ){
    console.log(x);
}

//To access the value
for(let x in user){
    console.log(user[x]);
}
console.log(user.platform);
//this could be done as given bellow
console.log(user["platform"]);




//WHILE LOOPS
// let i = 20;
// while(i < 30){
//     console.log(i);
//     i++;
// }



//DO WHILE LOOP
let i = 20;
do{
    console.log(i)
    i++;
}
while (i < 20);
