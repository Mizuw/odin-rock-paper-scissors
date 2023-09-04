let PlayerScore = 0; 
let ComputerScore = 0;

const container = document.querySelector('#container');
const buttons = document.querySelector('#buttons');

function game() {   
    let playerSelection = this.document.activeElement.getAttribute("id");
    let computerSelection = getComputerChoice();
    switch(true) {  // checks the user input, only allows "rock", "paper" or "scissors" (case insensitive because of the .toLowerCase())
        case playerSelection.toLowerCase() == 'rock':
        case playerSelection.toLowerCase() == 'paper':
        case playerSelection.toLowerCase() == 'scissors':
            play = playRound(playerSelection, computerSelection)
            console.log(`You choose ${playerSelection}, while the Computer choose ${computerSelection}!`)
            console.log(play)

            console.log(`You have a Score of ${PlayerScore}, while the Computer has a Score of ${ComputerScore}`)
            if (PlayerScore > ComputerScore) {
                console.log('You won!')
            } else if (PlayerScore == ComputerScore) {
                console.log('It\'s a Tie Game!')
            } else {
                console.log('You lost!')
            } 
        break;
        default:
            playerSelection-- // for some reason a point to the playerselection will be added when they input something that isn't allowed by the switch statement, so we remove this point. I'm not entirely sure why the point is added, but this works as a fix
            console.log("Please enter Rock, Paper or Scissors")
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

function playRound() {
    let playerSelection = this.document.activeElement.getAttribute("id");
    let computerSelection = getComputerChoice();
    console.log(`Computers Choice: ${computerSelection}`) // debugging
    console.log(`Players Choice: ${playerSelection}`) // debugging
    if (playerSelection == computerSelection) { 
        console.log("It's a Tie!")
    }   else {
        switch(true) { 
            case playerSelection == 'rock' && computerSelection === 'scissors':
            case playerSelection == 'paper' && computerSelection == 'rock':
            case playerSelection == 'scissors' && computerSelection == 'paper':
                PlayerScore++ 
                console.log(`${playerSelection} beats ${computerSelection}! You won!`)
            break;
            default:
                ComputerScore++
                console.log(`${computerSelection} beats ${playerSelection}! You lose!`)
        }
        console.log(`You have a Score of ${PlayerScore}, while the Computer has a Score of ${ComputerScore}`)
    }
}