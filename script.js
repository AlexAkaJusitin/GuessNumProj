"use strict";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Congrats";

const randomNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 5;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent =
      "You haven't inputted a value, BAKA! uwu";
  } //////////////////////////////////////////////////////
  if (score !== 0) {
    if (guess) {
      document.querySelector(".message").textContent =
        guess > randomNumber
          ? (document.querySelector(".message").textContent =
              "TRY A LIL' BIT LOWER!😆")
          : (document.querySelector(".message").textContent =
              "YO THATS TOO LOW😁");
      score--;
      document.querySelector(".score").textContent = score;
    }
  }
  if (guess === randomNumber && score != 0) {
    document.querySelector(".message").textContent = "YOU GUESSED IT!!!💖";
    document.querySelector(".number").textContent = randomNumber;
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector(".highscore").textContent = highScore;
    document.querySelector("body").style.backgroundColor = "#5ea758";
    document.querySelector(".message").style.fontSize = "3rem";
    document.querySelector(".number").style.width = "30rem";
  } //////////////////////////////////////////////////////
  if (score == 0) {
    document.querySelector(".message").textContent = "YOU LOST!😥";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 5;
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").style.fontSize = "2rem";
});
