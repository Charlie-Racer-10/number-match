//Project 1 - Counter Program

//constants to represent the id's of certain elements
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const decrease = document.getElementById("decrease");

const count = document.getElementById("count");

const startButton = document.getElementById("startButton");
const quitButton = document.getElementById("quitButton");

const target = document.getElementById("target");
const warning = document.getElementById("warning");

const incMultiplier = document.getElementById("incMultiplier");
const decMultiplier = document.getElementById("decMultiplier");
const incSubmit = document.getElementById("incSubmit");
const decSubmit = document.getElementById("decSubmit");

const start = document.getElementById("start");

//variables for the game
let number = 0;
let pNumber = 0;

let incDec = 0;
let increaseRate = 1;
let decreaseRate = 1;    

let randCount;
let numTarget;

// All the functions needed for the game

function randint() {
    let randCount = Math.floor(Math.random() * 10000) + 1;
    let numTarget = randCount;
    return numTarget; 
}

function increment() {
    number += increaseRate;
    count.textContent = number;
    console.log(`Count: ${number}`);
    
    if(number === numTarget) {
        target.textContent = `YOU WIN! Target: ${numTarget}`;
        startButton.textContent = `PLAY AGAIN?`;
    }

}

function resetter() {
    number = 0;
    count.textContent = number;
    console.log(`Count: ${number}`);
    increaseRate = 1;
    decreaseRate = 1;
    increase.textContent = `Increment 1x`;
    decrease.textContent = `Decrement 1x`;
}

function decrement() {
    number -= decreaseRate;
    count.textContent = number;
    console.log(`Count: ${number}`);
    
    if(number === numTarget) {
        target.textContent = `YOU WIN! Target: ${numTarget}`;
        startButton.textContent = `PLAY AGAIN?`;
    }
}

function game() {  
    numTarget = randint();  
    target.textContent = `Your target is ${numTarget}`;
    startButton.textContent = `Game Ongoing`;
    quitButton.textContent = `QUIT`;
}

function quit() {
    target.textContent = ``;
    startButton.textContent = `START GAME`;
    quitButton.textContent = ``;
}

// The Interactivity is all underneath

startButton.onclick = function() {
    resetter();
    game(); 
}

quitButton.onclick = function() {
    resetter()
    quit()
}

increase.onclick = function() {
    increment();
}

reset.onclick = function() {
    resetter();
}

decrease.onclick = function() {
    decrement();
}

incSubmit.onclick = function() {
    increaseRate = 1;
    incDec = incMultiplier.value;
    incDec = Number(incDec);
    increaseRate *= incDec;
    console.log(`New Increase Multiplier: ${increaseRate}`)
    increase.textContent = `Increment ${incDec}x`;

    if(incMultiplier.value == "") {
        increaseRate = 1;
        console.log(`New Increase Multiplier: ${increaseRate}`);
        increase.textContent = `Increment 1x`;
    }
}

decSubmit.onclick = function() {
    decreaseRate = 1;
    incDec = decMultiplier.value;
    incDec = Number(incDec);
    decreaseRate *= incDec;
    console.log(`New Decrease Multiplier: ${decreaseRate}`);
    decrease.textContent = `Decrement ${incDec}x`;

    if(decMultiplier.value == "") {
        decreaseRate = 1;
        console.log(`New Increase Multiplier: ${decreaseRate}`);
        increase.textContent = `Increment 1x`;
    }
}

//Stuff for the console (mobile users can't see :skull:)

console.log(`Random Number Generator: ${randCount}`);
console.log(`Increase Multiplier: ${increaseRate}`);
console.log(`Decrease Multiplier: ${decreaseRate}`);
console.log(`Count: ${number}`);
