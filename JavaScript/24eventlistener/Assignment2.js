// Assignment 1
// ✅ Way 1: Inline onclick
  function handleClickInline(button) {
    logAndFlash(button, "Way 1: Inline onclick");
  }

  // ✅ Way 2: element.onclick
  const way2 = document.getElementById("way2Btn");
  way2.onclick = function () {
    logAndFlash(this, "Way 2: element.onclick");
  };

  // ✅ Way 3: addEventListener
  const way3 = document.getElementById("way3Btn");
  way3.addEventListener("click", function () {
    logAndFlash(this, "Way 3: addEventListener");
  });

  // ✅ Common function to log + change background
  function logAndFlash(btn, message) {
    console.log(message);
    const originalColor = btn.style.backgroundColor;
    btn.style.backgroundColor = "green";

    setTimeout(() => {
      btn.style.backgroundColor = originalColor;
    }, 500); // revert after 0.5 seconds
  }

  // Assignment 2
  const counterBtn = document.getElementById("counterBtn");
  const countDisplay = document.getElementById("countDisplay");

  let count = 0;

  // First listener: increase counter
  counterBtn.addEventListener("click", function () {
    count++;
    countDisplay.textContent = count;
  });

  // Second listener: log event details
  counterBtn.addEventListener("click", function (event) {
    console.log("Event Type:", event.type);
    console.log("Timestamp:", event.timeStamp);
    console.log("Tag Name:", this.tagName); // this = button
  });