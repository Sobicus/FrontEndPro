const btn = document.getElementById("send");
const liSuccessFail = document
  .querySelector("#toDoList")
  .getElementsByTagName("li");

function onClickHandler(e) {
  e.preventDefault();
  const task = document.getElementById("textInput");
  const li = document.createElement("li");
  li.textContent = task.value;
  document.getElementById("toDoList").append(li);
  buttonRemoveEventListener();
  for (let i = 0; i < liSuccessFail.length; i++) {
    liSuccessFail[i].addEventListener("click", onItemClick);
  }
  purificationInput();
}

function buttonRemoveEventListener() {
  const button = document.createElement("button");
  for (
    let i = 0;
    i < document.querySelector("#toDoList").children.length;
    i++
  ) {
    document.querySelector("#toDoList").children[i].append(button);
  }
}

btn.addEventListener("click", onClickHandler);

function onItemClick(event) {
  if (event.target.className !== "red") {
    event.target.className = "red";
  } else {
    event.target.className = "green";
  }
}

function purificationInput() {
  document.getElementById("textInput").value = "";
}

function RemoveLiObject(event) {
  if (event.target.tagName == "BUTTON") {
    event.target.parentNode.remove();
  }
}

document.getElementById("toDoList").addEventListener("click", RemoveLiObject);
