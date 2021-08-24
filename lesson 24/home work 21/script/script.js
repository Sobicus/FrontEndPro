function onGetTodosClick() {
  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((res) => res.json())
    .then((data) => bruteForceToDos(data))
    .catch((error) => console.log(error));
}

function bruteForceToDos(iterable) {
  for (let value of iterable) {
    addTodos(value);
    checkStatus();
  }
}

function addTodos(todos) {
  let html = postTodosTemplate.innerHTML.replace("{{title}}", todos.title);
  html = html.replace("{{completed}}", todos.completed);
  html = html.replace("{{id}}", todos.id);
  todosContainer.insertAdjacentHTML("beforeend", html);
}

function checkStatus() {
  const allToDos = document.querySelectorAll(".completed");
  for (let value of allToDos) {
    if (value.textContent == "false") {
      value.style.color = "red";
    } else {
      value.style.color = "green";
    }
  }
}
