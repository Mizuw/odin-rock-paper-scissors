function getComputerChoice() {
    var ComputerChoice = Math.floor(Math.random() * 4)
    if (ComputerChoice == 1) {
        ComputerChoice = "rock"
    }
    else if (ComputerChoice == 2 ) {
        ComputerChoice = "paper"
    }
    else {
        ComputerChoice = "scissors"
    }
    return ComputerChoice
}

function playRound(playerSelection, computerSelection) { 

    if (playerSelection == computerSelection) { 
        return "It's a Tie!"
    }
    
    switch(true) { 
        case playerSelection == 'rock' && computerSelection === 'scissors':
        case playerSelection == 'paper' && computerSelection == 'rock':
        case playerSelection == 'scissors' && computerSelection == 'paper':
            return `${playerSelection} beats ${computerSelection}! You won!`;

        default:
            return `${computerSelection} beats ${playerSelection}! You lose!`
    }
}

function game() {

    for (let i = 1; i < 6; i++) {
        console.log("Round " + i + " from 5") 

        var playerSelection = prompt("Rock, Paper or Scissors?")
        var computerSelection = getComputerChoice();

        play = playRound(playerSelection.toLowerCase(), computerSelection)
        console.log(play)
    }
}

