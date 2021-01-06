function refreshPage() {
  window.location.reload();
}


// Player 1 dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDice1 = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", randomDice1);


// Player 2 dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDice2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomDice2);

// h1 statement conditons for winning
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!"
}
