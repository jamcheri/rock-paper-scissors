/*
Rock paper scissors game played against the computer. 
Start with defining problems. Two "people" that make decisions. These would be functions? 
And then one of three decisions.
*/

let computerOptions = "";
let computerChoice = "";
let userInput = "";
let result = "";

function computerPlay(computerChoice, computerOptions) {
    // choose a random one of the array options. Found this pick random function from stack overflow: https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array    
    computerOptions = ["rock", "paper", "scissors"];
    computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];
    
    return computerChoice;
}

const buttons = document.querySelectorAll('button');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener that calls playRound function with correct userInput
  button.addEventListener('click', () => {
    //alert(button.id);
    userInput = button.id;
    console.log(userInput);
    playRound(userInput);
  });
});

/* not needed
function userPlay(userInput) {
    userInput = prompt("Choose and enter either Rock, Paper, or Scissors: ");
    userInput = userInput.toLowerCase();

    //if userinput is not equal to rock paper or scissors then tell it to re-enter. 
    while (userInput != "rock" && userInput != "paper" && userInput != "scissors") {
    userInput = prompt("Incorrect choice, please choose and enter either Rock, Paper, or Scissors: ");
    userInput = userInput.toLowerCase();
    }     

    return userInput;
}
*/

function playRound(userInput, computerChoice, result) {
    computerChoice = computerPlay();

    if (userInput === computerChoice) {
        result = "Draw";
        console.log("Same choice, the result is a draw");
        alert("Computer choice was " + computerChoice + ". Same choice, the result is a draw");
    } else if (userInput === "rock" && computerChoice === "paper") {
        result = "Loss";
        console.log("Rock loses to paper, you've lost :(");
        alert("Computer choice was " + computerChoice + ". Rock loses to paper, you've lost :(");
    } else if (userInput === "rock" && computerChoice === "scissors") {
        result = "Win";
        console.log("Rock beats scissors, you've won! :)");
        alert("Computer choice was " + computerChoice + ". Rock beats scissors, you've won! :)");
    } else if (userInput === "scissors" && computerChoice === "rock") {
        result = "Loss";
        console.log("Scissors loses to rock, you've lost :(")
        alert("Computer choice was " + computerChoice + ". Scissors loses to rock, you've lost :(")
    } else if (userInput === "scissors" && computerChoice === "paper") {
        result = "Win";
        console.log("Scissors beats paper, you've won! :)")
        alert("Computer choice was " + computerChoice + ". Scissors beats paper, you've won! :)")
    } else if (userInput === "paper" && computerChoice === "scissors") {
        result = "Loss";
        console.log("Paper loses to scissors, you've lost :(")
        alert("Computer choice was " + computerChoice + ". Paper loses to scissors, you've lost :(")
    } else {
        result = "Win";
        console.log("Paper beats rock, you've won! :)")
        alert("Computer choice was " + computerChoice + ". Paper beats rock, you've won! :)")
    }

    return result;
}





function game(result) {
    let userScore = 0;
    let computerScore = 0;
    
    result = playRound();
    if (result === "Loss") {
        computerScore++;
    } else if (result === "Win") {
        userScore++;
    } else {
    }
    alert("Game 1 over! The result was a " + result + ". Your score is now " + userScore + ". Computer score is now " + computerScore + ".");

    result = playRound();
    if (result === "Loss") {
        computerScore++;
    } else if (result === "Win") {
        userScore++;
    } else {
    }
    alert("Game 2 over! The result was a " + result + ". Your score is now " + userScore + ". Computer score is now " + computerScore + ".");

    result = playRound();
    if (result === "Loss") {
        computerScore++;
    } else if (result === "Win") {
        userScore++;
    } else {
    }
    alert("Game 3 over! The result was a " + result + ". Your score is now " + userScore + ". Computer score is now " + computerScore + ".");

    result = playRound();
    if (result === "Loss") {
        computerScore++;
    } else if (result === "Win") {
        userScore++;
    } else {
    }
    alert("Game 4 over! The result was a " + result + ". Your score is now " + userScore + ". Computer score is now " + computerScore + ".");

    result = playRound();
    if (result === "Loss") {
        computerScore++;
    } else if (result === "Win") {
        userScore++;
    } else {
    }
    alert("Game 5 over! The result was a " + result + ". Your score is now " + userScore + ". Computer score is now " + computerScore + ".");

    if (result > 2) {
        alert("All games are over. You won " + userScore + " out of 5 games and won the session! :)")
    } else {
        alert("All games are over. You won " + userScore + " out of 5 games and lost the session :(")
    }

}

//game();




