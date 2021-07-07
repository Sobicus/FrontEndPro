let a, b, c, d, e;
let answer = 0;
a = prompt("Сколько будет 2 + '2' в JavaScript?");
if (a == 22) {
  answer + 10;
}
b = prompt("Назовите оператор присваивания в JavaScript");
if (b == "=") {
  answer + 10;
}
c = prompt("Сколько будет 5 / 0?");
if (c == "infinity") {
  answer + 10;
}
d = prompt("Одинаково ли работает == и === в JavaScript?");
if (d == "no") {
  answer + 10;
}
e = prompt("Чему равно выражение Boolean(null) в JavaScript?");
if (e == "false") {
  answer + 10;
}
alert("Ваш результат: " + answer + " баллов");
if (answer >= 30) {
  alert("Поздравляем Вы сдали тест!!!");
}
if (answer <= 20) {
  alert("Попробуйте еще раз, у Вас все получится!!!");
}
