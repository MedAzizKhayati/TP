function button1() {
    x = Math.floor(Math.random() * 10);
    numberOfTries = 2;
    alert("You have 3 tries to guess the number from 0 to 10.");
}
function button2() {
    x = Math.floor(Math.random() * 20);
    numberOfTries = 4;
    alert("You have 5 tries to guess the number from 0 to 20.");

}
function button3() {
    x = Math.floor(Math.random() * 30);
    numberOfTries = 6;
    alert("You have 7 tries to guess the number from 0 to 30.");
}

function isClicked() {
    guess = prompt("Guess the number!");
    if (x == guess) {
        alert("Congratulations, you're a psychic!");
        x = Math.floor(Math.random() * 10);
        numberOfTries = 3;
        console.log(x);
    }
    else if (numberOfTries > 0) {
        alert("Try again :(, You still have " + numberOfTries + " more tries.");
        numberOfTries--;
    }
    else {
        alert("Sorry, you lost. The number was " + x);
        x = Math.floor(Math.random() * 10);
        numberOfTries = 3;
    }
}
