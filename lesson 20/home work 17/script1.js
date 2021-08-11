function Hamburger(size) {
  this.size = size;
  this.toppings = [];
  this.tugrik = size.tugrik;
  this.calories = size.calories;
}

Hamburger.SIZE_SMALL = { tugrik: 50, calories: 20 };
Hamburger.SIZE_MEDIUM = { tugrik: 75, calories: 30 };
Hamburger.SIZE_LARGE = { tugrik: 100, calories: 40 };
Hamburger.TOPPING_CHEESE = { tugrik: 10, calories: 20 };
Hamburger.TOPPING_SALAD = { tugrik: 20, calories: 5 };
Hamburger.TOPPING_POTATO = { tugrik: 15, calories: 10 };
Hamburger.TOPPING_SAUCE = { tugrik: 15, calories: 0 };
Hamburger.TOPPING_MAYO = { tugrik: 20, calories: 5 };

Hamburger.prototype.addTopping = function (topping) {
  this.toppings.push(topping);
};

Hamburger.prototype.getPrice = function () {
  return (
    this.tugrik +
    this.toppings.reduce((accumulator, val) => accumulator + val.tugrik, 0)
  );
};

Hamburger.prototype.getCallories = function () {
  return (
    this.calories +
    this.toppings.reduce((accumulator, val) => accumulator + val.calories, 0)
  );
};

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);

console.log("Price with sauce: " + hamburger.getPrice());
console.log("Callories with sauce: " + hamburger.getCallories());
