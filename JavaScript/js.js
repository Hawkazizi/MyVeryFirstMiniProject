"use strict";
let number = Math.trunc(Math.random() * 20) + 1;
let score = document.querySelector(".score").textContent;
let highscore = 0;
document.querySelector(".btn").addEventListener("click", function () {
  const guess = Number(document.querySelector(".input").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").style.color = "#ff0000";
    document.querySelector(".message").textContent = "***Invaild Number";
  } else if (guess === number) {
    document.querySelector(".message").textContent = "Correct Number !!!";
    document.querySelector(".box").textContent = number;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".box").style.width = "100px";
    document.querySelector(".box").style.border = "none";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > number ? "too high" : "too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  number = Math.trunc(Math.random() * 30) + 1;
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".score").textContent = score;

  document.querySelector(".box").textContent = "?";
  document.querySelector(".input").value = "  ";

  document.querySelector("body").style.backgroundColor = "rgb(197, 207, 57)";
  document.querySelector(".box").style.width = "80px";
  document.querySelector(".box").style.border = "5px solid rgb(49, 9, 102)";
});

// create functions for most used lines later !!!
