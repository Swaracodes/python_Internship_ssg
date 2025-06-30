// Assignment 1
const allButtons = document.querySelectorAll("button");

  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", function () {
      console.log(this.textContent); // "Click Me", "Submit", etc.
    });
  }

  // Assignment 2
  const all1Buttons = document.querySelectorAll("button");

  for (let i = 0; i < all1Buttons.length; i++) {
    all1Buttons[i].addEventListener("click", function () {
      console.log(`You clicked button ${i + 1}: ${this.textContent}`);
    });
  }

  // Assignment 3
   const all2Buttons = document.querySelectorAll("button");

  all2Buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      console.log(this); // 'this' here refers to the outer scope, not the button
      console.log(event.target.textContent); // Correct way to get clicked button
    });
  });

