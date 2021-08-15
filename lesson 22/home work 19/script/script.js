function printTime() {
  const d = new Date();
  let hours = d.getHours();
  if (hours < 10) {
    hours = "0" + hours;
  }
  let minutes = d.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  let seconds = d.getSeconds();
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  document.getElementById(
    "clockOutput"
  ).textContent = `${hours}:${minutes}:${seconds}`;
}

function printDate() {
  const d = new Date();
  let day = d.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  let month = d.getMonth();
  if (month < 10) {
    month = "0" + (month + 1);
  }
  let year = d.getFullYear();
  document.getElementById("dateOutput").textContent = `${day}.${month}.${year}`;
}

setInterval(printTime, 1000);
setInterval(printDate, 1000);
