function askQuestion(question) {
  const answer = prompt(question);
  return answer;
}

let numberOne = askQuestion("Введите первое число");
let numberTwo = askQuestion("Введите второе число");
let mathematicalOperation = askQuestion(
  "Выберите операцую из доступных: + & add, - & sub, * & mult, / & div, % & mod"
);
numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

if (mathematicalOperation == "+" || mathematicalOperation == "add") {
  let response = numberOne + numberTwo;
  alert(numberOne + " " + mathematicalOperation + " " + numberTwo + " " + "=" + " " + response);
} else if (mathematicalOperation == "-" || mathematicalOperation == "sub") {
  let response = numberOne - numberTwo;
  alert(numberOne + " " + mathematicalOperation + " " + numberTwo + " " + "=" + " " + response);
} else if (mathematicalOperation == "*" || mathematicalOperation == "mult") {
  let response = numberOne * numberTwo;
  alert(numberOne + " " + mathematicalOperation + " " + numberTwo + " " + "=" + " " + response);
} else if (mathematicalOperation == "/" || mathematicalOperation == "div") {
  let response = numberOne / numberTwo;
  alert(numberOne + " " + mathematicalOperation + " " + numberTwo + " " + "=" + " " + response);
} else if (mathematicalOperation == "%" || mathematicalOperation == "mod") {
  let response = numberOne % numberTwo;
  alert(numberOne + " " + mathematicalOperation + " " + numberTwo + " " + "=" + " " + response);
} else {
  alert("Вы выбрали неверную математическую операцию");
}
