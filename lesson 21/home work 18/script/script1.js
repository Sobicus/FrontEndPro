let inputName = document.getElementById("textInput");
let buttonLogin = document.querySelector("#myButton");

function myFunction() {
  let guestLogin = inputName.value;
  if (guestLogin == "") {
    alert("Пожалуйста заполните поле логин!");
  } else {
    document.cookie = `userLogin=${guestLogin}`;
    document.getElementById("userLogin").style.display = "none";
    document.getElementById("greetings").textContent = `Welcome ${guestLogin}`;
    document.getElementById("greetings").style.display = "block";
  }
}

window.onload = function () {
  let guestLogin = document.cookie.split("=");
  if (guestLogin[0] == 'userLogin') {
    document.getElementById("userLogin").style.display = "none";
    document.getElementById("greetings").textContent = `Welcome ${guestLogin[1]}`;
    document.getElementById("greetings").style.display = "block";
  }
};

buttonLogin.addEventListener("click", myFunction);
