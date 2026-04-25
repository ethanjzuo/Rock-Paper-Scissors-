let pscore = 0;
let cscore = 0;
let round = 1;
let choice = 0;
const BotScore = document.querySelector('#computerScore')
const HumanScore = document.querySelector('#playerScore')
const result = document.querySelector('#result')

function playRound(humanChoice, computerChoice) {
    if (computerChoice == "paper" && humanChoice == "rock" || computerChoice == "rock" && humanChoice == "scissors" || computerChoice == "scissors" && humanChoice == "paper" ){
        console.log("you lost")
    
    }
}

function getComputerhoice() {
    let number= Math.floor(Math.random() * 3)

    if (number == 0){
        return "paper";
    }
    else if (number == 1){
        return "scissors";
    }
    else{
        return "rock";
    }
}


rockbtn.eventlistner("click", ()=> {
    choice = "rock"
    console.log("rock")
    playRound("rock", getComputerChoice())
})

paperbtn.eventlistner("click", ()=> {
    choice = "paper"
    console.log("paper")
    playRound("paper", getComputerChoice())
})

scissorsbtn.eventlistner("click", ()=> {
    choice = "scissors"
    console.log("scissors")
    playRound("scissors", getComputerChoice())
})



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

