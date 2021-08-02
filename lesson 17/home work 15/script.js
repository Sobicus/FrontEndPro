//'use strict' - строгий режим
// 1) Дописать функцию, чтобы getFullName возвращала "Nikola Tesla"
// (т.н firstName и secondName через пробел)

const user = {
  firstName: "Nikola",
  secondName: "Tesla",
  getFullName: function () {
    console.log(`${this.firstName} ${this.secondName}`);
  },
};

user.getFullName();

// 2) вызвать функцию через call, с заданием в виде контекста другой
// обьект {firstName: "Steve", secondName: "Jobs"}

const secondUser = {
  firstName: "Steve",
  secondName: "Jobs",
};

let functionCall = user.getFullName;
functionCall.call(secondUser);

// 3) вызвать функцию через apply, с заданием в виде контекста другой
// обьект {firstName: "Steve", secondName: "Wozniak "}

const thirdUser = {
  firstName: "Steve",
  secondName: "Wozniak",
};

let functionApply = user.getFullName; // Так же можно было использовать прошлую переменную
functionApply.apply(thirdUser); //functionCall.apply(thirdUser)

// 4) создать копию функции getFullName с помощью bind и забайдить ее на обьект
// {firstName: "Julia ", secondName: "Roberts"}

const fourthdUser = {
  firstName: "Julia",
  secondName: "Roberts",
};

let copyFunctionGetFullName = user.getFullName;
let bindContext = copyFunctionGetFullName.bind(fourthdUser);
bindContext();

// 5) создать функцию контруктор, которая будет создавать подобные обьекты. Создать 3 примера
// разных обьектов с помощью этой фукнции контруктор.

function CreateUser(firstName, secondName, age, specialization) {
  this.firstName = firstName;
  this.secondName = secondName;
  this.age = age;
  this.specialization = specialization;
}

let studentsOne = new CreateUser("David", "Terner", 19, "programmer");
let studentsTwo = new CreateUser("Richard", "Cashman", 17, "esportsman");
let studentsThree = new CreateUser("David", "Terner", 21, "bioengineer");
console.table(studentsOne);
console.table(studentsTwo);
console.table(studentsThree);

// Задание 2:
// Переписать прошлое ДЗ (калькулятор на замыканиях) на функцию конструктор

// const calc = new Calculator(10);

// calc.sum(5); // 15
// calc.mult(10); // 150
// calc.sub(40); // 110
// calc.div(10); // 11
// calc.set(100); //100

// Есть вторая версия, я просто не могу понять какая лучше или более правильная по Best Practices
// мне конечно с моим опытом проще читать код и воспринимать в первом Варианте
// но чтобы потестить все и заодно получить норм оценку и разобраться родился и 2 вариант

//Вариант 1
//_____________________________________________________________________________________________

function Calculator(value) {
  this.sum = function (a) {
    sum = value + a;
    return sum;
  }; /// 15

  this.mult = function (a) {
    mult = sum * a;
    return mult;
  }; // 150

  this.sub = function (a) {
    sub = mult - a;
    return sub;
  }; // 110

  this.div = function (a) {
    div = sub / a;
    return div;
  }; // 11

  this.set = function (a) {
    set = 100;
    return set;
  }; // 100
}

let calc = new Calculator(10);

console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11
console.log(calc.set(100)); // 100

//Вариант 2
//_____________________________________________________________________________________________

function Calculator(value) {
  this.sum = function (a) {
    this.sum = value + a;
    return this.sum;
  }; /// 15

  this.mult = function (a) {
    this.mult = this.sum * a;
    return this.mult;
  }; // 150

  this.sub = function (a) {
    this.sub = this.mult - a;
    return this.sub;
  }; // 110

  this.div = function (a) {
    this.div = this.sub / a;
    return this.div;
  }; // 11

  this.set = function (a) {
    this.set = 100;
    return this.set;
  }; // 100
}

let calc = new Calculator(10);

console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11
console.log(calc.set(100)); // 100
