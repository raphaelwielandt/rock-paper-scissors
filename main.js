function getComputerChoice() {
  let number = parseInt(Math.random() * 3);

  if (number === 0) return "rock";
  else if (number === 1) return "paper";
  else return "scissors";
}

function getHumanChoice() {
  let input = prompt("rock, paper or scissors ?");

  return input;
}

function playRound(humanChoice, computerChoice) {
  if (typeof humanChoice !== "string") {
    throw new TypeError("not a string");
  }
  humanChoice = humanChoice.toLowerCase();

  let winner = "";

  if (humanChoice === computerChoice) winner = "nobody";
  else if (humanChoice === "rock" && computerChoice === "scissors")
    winner = "human";
  else if (humanChoice === "paper" && computerChoice === "rock")
    winner = "human";
  else if (humanChoice === "scissors" && computerChoice === "paper")
    winner = "human";
  else winner = "computer";

  if (winner === "human") {
    console.log("You win! " + humanChoice + " beats " + computerChoice);
  } else if (winner === "computer") {
    console.log("You lose! " + computerChoice + " beats " + humanChoice);
  }

  return winner;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    let winner = playRound(humanSelection, computerSelection);

    if (winner === "human") humanScore++;
    else if (winner === "computer") computerScore++;
  }

  if (humanScore > computerScore) console.log("You won the game!");
  else if (computerScore > humanScore) console.log("You lost the game!");
  else console.log("Draw!");
}
