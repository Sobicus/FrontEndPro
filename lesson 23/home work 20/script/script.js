const btn = document.getElementById("send");
const nameOfProduct = document.querySelector("#nameProduct");
const quantity = document.querySelector("#quantityProduct");
const price = document.querySelector("#priceProduct");

function onClickHandler(e) {
  e.preventDefault();

  let nameOfProductValue = nameOfProduct.value;
  let quantityValue = quantity.value;
  let priceVlue = price.value;
  if (nameOfProductValue == "" || quantityValue == "" || priceVlue == "") {
    alert(
      "Please will fill in field Product name - only name of product, Product quantity - only quantity of product, Product price - only price of product."
    );
  } else {
    let myNewElement = document.createElement("tr");
    myNewElement.setAttribute("id", "myId");
    document.querySelector("#productList").appendChild(myNewElement);
    let fieldName = document.createElement("td");
    fieldName.textContent = nameOfProduct.value;
    let fieldQuantity = document.createElement("td");
    fieldQuantity.textContent = quantity.value;
    let fieldPrice = document.createElement("td");
    fieldPrice.setAttribute("id", "myNewPrice");
    fieldPrice.textContent = price.value;
    let btnDelete = document.createElement("button");
    btnDelete.textContent = "Delete";

    myNewElement.appendChild(fieldName);
    myNewElement.appendChild(fieldQuantity);
    myNewElement.appendChild(fieldPrice);
    myNewElement.appendChild(btnDelete);

    purificationInput();
    sumTotalPrice();
  }
}

btn.addEventListener("click", onClickHandler);

function purificationInput() {
  document.querySelector("#nameProduct").value = "";
  document.querySelector("#quantityProduct").value = "";
  document.querySelector("#priceProduct").value = "";
}

function RemoveLiObject(event) {
  if (event.target.tagName == "BUTTON") {
    console.log(event.target);
    event.target.parentNode.remove();
    sumTotalPrice();
  }
}

document
  .getElementById("productList")
  .addEventListener("click", RemoveLiObject);

function sumTotalPrice() {
  let accum = 0;
  for (let i = 0; i < document.querySelectorAll("#myNewPrice").length; i++) {
    accum = accum + +document.querySelectorAll("#myNewPrice")[i].textContent;
  }
  document.querySelector('#totalPrice').textContent = accum;
}
