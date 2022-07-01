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

console.log(playRound());
