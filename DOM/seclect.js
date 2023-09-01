//SELECTORS IN DOM

const header= document.getElementsByTagName("h2");
const list = document.getElementsByClassName("item");
const button = document.getElementById("submit")
console.log(header);
console.log(list);
console.log(list.length);
console.log(button);

const headers =  document.querySelector("h2");//=>Return the first h2 in the page 
console.log(headers);



const heading = document.querySelectorAll("h2");//=>Return the all h2 in the page
console.log(heading);



const ul = document.querySelector("#list");
console.log(ul);