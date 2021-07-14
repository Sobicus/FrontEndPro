function taskOne() {
  let year = document.querySelector("#title span");
  year.textContent = "2020";
  return year;
}

function taskTwo() {
  document.querySelector("[my-attribute]").removeAttribute("my-attribute");
}

function taskThree() {
  let BackGroundColourGreen = document.querySelectorAll("[data-id]");
  for (let i = 0; i < document.querySelectorAll("[data-id]").length; i++) {
    document.querySelectorAll("[data-id]")[i].bgColor = "green";
  }
}

function taskFour() {
  let myNewElement = document.createElement("tr");
  myNewElement.setAttribute("id", "myId");
  let target = document.getElementsByTagName("tr")[7];
  target.insertAdjacentElement("beforeBegin", myNewElement);
  let firstTd = document.createElement("td");
  firstTd.textContent = "Rols Roys";
  let secondTd = document.createElement("td");
  secondTd.textContent = "Fantom";
  let thirdTd = document.createElement("td");
  thirdTd.textContent = "1M";
  document.getElementById("myId").appendChild(firstTd);
  document.getElementById("myId").appendChild(secondTd);
  document.getElementById("myId").appendChild(thirdTd);
}

function taskFive() {
  let deleteFirstTR = document.getElementsByTagName("tr")[1];
  let myTbody = document.body.children[1].children[0];
  myTbody.removeChild(deleteFirstTR);
}

taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();
