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

// choose a random one of the array options
let computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];

//check
console.log(computerChoice);


//userinput
let userInput = prompt("Choose and enter either Rock, Paper, or Scissors: ");


//if userinput is not equal to rock paper or scissors then tell it to re-enter. 
if (userInput != "Rock" && userInput != "Paper" && userInput != "Scissors") {
    let userInput = prompt("Incorrect choice, please choose and enter either Rock, Paper, or Scissors: ");
} 

