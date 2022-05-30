let hands = ["rock", "paper", "scissors"]

function randomGenerator () {
    let number = Math.floor(Math.random() * 3) + 1
    if (number === 1){
        return "rock"
    } else if (number === 2) {
        return "paper"
    }else {
        return "scissors"
    }
}

let playerChoice = document.getElementById("choice")

function rock() {
    let computerChoice = randomGenerator()
    playerChoice.textContent = "You chose Rock, I chose " + computerChoice + "!"
    if (computerChoice === "rock"){
        playerChoice.textContent += " Tie Game"
    } else if (computerChoice === "paper"){
        playerChoice.textContent += " I Win!"
} else {
    playerChoice.textContent += " You Win!"
}}

function paper() {
    let computerChoice = randomGenerator()
    playerChoice.textContent = "You chose Paper, I chose " + computerChoice + "!"
    if (computerChoice === "paper"){
        playerChoice.textContent += " Tie Game"
    } else if (computerChoice === "scissors"){
        playerChoice.textContent += " I Win!"
} else {
    playerChoice.textContent += " You Win!"
}}

function scissors() {
    let computerChoice = randomGenerator()
    playerChoice.textContent = "You chose Scissors, I chose " + computerChoice + "!"
    if (computerChoice === "scissors"){
        playerChoice.textContent += " Tie Game"
    } else if (computerChoice === "rock"){
        playerChoice.textContent += " I Win!"
} else {
    playerChoice.textContent += " You Win!"
}}