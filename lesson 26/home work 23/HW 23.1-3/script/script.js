// #1
const countTotal = () => ({total: 100});
console.log(countTotal());

// #2
const result = `Today is ${new Date()}`;
console.log(result);


// #3
let a = 2;
let b = 3;

[a, b] = [b, a];

console.log(a, b);