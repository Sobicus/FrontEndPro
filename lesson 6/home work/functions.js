function totalAmout() {
  let count = 0;
  for(let i = 0; i<items.length; i++){
    count = count + items[i].price * items[i].quantity;
  }
  alert(`Общая стоимость вашего заказа: ${count}` + " " +"$")
  return count;
}

function avaragePriceOfOneProduct() {
  let total = 0;
  for(let i = 0; i<items.length; i++){
    total = total + items[i].quantity;
  }
  alert("Средняя цена за одну единицу товара:" + " " + totalAmout()/total + " " + "$")
}

function printSorted(a, b){
  return a - b;
}

function newArray() {
  let arrayPrice = [];
  for(let i = 0; i < items.length; i++){
    arrayPrice[i] = items[i].price;
  }
  alert('Сортировка товара по возрастанию цены: ' + arrayPrice.sort(printSorted));
}



function isPalindrome(str) {
  for (let i = 0; i < str.length/2)
}
