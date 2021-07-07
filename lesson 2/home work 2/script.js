let a, b, c, d, e;
let A, B, C, D, E;
a = prompt("Сколько будет 2 + '2' в JavaScript?");
if(a == 22){
    A = 10;
}
if(a != 22){
    A = 0;
}
b = prompt("Назовите оператор присваивания в JavaScript");
if(b == "="){
    B = 10;
}
if(b != "="){
    B = 0;
}
c = prompt("Сколько будет 5 / 0?");
if(c == "infinity"){
    C = 10;
}
if(c != "infinity"){
    C = 0;
}
d = prompt("Одинаково ли работает == и === в JavaScript?");
if(d == "no"){
    D = 10;
}
if(d != "no"){
    D = 0;
}
e = prompt("Чему равно выражение Boolean(null) в JavaScript?");
if(e == "false"){
    E = 10;
}
if(e != "false"){
    E = 0;
}
let answer = A + B + C + D + E; 
alert("Ваш результат: " + answer + " баллов");
if(answer >= 30){
    alert("Поздравляем Вы сдали тест!!!");
}
if(answer <= 20){
    alert("Попробуйте еще раз, у Вас все получится!!!");
}