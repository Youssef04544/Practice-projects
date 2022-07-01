const SIGNS = ["rock", "paper", "scissors"];

function playRound() {
  let playerSelection = "";
  while (!SIGNS.includes(playerSelection)) {
    playerSelection = prompt("rock, paper or scissors?").toLowerCase();
  }
  const computerSelection = computerPlay();

  return checkPlayerWinner(playerSelection, computerSelection);
}

const computerPlay = () => {
  return SIGNS[Math.floor(Math.random() * 3)];
};

const checkPlayerWinner = (choice1, choice2) => {
  if (choice1 === choice2) {
    return "It's a tie!";
  } else {
    if (choice1 === "rock") {
      if (choice2 === "paper") {
        return `You lose, ${choice2} beats ${choice1}`;
      } else {
        return `You win, ${choice1} beats ${choice2}`;
      }
    } else if (choice1 === "paper") {
      if (choice2 === "scissors")
        return `You lose, ${choice2} beats ${choice1}`;
      else return `You win, ${choice1} beats ${choice2}`;
    } else if (choice1 === "scissors") {
      if (choice2 === "rock") return `You lose, ${choice2} beats ${choice1}`;
      else return `You win, ${choice1} beats ${choice2}`;
    }
  }
};

const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  for (i = 0; i < 5; i++) {
    const roundResult = playRound();
    if (roundResult.includes("win")) {
      playerScore++;
    } else if (roundResult.includes("loose")) {
      computerScore++;
    }
  }
  return `${
    playerScore === computerScore
      ? `It's a tie! the score is ${playerScore} for both.`
      : playerScore > computerScore
      ? `You're the winner! your score is ${playerScore} vs computer's score of ${computerScore}`
      : `Computer is the winner! your score is ${playerScore} vs computer's score of ${computerScore}`
  }`;
};

console.log(game());
