function getRadius() {
  let radius = +prompt("enter radius");
  while (isNaN(radius)) {
    radius = +prompt("enter radius, please enter only number");
  }
  return radius;
}

const radius = getRadius();

function userChoice() {
  let choice;
  do {
    choice = +prompt(
      "Введите номер команды чтобы посчитать: 1 - диаметр, 2 - площадь круга, 3 - длину окружности"
    );
  } while (isNaN(choice) || choice < 1 || choice > 3);
  return choice;
}

const choice = userChoice();

switch (choice) {
  case 1:
    alert(
      `Диаметр окружности с радиусом ${radius} равна ${calculateCircleDiameter(
        radius
      )}`
    );
    break;
  case 2:
    alert(
      `Площадь круга с радиусом ${radius} равна ${calculateCircleArea(radius)}`
    );
    break;
  case 3:
    alert(
      `Длина окружности с радиусом ${radius} равна ${calculateCircumference(
        radius
      )}`
    );
    break;
}

function calculateCircleDiameter(circleRadius) {
  const diameter = 2 * circleRadius;
  return diameter;
}

function calculateCircleArea(circleRadius) {
  const area = Math.PI * Math.sqrt(circleRadius);
  return area;
}

function calculateCircumference(circleRadius) {
  const circumference = 2 * Math.PI * circleRadius;
  return circumference;
}

//Прошу посмотреть, этот код. Тут я пробовал зациклить программу, если при первом прогоне выбрать выход все ок
// но если выбрать повторить вычисления и потом выход, то не выходит с программы

// function getRadius() {
//   let radius = +prompt("enter radius");
//   while (isNaN(radius)) {
//       radius = +prompt("enter radius, please enter only number");
//   }
//   return radius;
// }

// let radius = getRadius();

// function userChoice() {
//   let choice;
//   do{
//   choice = +prompt("Введите номер команды чтобы посчитать: 1 - диаметр, 2 - площадь круга, 3 - длину окружности")
//   }while(isNaN(choice) || choice < 1 || choice > 3)
//   return choice;
// }

// let choice = userChoice();

// function switcher(radius, choice){
//   switch(choice){
//     case 1: alert(`Диаметр окружности с радиусом ${radius} равна ${calculateCircleDiameter(radius)}`); break;
//     case 2: alert(`Площадь круга с радиусом ${radius} равна ${calculateCircleArea(radius)}`); break;
//     case 3: alert(`Длина окружности с радиусом ${radius} равна ${calculateCircumference(radius)}`); break;
//   }
// }

// switcher(radius, choice);

// function calculateCircleDiameter(circleRadius) {
//   const diameter = 2 * circleRadius;
//   return diameter;
// }

// function calculateCircleArea(circleRadius) {
//   const area = Math.PI * Math.sqrt(circleRadius);
//   return area;
// }

// function calculateCircumference(circleRadius) {
//   const circumference = 2 * Math.PI * circleRadius;
//   return circumference;
// }

// function repietYesNo(){
//   let choice;
//   do{
//   choice = +prompt("Хотите произвести еще какие-либо вычисления: 1 - да, 2 - нет")
//   }while(isNaN(choice) || choice < 1 || choice > 2)
//   return choice
// }

// let repiet = repietYesNo();

// function repietProgramm(answer){
//   while(answer === 1){
//     radius = getRadius(), choice = userChoice(), switcher(radius, choice), repiet = repietYesNo(), repietProgramm(repiet);
//     if(answer === 2){
//       alert("Спасибо, что использовали наше ПО")
//       break;
//     }
//   }
// }

// repietProgramm(repiet);
