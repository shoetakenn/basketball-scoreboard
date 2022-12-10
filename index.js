/* steps:
 make design
 1. essentials (fonts, background, score board design)
 1a. fonts /
 1b. background /
 1c. score counter (black) (/)
 1d. score texts (/)
 2. buttons
 2a. make buttons /
 2b. copy design /
 2c. make them a row /
 2d. for each button, have onclick call assigned function /
 3. js
 3a. make functions
 
 */

let home = document.getElementById("score-home");
let away = document.getElementById("score-away");

let homeScore = 0
let awayScore = 0

home.textContent = homeScore
away.textContent = awayScore

console.log("home: " + homeScore)
console.log("away: " + awayScore)

/* functions */

/* home */

function increment1home() {
    homeScore += 1
    home.textContent = homeScore
    console.log("home: " + homeScore)
}

function increment2home() {
    homeScore += 2
    home.textContent = homeScore
    console.log("home: " + homeScore)
}

function increment3home() {
    homeScore += 3
    home.textContent = homeScore
    console.log("home: " + homeScore)
}

/* away */

function increment1away() {
    awayScore += 1
    away.textContent = awayScore
    console.log("away: " + awayScore)
}

function increment2away() {
    awayScore += 2
    away.textContent = awayScore
    console.log("away: " + awayScore)
}

function increment3away() {
    awayScore += 3
    away.textContent = awayScore
    console.log("away: " + awayScore)
}

/* new game */

function newGame() {
    awayScore = 0
    homeScore = 0
    home.textContent = homeScore
    away.textContent = awayScore
    console.log("Reset the counter, new game!")
}