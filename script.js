const buttons = document.querySelectorAll('button')
const myChoiceDisplay = document.getElementById('my-choice')
const computerChoiceDisplay = document.getElementById('computer-choice')
const resultDisplay = document.getElementById('result')
let myChoice
let computerChoice

buttons.forEach(button => button.addEventListener('click', (e)=> {
    myChoice = e.target.id
    myChoiceDisplay.innerHTML = myChoice
    generateComputerChoice()
    getResult()
    greenRed()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if(randomNumber === 1){
        computerChoice = "rock"
    } else if(randomNumber === 2){
        computerChoice = "paper"
    } else if(randomNumber === 3){
        computerChoice = "scrissors"
    } computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if(myChoice === computerChoice){
        resultDisplay.innerHTML = "It's a draw!"
    }
    if(myChoice === 'rock' && computerChoice === 'paper'){
        resultDisplay.innerHTML = "You lost!"
    }
    if(myChoice === 'rock' && computerChoice === 'scrissors'){
        resultDisplay.innerHTML = "You won!"
    }
    if(myChoice === 'paper' && computerChoice === 'rock'){
        resultDisplay.innerHTML = "You won!"
    }
    if(myChoice === 'paper' && computerChoice === 'scrissors'){
        resultDisplay.innerHTML = "You lost!"
    }
    if(myChoice === 'scrissors' && computerChoice === 'rock'){
        resultDisplay.innerHTML = "You lost!"
    }
    if(myChoice === 'scrissors' && computerChoice === 'paper'){
        resultDisplay.innerHTML = "You won!"
    }
}

function greenRed(){
    if(resultDisplay.innerHTML === "You lost!"){
        resultDisplay.style.color = "red"; 
    }
    if(resultDisplay.innerHTML === "You won!"){
        resultDisplay.style.color = "green"; 
    }
    if(resultDisplay.innerHTML === "It's a draw!"){
        resultDisplay.style.color = "white"; 
    }
}
