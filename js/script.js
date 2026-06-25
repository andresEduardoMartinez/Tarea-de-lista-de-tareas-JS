function get_todos() {
  let todos = [];
  let todos_str = localStorage.getItem("todo");
  if (todos_str !== null) {
    todos = JSON.parse(todos_str);
  }
  return todos;
}

function add() {
  let task = document.getElementById("task").value;
  let todos = get_todos(); // aquí recuperamos el array
  if (task.trim() !== "") {
    // evitamos tareas vacías
    todos.push(task);
    localStorage.setItem("todo", JSON.stringify(todos));
    show();
  }
  document.getElementById("task").value = "";
  // limpiamos el campo
  return false;
}

function remove() {
  let id = this.getAttribute("id");
  let todos = get_todos();
  console.log(id);
  todos.splice(id, 1); // eliminamos el ítem con ese índice
  localStorage.setItem("todo", JSON.stringify(todos));
  show();
  return false;
}

function show() {
  let todos = get_todos();
  let html = "<ul>";
  for (let i = 0; i < todos.length; i++) {
    html +=
      "<li>" +
      todos[i] +
      ' <button class="remove" id="' +
      i +
      '">x</button></li>';
  }
  html += "</ul>";
  document.getElementById("todos").innerHTML = html;

  // asociamos los botones a la función remove
  let buttons = document.getElementsByClassName("remove");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", remove);
  }
}

document.getElementById("add").addEventListener("click", add);
show();

// Código de ejemplo para guardar persona
let person = {
  edad: 23,
  nombre: "Bruno",
};
localStorage.setItem("persona", JSON.stringify(person)); //de obj a json

let p = JSON.parse(localStorage.getItem("persona")); //de json a obj
console.log(p); // para verificar
