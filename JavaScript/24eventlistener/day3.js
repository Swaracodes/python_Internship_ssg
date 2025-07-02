// Task 1: Countdown from 10 to 0
let count = 10;
const countdownElement = document.getElementById("countdown");

const timer = setInterval(() => {
  countdownElement.textContent = count;
  count--;

  if (count < 0) {
    clearInterval(timer);
  }
}, 1000);

// Task 2: Show greeting after 3 seconds
setTimeout(() => {
  document.getElementById("greeting").textContent = "Hello! Welcome 😊";
}, 3000);
