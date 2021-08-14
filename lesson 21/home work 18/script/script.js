let inputName = document.getElementById("textInput");
let buttonLogin = document.querySelector("#myButton");

function myFunction() {
  let guestLogin = inputName.value;
  if (guestLogin == "") {
    alert("Пожалуйста заполните поле логин!");
  } else {
    localStorage.setItem("userLogin", guestLogin);
    inputName.value = "";
    document.getElementById("userLogin").style.display = "none";
    document.getElementById(
      "greetings"
    ).textContent = `Welcome ${localStorage.getItem("userLogin")}`;
    document.getElementById("greetings").style.display = "block";
  }
}

window.onload = function () {
  let guestLogin = localStorage.getItem("userLogin");
  if (guestLogin) {
    document.getElementById("userLogin").style.display = "none";
    document.getElementById("greetings").textContent = `Welcome ${guestLogin}`;
    document.getElementById("greetings").style.display = "block";
  }
};

buttonLogin.addEventListener("click", myFunction);
