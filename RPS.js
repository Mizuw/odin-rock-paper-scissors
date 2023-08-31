let PlayerScore = 0 
let ComputerScore = 0
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

function playRound(playerSelection, computerSelection) { 
    if (playerSelection.toLowerCase() == computerSelection) { 
        return "It's a Tie!"
    }
    switch(true) { 
        case playerSelection.toLowerCase() == 'rock' && computerSelection === 'scissors':
        case playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock':
        case playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper':
            PlayerScore++ 
            return `${playerSelection} beats ${computerSelection}! You won!`
        default:
            ComputerScore++
            return `${computerSelection} beats ${playerSelection}! You lose!`
    }
}

function game() {
    for (let i = 1; i < 6; i++) { // will loop until 'i' has a value of 6, which would be on round 5
        console.log("Round " + i + " from 5") 
        
        let playerSelection = prompt("Rock, Paper or Scissors?")
        let computerSelection = getComputerChoice();
        switch(true) {  // checks the user input, only allows "rock", "paper" or "scissors" (case insensitive because of the .toLowerCase())
            case playerSelection.toLowerCase() == 'rock':
            case playerSelection.toLowerCase() == 'paper':
            case playerSelection.toLowerCase() == 'scissors':
                play = playRound(playerSelection, computerSelection)
                console.log(`You choose ${playerSelection}, while the Computer choose ${computerSelection}!`)
                console.log(play)
            break;
            default:
                i-- // the for loop would continue to the next round regardless, so we subtract one round. Because of that the current round will loop until the user inputs correctly
                console.log("Please enter Rock, Paper or Scissors")
        }
    }

    console.log(`You have a Score of ${PlayerScore}, while the Computer has a Score of ${ComputerScore}`)
    if (PlayerScore > ComputerScore) {
        console.log('You won!')
    } else if (PlayerScore == ComputerScore) {
        console.log('It\'s a Tie Game!')
    } else {
        console.log('You lost!')
    } 
}