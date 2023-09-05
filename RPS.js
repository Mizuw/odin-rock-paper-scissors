// dom manipulation const imports (horror)
const ResultsPara = document.getElementById("ResultsPara");
const ResultsScore = document.getElementById("ResultsScore");
const PlayersChoicePara = document.getElementById("PlayersChoicePara");
const ComputersChoicePara = document.getElementById("ComputersChoicePara");

//sound effects (made with jsfxr)
const SoundWin = document.getElementById("SoundWin"); 
const SoundLose = document.getElementById("SoundLose");
const SoundTie = document.getElementById("SoundTie");
const RoundOverWin = document.getElementById("RoundOverWin");
const RoundOverLose = document.getElementById("RoundOverLose");
const resetScoreSound = document.getElementById("ResetScoreSound")

let PlayerScore = 0; 
let ComputerScore = 0;

function playRound() {
    let playerSelection = this.document.activeElement.getAttribute("id"); // gets the "id" from the three buttons, which would be "rock", "paper" or "scissors"
    let computerSelection = getComputerChoice();
    
    //shows the selection of both the player and the computer
    PlayersChoicePara.textContent = `${playerSelection}`;
    ComputersChoicePara.textContent = `${computerSelection}`;

    if (playerSelection == computerSelection) { 
        ResultsPara.textContent = "It's a Tie!";
        SoundTie.play();
    }   
    else {
        switch(true) { 
            case playerSelection == 'Rock' && computerSelection === 'Scissors':
            case playerSelection == 'Paper' && computerSelection == 'Rock':
            case playerSelection == 'Scissors' && computerSelection == 'Paper':
                    PlayerScore++ // adds one point to the player
                    ResultsPara.textContent = `${playerSelection} beats ${computerSelection}! You won!`;
                    SoundWin.play();
            break;
            default:
                    ComputerScore++ // adds one point to the computer
                    ResultsPara.textContent = `${computerSelection} beats ${playerSelection}! You lose!`;
                    SoundLose.play();
        }
        ResultsScore.textContent = `${PlayerScore} - ${ComputerScore}`
    } 
    if (PlayerScore > 4) {
        PlayerScore = 0;
        ComputerScore = 0;
        ResultsScore.textContent = '0 - 0'
        resetScoreSound.play();
        ResultsPara.textContent = 'You won!'
        RoundOverWin.play();
    } else if (ComputerScore > 4) {
        PlayerScore = 0;
        ComputerScore = 0;
        ResultsScore.textContent = '0 - 0'
        resetScoreSound.play();
        ResultsPara.textContent = 'You lose!'
        RoundOverLose.play();
    }
}

function getComputerChoice() {
    let ComputerChoice = Math.floor(Math.random() * 4) // this variable chooses a random number from 1-3, after that we can assign the numbers rock paper or scissors, which then would be the choice of the computer (as seen in the if statements in the next lines)
    if (ComputerChoice == 1) {
        ComputerChoice = "Rock"
    }
    else if (ComputerChoice == 2 ) {
        ComputerChoice = "Paper"
    }
    else {
        ComputerChoice = "Scissors"
    }
    return ComputerChoice
}