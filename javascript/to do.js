const input = document.querySelector(".input");
const button = document.querySelector(".button");
const list = document.querySelector(".list");
button.addEventListener("click", add);

function getValue() {
  // Sélectionner l'élément input et récupérer sa valeur
    const val = document.getElementById('.input').value;
    console.log(val);
}


function add(event) {
    event.preventDefault();
    // div to do
    const div = document.createElement("div");
    div.classList.add("tododiv");
    // créer le li
    const newli = document.createElement("li");
    newli.classList.add("todo-item");
    div.appendChild(newli);
    //check button
    let btn1 = document.createElement("button");
    btn1.innerHTML = '<i class="fas fa-trash"></i>';
    btn1.innerHTML = "oui2"
    btn1.classList.add("check-btn");
    div.appendChild(btn1);
    //Bouton Supprimer
    let btn = document.createElement("button");
    btn.innerHTML = '<i class="fas fa-trash"></i>';
    btn.innerHTML = "oui"
    btn.classList.add("trash-btn");
    div.appendChild(btn);
    //AJOUTER NOTRE TODO À TODO-LIST
    list.appendChild(div);
    input.value = "";
  }
  
  function deleteCheck(e) {
    const item = e.target;
    //DELETE TODO
    if (item.classList[0] === "trash-btn") {
      const todo = item.parentElement;
      todo.classList.add("fall");
      removeLocalTodos(todo);
      todo.addEventListener("transitionend", function () {
        todo.remove();
      });
    }
  
    //CHECK MARK
    if (item.classList[0] === "complete-btn") {
      const todo = item.parentElement;
      todo.classList.toggle("completed");
    }
  }
  
  function filterTodo(e) {
    const todos = list.childNodes;
    todos.forEach(function (todo) {
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
      }
    });
  }
  
  function saveLocalTodos(todo) {
    //Checker si il y a des items existants
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  
  function getTodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function (todo) {
      //Todo DIV
      const div = document.createElement("div");
      div.classList.add("todo");
      //Créer le Li
      const newTodo = document.createElement("li");
      newTodo.innerText = todo;
      newTodo.classList.add("todo-item");
      div.appendChild(newTodo);
      //Bouton Check
      const finalButton = document.createElement("button");
      finalButton.innerHTML = '<i class="fas fa-check"></i>';
      finalButton.classList.add("final-btn");
      div.appendChild(finalButton);
      //Bouton Supprimer
      const trashButton = document.createElement("button");
      trashButton.innerHTML = '<i class="fas fa-trash"></i>';
      trashButton.classList.add("trash-btn");
      div.appendChild(trashButton);
      //AJOUTER NOTRE TODO À TODO-LIST
      list.appendChild(div);
    });
  }
  
  function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
