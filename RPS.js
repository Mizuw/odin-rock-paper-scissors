function getComputerChoice() {
    var ComputerChoice = Math.floor(Math.random() * 4)
    if (ComputerChoice == 1) {
        ComputerChoice = "Rock"
    }
    else if (ComputerChoice == 2 ) {
        ComputerChoice = "Stone"
    }
    else {
        ComputerChoice = "Scissors"
    }

    return ComputerChoice
}
