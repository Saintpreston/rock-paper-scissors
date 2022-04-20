
//getting html elements
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const userWinsDisplay = document.querySelector("#user-wins");
const computerWinsDisplay = document.querySelector("#computer-wins");


let userTries = 0;

let computerWins = 0;
let userWins = 0;

//the variables I need to determine the winner
let userChoice;
let computerChoice;
let result;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  computerChoiceDisplay.innerText = ""
  userChoice = e.target.id.toString(); //console was complaining about type difference lol
  console.log(`i clicked ${userChoice}`)
     buttonsDisabled();

  if(userChoice === "paper"){
    userChoiceDisplay.innerText = "📄"
  }
  if(userChoice === "rock"){
    userChoiceDisplay.innerText = "🪨"
  }
  if(userChoice === "scissors"){
    userChoiceDisplay.innerText = "✂️"
  }
  buttonsDelay();
  readySetGo();
  beatUser(userChoice);
  getResult();
}))

const beatUser = async (userChoice) =>{
  await readySetGo()
  if(userChoice === 'paper'){
    computerChoice = 'scissors'
    computerChoiceDisplay.innerHTML = "✂️"
    console.log(`user ${userChoice}, AI${computerChoice}`)
  }
  if(userChoice === 'scissors'){
    computerChoice = 'rock'
    computerChoiceDisplay.innerHTML = "🪨"
  }
  if(userChoice === 'rock'){
    computerChoice = 'paper'
    computerChoiceDisplay.innerHTML = "📄"
  }
}


 async function getResult() {

  await readySetGo()

  if (computerChoice === userChoice) {
    result = 'Shoot, Its a draw!'

  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    result = 'Shoot, You win!'
      userWins++
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 'Shoot, You lost!'
      computerWins++
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'Shoot, You win!'
      userWins++
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'Shoot, You lose!'
      computerWins++
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'Shoot, You win!'
      userWins++
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'Shoot, You lose!'
      computerWins++
  }
  userWinsDisplay.innerText = userWins;
  computerWinsDisplay.innerText = computerWins;
  resultDisplay.innerText = result;
  console.log(result);
     userTries++
     await waitForMe(780)
  promptUserLeave(userTries);
}


function waitForMe(ms) {
  return new Promise(resolve => {
    setTimeout(()=> {resolve('')}, ms);
  })
}

const countdown = ["🤜🏽", "✋🏾", "✌🏻️",""];
const readySetGo = async() =>{
    for (let i=0; i < countdown.length; i++){
        await waitForMe(600)
        console.log(i)
        resultDisplay.innerText = countdown[i];
        console.log(resultDisplay.innerText)
    }
}

const promptUserLeave =  (userTries) =>{
        let userTriesRem =  userTries % 3
    if (userTriesRem === 0){
       if( window.confirm(`You've played ${userTries} times. Click ok to go back home or cancel to keep going`))
       {
           window.open('../index.html' )
       }
    }
}

// I want to disable the button after the user clicks
 function buttonsDisabled() {

    for (let i = 0; i < possibleChoices.length; i++) {
    possibleChoices[i].disabled = true;
        possibleChoices[i].style.backgroundColor = "rgb(189, 0, 0,0.9)"
    }
}

 function buttonsEnabled() {

    for (let i = 0; i < possibleChoices.length; i++) {
        possibleChoices[i].disabled = false;
        possibleChoices[i].style.backgroundColor = "#d198ff";
    }
}

const buttonsDelay = async () =>{
    await waitForMe(3100)
    buttonsEnabled();
}