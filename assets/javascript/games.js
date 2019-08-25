var allLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessesLeft = document.getElementById("guessesLeft");
var guessesFar = document.getElementById("guessesFar");
    
var winsCount = 0;
var lossesCount = 0;
var defaultGuessesLeft = 9;
var guessesLeftCount = defaultGuessesLeft;
var guessesArray = [];

var getRandomLetter = function () {
    randomLetter = allLetters[Math.floor(Math.random()*allLetters.length)]
	console.log(randomLetter);
	return randomLetter
	}	

var displayStats = function () {
	wins.innerHTML = "Wins: " + winsCount
	losses.innerHTML = "Losses: " + lossesCount
	guessesLeft.innerHTML = "Guesses Left: " + guessesLeftCount
	guessesFar.innerHTML = "Your Guesses so far: " + guessesArray
	}

var resetGame = function () {
	guessesArray = [];
	guessesLeftCount = defaultGuessesLeft;
	currentLetter = getRandomLetter();
	}

var userWon = function (userLetter) {
	return userLetter === currentLetter 
	}

var userLost = function () {
	return guessesLeftCount === 0;
	}
    
var currentLetter = getRandomLetter();
displayStats();
    
document.onkeyup = function (event) {
	var userLetter = event.key;
	guessesLeftCount--
	guessesArray.push(userLetter)
	if (userWon(userLetter)) {
		winsCount++;
		resetGame();
	} 
	if (userLost()) {
		lossesCount++;
		resetGame();
		}
    displayStats();
    }