// Задача1 : исправьте обьекты sysAdmin и clientNatalia,
// чтобы они унаследовали sayHello от personJohn

const personJohn = {
  name: "John",
  sayHello: function () {
    console.log(`Hello, I'm ${this.name}`);
  },
};

const sysAdmin = {
  name: "Bob",
  __proto__: personJohn,
};

const clientNatalia = {
  name: "Natalia",
  __proto__: personJohn,
};

personJohn.sayHello();
sysAdmin.sayHello();
clientNatalia.sayHello();

// Задача2 : исправьте код, чтобы Employee и Client унаследовали sayHello от Person

function Person(name) {
  this.name = name;
  this.sayHello = function () {
    console.log(`Hello, I'm ${this.name}`);
  };
}

function Employee(name) {
  this.name = name;
}

function Client(name) {
  this.name = name;
}

const personJohn = new Person("John");

Employee.prototype = new Person();
const sysAdmin = new Employee("Bob");

Client.prototype = new Person();
const clientNatalia = new Client("Natalia");

personJohn.sayHello();
sysAdmin.sayHello();
clientNatalia.sayHello();

// Задача3: Написать функцию конструктор Student, которую я смогу использовать вот так:

const students = [
  new Student("Student 1", [10, 9, 8, 0, 10]), // имя, оценки
  new Student("Student 12", [10, 0, 8, 0, 3, 4]),
];

function Student(name, mark) {
  this.name = name;
  this.mark = mark;
  this.averageMark = function () {
    console.log(this.mark.reduce((sum, num) => sum + num) / mark.length);
  };
}

for (let value of students) {
  value.averageMark();
}
