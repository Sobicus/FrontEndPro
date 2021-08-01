//1
let ourArray = new Array();
function arrayFill(value, numberArrayElements) {
  for (let i = 0; i < numberArrayElements; i++) {
    ourArray[i] = value;
  }
  console.log(ourArray);
}
arrayFill("x", 5);

//2
let ownArray = [[1, 2, 3], [4, 5], [6]];
console.log(ownArray);
function arrayFlatReduce() {
  return ownArray.flat().reduce((a, b) => a + b);
}
console.log(arrayFlatReduce());

function sumArrayLoops() {
  let accum = 0;
  for (let i = 0; i < ownArray.length; i++) {
    for (let value of ownArray[i]) {
      accum = accum + value;
    }
  }
  console.log("Сумма єлементов массива равна " + accum);
}
sumArrayLoops();

//3
let myInput = document.querySelector("#myInput");
let myButton = document.getElementById("myButton");

function createCounter(newCouner) {
  let counter = +myInput.value;
  return function () {
    counter = counter + 1;
    newCouner.textContent = `Counter value: ${counter}`;
  };
}

function takeCounterValue() {
  let inputValue = myInput.value;
  let newCounteiner = document.createElement("div");
  let newCouner = document.createElement("span");
  newCouner.setAttribute("id", "myId");
  newCouner.textContent = `Courent value: ${inputValue} `;
  let buttonOneStep = document.createElement("button");
  buttonOneStep.classList = "btn btn-info";
  buttonOneStep.setAttribute("id", "stepByStep");
  buttonOneStep.textContent = "count";
  newCounteiner.appendChild(newCouner);
  newCounteiner.appendChild(buttonOneStep);
  document.querySelector("#container").appendChild(newCounteiner);
  const counter = createCounter(newCouner);
  buttonOneStep.onclick = counter;
  myInput.value = "";
}

myButton.addEventListener("click", takeCounterValue);
