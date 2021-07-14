let allTdReveыnueValue = document.querySelectorAll("[data-id=revenue-value]");

function convertToTheNumbers(value) {
  if (value[value.length - 1] === "B") {
    return parseInt(value) * 1e9;
  } else if (value[value.length - 1] === "M") {
    return parseInt(value) * 1e6;
  } else {
    return +value;
  }
}

function bruteForceRevenuevalue() {
  let accum = 0;
  for (let i = 0; i < allTdRevenueValue.length; i++) {
    accum += convertToTheNumbers(allTdRevenueValue[i].textContent);
  }
  return accum;
}

let totalSumRevenueValue = bruteForceRevenuevalue();
let total = document.querySelector("#summ");
total.textContent = `${total.textContent} ${totalSumRevenueValue}`;
