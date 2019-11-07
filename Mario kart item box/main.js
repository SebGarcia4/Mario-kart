// Itme Box Simulator 
'use strict';

// Global Variables
let numBanana = 0;
let numShell = 0;
let numStar = 0;
let numGolden = 0;
let numBullet = 0;


let resultsEl = document.getElementById('results');

// Event Listener
document.getElementById('mainImg').addEventListener('click', openBox);
document.getElementById('plus5').addEventListener('click', plus5);
document.getElementById('until10bulletbill').addEventListener('click', until10bulletbill);
document.getElementById('pos-Btn').addEventListener('click', posBtn);
// Event Fucntion
function openBox() {

    // Generate a random number 
    let randNum = Math.random(); // Random decimal from 0 up to 1
    console.log(randNum)
    // Simulate Results
    if (randNum < 0.25) {
        // Get Banana
        let randBanana = Math.random();

        if (randNum < 0.25) {
            console.log('banana');
            numBanana++;
            document.getElementById('banana').innerHTML = numBanana;
            resultsEl.innerHTML += '<img src="images/banana.png">';
        } 
        

    } else if (randNum < 0.50) {
        // Get GreenShell
        console.log('shell');
        numShell++;
        document.getElementById('shell').innerHTML = numShell;
        resultsEl.innerHTML += '<img src="images/greenshell.png">';
    } else if (randNum < 0.65) {
        // Get Star
        console.log('star');
        numStar++;
        document.getElementById('star').innerHTML = numStar;
        resultsEl.innerHTML += '<img src="images/star.png">';
    } else if (randNum < 0.80) {
        // Get Golden Mushroom
        console.log('golden');
        numGolden++;
        document.getElementById('golden').innerHTML = numGolden;
        resultsEl.innerHTML += '<img src="images/goldenmushroom.png">';
    } else if (randNum < 90) {
        console.log('bullet');
        // Get Bullet Bill
        numBullet++;
        document.getElementById('bullet').innerHTML = numBullet;
        resultsEl.innerHTML += '<img src="images/Bullet-bill.png">';
    }
} 
// Loops
function plus5 () {
    for (let n = 0; n <5; n++) {
        openBox();
    }
}
 
function until10bulletbill() {
    let count = 0;
    while (numBullet < 10) {
        openBox();
        count++
    }
    console.log('Count: ' + count);
}

// Generate a number based on racer position
let randNum = Math.random(); // Random decimal from 0 up to 1
console.log(randNum)
// Racer position