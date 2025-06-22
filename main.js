let userScore = 0;
let computerScore = 0;
let gameOver = true;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(userChoice) {
  if (gameOver) return;

  const computerChoice = getComputerChoice();
  let result = "";

  if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore++;
    result = "You win";
  } else {
    computerScore++;
    result = "Computer wins!";
  }

  document.querySelector(
    "#result"
  ).textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
  document.querySelector(
    "#score"
  ).textContent = `User: ${userScore} | Computer: ${computerScore}`;

  checkGameOver();
}

function checkGameOver() {
  if (userScore === 5 || computerScore === 5) {
    gameOver = true;
    const winner = userScore === 5 ? "You" : "Computer";
    document.querySelector(
      "#result"
    ).textContent += `\n ${winner} won the game!`;
    disableButtons();
  }
}

function disableButtons() {
  document.querySelector("#rock").disabled = true;
  document.querySelector("#paper").disabled = true;
  document.querySelector("#scissors").disabled = true;
}

function enableButtons() {
  document.querySelector("#rock").disabled = false;
  document.querySelector("#paper").disabled = false;
  document.querySelector("#scissors").disabled = false;
}

document.querySelector("#start-game").addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  gameOver = false;

  document.querySelector("#score").textContent = `User: 0 | Computer: 0`;
  document.querySelector("#result").textContent = "";
  enableButtons();
});

document
  .querySelector("#rock")
  .addEventListener("click", () => playRound("rock"));
document
  .querySelector("#paper")
  .addEventListener("click", () => playRound("paper"));
document
  .querySelector("#scissors")
  .addEventListener("click", () => playRound("scissors"));
