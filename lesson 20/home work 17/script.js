class Hamburger {
  constructor(size) {
    this.size = size;
    this.toppings = [];
    this.tugrik = size.tugrik;
    this.calories = size.calories;
  }

  static SIZE_SMALL = { tugrik: 50, calories: 20 };
  static SIZE_MEDIUM = { tugrik: 75, calories: 30 };
  static SIZE_LARGE = { tugrik: 100, calories: 40 };

  static TOPPING_CHEESE = { tugrik: 10, calories: 20 };
  static TOPPING_SALAD = { tugrik: 20, calories: 5 };
  static TOPPING_POTATO = { tugrik: 15, calories: 10 };
  static TOPPING_SAUCE = { tugrik: 15, calories: 0 };
  static TOPPING_MAYO = { tugrik: 20, calories: 5 };

  addTopping = function (topping) {
    this.toppings.push(topping);
  };

  getPrice = function () {
    return (
      this.tugrik + this.toppings.reduce((accumulator, val) => accumulator + val.tugrik, 0)
    );
  };

  getCallories = function () {
    return (
      this.calories + this.toppings.reduce((accumulator, val) => accumulator + val.calories, 0)
    );
  };
}



const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);

console.log("Price with sauce: " + hamburger.getPrice());
console.log("Callories with sauce: " + hamburger.getCallories());
