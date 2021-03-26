const todoInput = document.querySelector(".todo-input");
const addButton = document.querySelector(".add-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// document.addEventListener("DOMcontentLoaded", saveToLocal);

let todos = [];
let filterValue = localStorage.getItem("filterValue");

if (localStorage.getItem("todos")) {
  todos = JSON.parse(localStorage.getItem("todos"));
  renderTodos(todos);
}

if (filterValue) {
  filterOption.value = filterValue;
  filterTasks(todos, filterValue);
}

filterOption.addEventListener("change", (e) => {
  filterTasks(todos, filterOption.value);
  localStorage.setItem("filterValue", e.target.value);
  //   console.log(e.target.value);
});

function filterTasks(todos, value) {
  if (value === "completed") {
    const completedTasks = todos.filter((todo) => todo.completed === true);
    renderTodos(completedTasks);
  } else {
    if (value === "uncompleted") {
      const uncompletedTasks = todos.filter((todo) => todo.completed !== true);
      renderTodos(uncompletedTasks);
    } else {
      renderTodos(todos);
    }
  }
}

let generateId = function () {
  return "_" + Math.random().toString(36).substr(2, 9);
};

function TodoListItem(id, itemValue, completed = false) {
  this.id = id;
  this.itemValue = itemValue;
  this.completed = completed;
}

function saveToLocal(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function saveFilterOption(filterValue) {
  localStorage.setItem("filterValue", filterValue);
}

function renderTodos(todos) {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    if (todo.completed) {
      li.classList.add("completed");
    }
    li.dataset.id = todo.id;
    li.classList.add("todo");

    const p = document.createElement("p");
    p.classList.add("todo-item");

    const checkBtn = document.createElement("button");

    checkBtn.addEventListener("click", buttonActions);
    checkBtn.innerHTML = `<i class="fas fa-check"></i>`;
    checkBtn.classList.add("complete-btn");

    const deleteBtn = document.createElement("button");

    deleteBtn.addEventListener("click", buttonActions);
    deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`;
    deleteBtn.classList.add("trash-btn");

    p.textContent = todo.itemValue;
    li.appendChild(p);
    li.appendChild(checkBtn);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

addButton.addEventListener("click", creatTodoList);

function creatTodoList(e) {
  e.preventDefault();
  if (!todoInput.value) {
    alert("Fill the field");
  } else {
    const todo = new TodoListItem(generateId(), todoInput.value);
    todos.push(todo);
    todoInput.focus();
    todoInput.value = "";
    renderTodos(todos);
    saveToLocal(todos);
  }
}

function buttonActions(e) {
  const li = e.target.parentElement;

  if (e.target.classList.contains("complete-btn")) {
    li.classList.toggle("completed");

    const currentTodo = todos.find((todo) => todo.id === li.dataset.id);
    currentTodo.completed = !currentTodo.completed;
  } else {
    li.classList.add("fall");
    li.addEventListener("transitionend", (e) => {
      todo.remove();
    });

    const currentTodos = todos.filter((todo) => todo.id !== li.dataset.id);
    todos = currentTodos;

    renderTodos(todos);
  }
  saveToLocal(todos);
}
