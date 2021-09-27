/*
Rock paper scissors game played against the computer. 

Start with defining problems. Two "people" that make decisions. These would be functions? 

And then one of three decisions.
*/

//computer function
function computerPlay() {
    return random
}


//array of options to throw
let computerOptions = ["Rock", "Paper", "Scissors"];

// choose a random one of the array options. Found this random picking function from stack overflow: https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array 
let computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];

console.log("Computer choice is " + computerChoice);

//userinput
let userInput = prompt("Choose and enter either Rock, Paper, or Scissors: ");

//if userinput is not equal to rock paper or scissors then tell it to re-enter. 
while (userInput != "Rock" && userInput != "Paper" && userInput != "Scissors") {
    userInput = prompt("Incorrect choice, please choose and enter either Rock, Paper, or Scissors: ");
} 

console.log("User choice is " + userInput);

if (userInput === computerChoice) {
    console.log("Same choice, the result is a draw");
    alert("Computer choice was " + computerChoice + ". Same choice, the result is a draw");
} else if (userInput === "Rock" && computerChoice === "Paper") {
    console.log("Rock loses to Paper, you've lost :(");
    alert("Computer choice was " + computerChoice + ". Rock loses to Paper, you've lost :(");
} else if (userInput === "Rock" && computerChoice === "Scissors") {
    console.log("Rock beats Scissors, you've won! :)");
    alert("Computer choice was " + computerChoice + ". Rock beats Scissors, you've won! :)");
} else if (userInput === "Scissors" && computerChoice === "Rock") {
    console.log("Scissors loses to Rock, you've lost :(")
    alert("Computer choice was " + computerChoice + ". Scissors loses to Rock, you've lost :(")
} else if (userInput === "Scissors" && computerChoice === "Paper") {
    console.log("Scissors beats Paper, you've won! :)")
    alert("Computer choice was " + computerChoice + ". Scissors beats Paper, you've won! :)")
} else if (userInput === "Paper" && computerChoice === "Scissors") {
    console.log("Paper loses to Scissors, you've lost :(")
    alert("Computer choice was " + computerChoice + ". Paper loses to Scissors, you've lost :(")
} else {
    console.log("Paper beats Rock, you've won! :)")
    alert("Computer choice was " + computerChoice + ". Paper beats Rock, you've won! :)")
}

