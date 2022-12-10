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
let guest = document.getElementById("score-guest");

let homeScore = 0
let guestScore = 0

home.textContent = homeScore
guest.textContent = guestScore

console.log("home: " + homeScore)
console.log("guest: " + guestScore)

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

/* guest */

function increment1guest() {
    guestScore += 1
    guest.textContent = guestScore
    console.log("guest: " + guestScore)
}

function increment2guest() {
    guestScore += 2
    guest.textContent = guestScore
    console.log("guest: " + guestScore)
}

function increment3guest() {
    guestScore += 3
    guest.textContent = guestScore
    console.log("guest: " + guestScore)
}

/* new game */

function newGame() {
    guestScore = 0
    homeScore = 0
    home.textContent = homeScore
    guest.textContent = guestScore
    console.log("Reset the counter, new game!")
}