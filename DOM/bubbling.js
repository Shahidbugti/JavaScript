const button = document.querySelector("#submit");
const todoList = document.querySelector("#todo-list");
const mainTitle = document.querySelector(".main-title");

//Atached a event listner
button.addEventListener("click", function () {
    //creating the element 
  const newItems = document.createElement("li");
  //Adding it a class
  newItems.classList.add("item");
  //Adding the text
  newItems.innerText = `item ${todoList.children.length + 1}`;
  todoList.appendChild(newItems);

  // Attach a click event listener to the newly created item
  newItems.addEventListener("click", deleteItem);
});

function deleteItem(e) {
 e.stopPropagation();
 e.target.remove();
}


todoList.addEventListener("click" , function(){
    todoList.classList.toggle("list");
})