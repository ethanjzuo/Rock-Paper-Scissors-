let pscore = 0;
let cscore = 0;
let roundCounter = 0;

const BotScore = document.querySelector('#computerScore');
const HumanScore = document.querySelector('#playerScore');
const result = document.querySelector('#result');

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    if (number === 0) return "paper";
    if (number === 1) return "scissors";
    return "rock";
}

function playRound(humanChoice, computerChoice) {
    if (computerChoice === humanChoice) {
        result.innerHTML = "It's a tie!";
    } 
    else if (
        (computerChoice === "paper" && humanChoice === "rock") || 
        (computerChoice === "rock" && humanChoice === "scissors") || 
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        result.innerHTML = "Computer wins this round!";
        cscore++;
    } 
    else {
        result.innerHTML = "You win this round!";
        pscore++;
    }

    roundCounter++;
    BotScore.innerHTML = cscore;
    HumanScore.innerHTML = pscore;
    if (roundCounter >= 5) {
        if (pscore > cscore) {
            alert("Match Over! You won the game!");
        } else if (cscore > pscore) {
            alert("Match Over! Computer won the game!");
        } else {
            alert("Match Over! It's a draw!");
        }
        
        pscore = 0;
        cscore = 0;
        roundCounter = 0;
        BotScore.textContent = 0;
        HumanScore.textContent = 0;
    }
}

rockbtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paperbtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissorsbtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});