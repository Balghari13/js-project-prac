let randomNum = Math.round(Math.random()*100+1)
const input = document.querySelector('.guessField')
const submit = document.querySelector('.guessSubmit')
const previousGuesses = document.querySelector('.guesses')
const guessRemains = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')

const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let preGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', (e)=>{
        e.preventDefault()
    const guess =parseInt(input.value)
    validateGuess(guess)

    })
}

function validateGuess(guess){
    if(guess<1 || guess>100 || isNaN(guess)){
        alert('Please enter a valid number from 1-100')
    }else{
        preGuess.push()
        if(numGuess>=10){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNum}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNum){
        displayMessage('Your guessed number is right')
    }else if(guess<randomNum){
        displayMessage('Your gussed number is low')
    }else{
        displayMessage('Your gussed number is high')
    }
}
function displayGuess(guess){
    input.value = ''
    previousGuesses.innerHTML += ` ${guess}`
    numGuess++
    guessRemains.innerHTML = `${11-numGuess}`
}
function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
    input.value = ''
    input.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame= false
    newGame()
}
function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', (e)=>{
       randomNum = Math.round(Math.random()*100+1)
       preGuess=[]
       numGuess = 1
       previousGuesses.innerHTML = ''
       lowOrHigh.innerHTML = ''
       guessRemains.innerHTML = `${11-numGuess}`
       input.removeAttribute('disabled')
        startOver.removeChild(p)
       playGame= true
    })
}
