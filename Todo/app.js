// SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todos");

// EVENT LISTENERS
document.addEventListener("DOMContentLoaded",getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// FUNCTIONS
function addTodo(event) {
    event.preventDefault();
//create div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
//create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
//Add todo to local storage
saveLocalTodos(todoInput.value);
//check mark button
    const compButton = document.createElement("button");
    compButton.innerHTML = `<i class="fas fa-check"></i>`;
    compButton.classList.add("complete-btn");
    todoDiv.appendChild(compButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;

    if (item.classList.contains("trash-btn")) {
        const todo = item.parentElement;
        todo.classList.add("animate");
        removeLocalTodos(todo);
        todo.addEventListener("transitionend", function () {
            todo.remove();
        });
    }

    if (item.classList.contains("complete-btn")) {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;

    todos.forEach(function (todo) {
        if (todo.nodeType === 1) {
            switch (e.target.value) {
                case "all":
                    todo.style.display = "flex";
                    break;
                case "completed":
                    if (todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                case "uncompleted":
                    if (!todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                default:
                    break;
            }
        }
    });
}



function saveLocalTodos(todo) {
    // Check if local storage has "todos" or initialize an empty array
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    // Add the new todo to the array and save it to local storage
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
    // Check if local storage has "todos" or initialize an empty array
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    // Loop through the todos and create elements for each
    todos.forEach(function (todo) {
        // Create div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        // Create li
        const newTodo = document.createElement("li");
        newTodo.innerText = todo; // Set the text to the current todo
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);

        // Check mark button
        const compButton = document.createElement("button");
        compButton.innerHTML = `<i class="fas fa-check"></i>`;
        compButton.classList.add("complete-btn");
        todoDiv.appendChild(compButton);

        const trashButton = document.createElement("button");
        trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        // Append the todo div to the todo list
        todoList.appendChild(todoDiv);
    });
}

function removeLocalTodos(todo) {
    // Check if local storage has "todos" or initialize an empty array
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    // Find the index of the todo in the array and remove it
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);

    // Update the local storage with the modified array
    localStorage.setItem("todos", JSON.stringify(todos));
}
