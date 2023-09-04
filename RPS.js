const ResultsPara = document.getElementById("ResultsPara");
const ResultsScore = document.getElementById("ResultsScore");
let PlayerScore = 0; 
let ComputerScore = 0;

function playRound() {
    let playerSelection = this.document.activeElement.getAttribute("id"); // gets the "id" from the three buttons, which would be "rock", "paper" or "scissors"
    let computerSelection = getComputerChoice();
    
    if (playerSelection == computerSelection) { 
        ResultsPara.textContent = "It's a Tie!";
    }   
    else {
        switch(true) { 
            case playerSelection == 'rock' && computerSelection === 'scissors':
            case playerSelection == 'paper' && computerSelection == 'rock':
            case playerSelection == 'scissors' && computerSelection == 'paper':
                PlayerScore++ // adds one point to the player
                ResultsPara.textContent = `${playerSelection} beats ${computerSelection}! You won!`;
            break;
            default:
                ComputerScore++ // adds one point to the computer
                ResultsPara.textContent = `${computerSelection} beats ${playerSelection}! You lose!`;
        }
        ResultsScore.textContent = `You have a Score of ${PlayerScore}, while the Computer has a Score of ${ComputerScore}`

    } 
    if (PlayerScore == 5) { 
        ResultsPara.textContent = 'You won!'
        PlayerScore = 0; // resets the score
        ComputerScore = 0;
    } else if (ComputerScore == 5) {
        ResultsPara.textContent = 'You lose!'
        PlayerScore = 0; 
        ComputerScore = 0;
    }
}

function getComputerChoice() {
    let ComputerChoice = Math.floor(Math.random() * 4) // this variable chooses a random number from 1-3, after that we can assign the numbers rock paper or scissors, which then would be the choice of the computer (as seen in the if statements in the next lines)
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