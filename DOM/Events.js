// const button = document.querySelector("#button");


// EVENTS =====> Click, Scroll, browser etc


// button.addEventListener("click" , addItem);
// function addItem(){
//     console.log("button is clicked");
// }

const button = document.querySelector("#submit");
const todoList = document.querySelector("#todo-list");
const item = todoList.children;
const mainTitle = document.querySelector(".main-title");
// button.addEventListener("click", function(){
//     const newItems = document.createElement("li");
//     newItems.classList.add("item");
//     newItems.innerText = `item ${item.length + 1}`;
//     todoList.appendChild(newItems);
// })

button.addEventListener("click", function(){
    mainTitle.classList.toggle("special");
})
