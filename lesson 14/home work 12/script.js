//1
function setYear() {
  const yearTextInput = document.querySelector("#text-input");
  const ourYear = document.querySelector("#title span");
  ourYear.textContent = yearTextInput.value;
  yearTextInput.value = "";
}

//2
function deleteOurAttr() {
  document.querySelector("[my-attribute]").removeAttribute("my-attribute");
}

//3
function greenColourAllDataId(e) {
  const allAttrDataId = document.querySelectorAll("[data-id]");
  e.stopPropagation();
  for (let i = 0; i < allAttrDataId.length; i++) {
    allAttrDataId[i].bgColor = "green";
  }
}

//4
function myNewRow() {
  let newTr = document.createElement("tr");
  newTr.setAttribute("id", "myId");

  let target = document.getElementsByTagName("tr")[7];
  target.insertAdjacentElement("beforeBegin", newTr);

  let newCompany = document.createElement("td");
  newCompany.textContent = "Tesla";

  let newContact = document.createElement("td");
  newContact.textContent = "Elon Musk";

  let newRevenue = document.createElement("td");
  newRevenue.setAttribute("data-id", "revenue-value");
  newRevenue.textContent = "180M";
  document.getElementById("myId").appendChild(newCompany);
  document.getElementById("myId").appendChild(newContact);
  document.getElementById("myId").appendChild(newRevenue);
}

//5
function DeleteSecondRow() {
  document.querySelector("#title + table tbody").children[2].remove();
}

//6
function bigStyle() {
  document.querySelector("#title").style.fontSize = "24px";
}

document.addEventListener("DOMContentLoaded", bigStyle);

//load
function load() {
  const btnDeleteAttr = document.getElementById("removeAttrBtn");
  btnDeleteAttr.addEventListener("click", deleteOurAttr, false);

  const greenBtn = document.querySelector("#setGreenBtn");
  greenBtn.addEventListener("click", greenColourAllDataId, true);

  const btnAddRow = document.getElementById("addRowBtn");
  btnAddRow.addEventListener("click", myNewRow);

  const btnDeleteSecondRow = document.querySelector("#removeSecondRowBtn");
  btnDeleteSecondRow.addEventListener("click", DeleteSecondRow);
}
