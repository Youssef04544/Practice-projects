const SIGNS = ["rock", "paper", "scissors"];

function playRound() {
  let playerSelection = "";
  while (!SIGNS.includes(playerSelection)) {
    playerSelection = prompt("rock, paper or scissors?").toLowerCase();
  }
  const computerSelection = computerPlay();
  return `${playerSelection} ${computerSelection}`;
}

const computerPlay = () => {
  return SIGNS[Math.floor(Math.random() * 3)];
};

console.log(playRound());
