const todoForm = document.getElementById("newTodoForm");
const todoList = document.getElementById("list");
console.log(todoList);

// const tes = JSON.parse(localStorage.getItem("todoList")) || [];
// const pes = localStorage.getItem("tests");
// console.log(tes)
// console.log(pes)

// retrieve from localStorage
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedTodos.length; i++) {
  let newTodo = document.createElement("li");
  newTodo.innerText = savedTodos[i].task;
  newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
  if (newTodo.isCompleted) {
    newTodo.style.textDecoration = "line-through";
  }
  let removeButton = document.createElement("button");
    removeButton.innerText = "X";
    
  todoList.appendChild(newTodo);
  newTodo.appendChild(removeButton);
  savedTodos.appendChild(newTodo);
  
  
}


// ok up to here

todoForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let removeButton = document.createElement("button");
    removeButton.innerText = "X";

    let newTodo = document.createElement("li");
    newTodo.innerText = document.getElementById("task").value;
    newTodo.isCompleted = false;

    todoList.appendChild(newTodo);
    newTodo.appendChild(removeButton);

    todoForm.reset();

    console.log(todoList);
  
    localStorage.setItem("todoList", JSON.stringify(todoList));
    const cat = localStorage.getItem('todoList');
    console.log(cat);
    // console.log(JSON.parse(localStorage.getItem("tests")))
    
  

});


todoList.addEventListener("click", function(event) {
  let clickedListItem = event.target;

  if (!clickedListItem.isCompleted) {
    clickedListItem.style.textDecoration = "line-through";
    clickedListItem.isCompleted = true;
  } else {
    clickedListItem.style.textDecoration = "none";
    clickedListItem.isCompleted = false;
  }

  const targetTagToLowerCase = event.target.tagName.toLowerCase();
      if (targetTagToLowerCase === "button") {
        event.target.parentNode.remove();
      }
  savedTodos.push({ task: newTodo.innerText, isCompleted: false });
  localStorage.setItem("todos", JSON.stringify(savedTodos));
});
