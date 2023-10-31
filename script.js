function getComputerChoice(){
    let choice = [
        'rock',
        'paper',
        'scissors'
    ];
    let index = Math.floor(Math.random() * choice.length);
    return choice[index];
}

let computerSelection = getComputerChoice();

let userinput = prompt("Enter Your Choice :");
let playerSelection = userinput.toLowerCase();

function playRound(playerSelection, computerSelection){
    if(playerSelection === "rock" && computerSelection === "paper"){
        return "You Lose! Paper beats Rock";
    }
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        return "You Lose! scissors beats paper";
    }
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        return "You Lose! Rock beats scissors";
    }
    else{
        return "You Won";
    }
}

console.log(playRound(playerSelection, computerSelection));