function getNumber() {
  let number = +prompt("enter your number");
  while (isNaN(number)) {
    number = +prompt("enter your number, please enter only number");
  }
  return number;
}

function showNumbers(number) {
  if (number == 1) {
    return 1
  } else {
    return showNumbers(number - 1) + " " + number;
  }
}

function sumYourNumber(number) {
  let count = 0;
  for (let i = 0; i <= number; i++) {
    count = count + i;
  }
  alert("The sum of the numbers is: " + count);
}
