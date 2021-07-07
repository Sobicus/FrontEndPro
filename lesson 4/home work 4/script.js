function askQuestion(question) {
  const answer = prompt(question);
  return answer;
}

let circleRadius = askQuestion("Введите радиус окружности");

circleRadius = Number(circleRadius);

if (Number.isNaN(circleRadius)) {
  throw alert("Введите число!!!");
}

let userChoice = askQuestion("Введите номер команды чтобы посчитать: 1 - диаметр, 2 - площадь круга, 3 - длину окружности");
userChoice = Number(userChoice);

switch(userChoice){
  case 1: calculateCircleDiameter(circleRadius), alert(`Диаметр окружности с радиусом ${circleRadius} равна ${calculateCircleDiameter(circleRadius)}`); break;
  case 2: calculateCircleArea(circleRadius), alert(`Площадь круга с радиусом ${circleRadius} равна ${calculateCircleArea(circleRadius)}`); break;
  case 3: calculateCircumference(circleRadius), alert(`Длина окружности с радиусом ${circleRadius} равна ${calculateCircumference(circleRadius)}`); break;
  default: alert("Нет такой команды");
}


function calculateCircleDiameter(circleRadius) {
const diameter = 2 * circleRadius;
return diameter;
}

function calculateCircleArea(circleRadius) {
const area = Math.PI * Math.pow(circleRadius, 2);
return area;
}

function calculateCircumference(circleRadius) {
const circumference = 2 * Math.PI * circleRadius;
return circumference;
}