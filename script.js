let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'βοΈ No number!';
    displayMessage("YOU HAVEN'T INPUTTED ANYTHING, baka! uwu");

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'π Correct Number!';
    displayMessage("U FUCKING DID IT WOW!!!πͺ");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? 'π Too high!' : 'π Too low!';
      displayMessage(
        guess > secretNumber
          ? "TRY A LIL' BIT LOWER!! π"
          : "YOO THATS TOO LOW! π"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'π₯ You lost the game!';
      displayMessage("wtf you lostπ«");
      document.querySelector(".score").textContent = 0;
    }
  }

  //   // When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'π Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'π₯ You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'π Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'π₯ You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#000";
  document.querySelector(".number").style.width = "15rem";
});
