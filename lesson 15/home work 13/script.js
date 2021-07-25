function createCalculator(n) {
  return {
    sum: function (No) {
      return (n = n + No);
    },

    mult: function (No) {
      return (n = n * No);
    },

    sub: function (No) {
      return (n = n - No);
    },

    div: function (No) {
      return (n = n / No);
    },
    set: function (No) {
      return (n = No);
    },
  };
}

const calc = createCalculator(10);
console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11
console.log(calc.set(100)); // 100
