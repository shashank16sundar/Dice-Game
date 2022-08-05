//Generating Two Random Numbers and Using them to Display a particular Dice Image.
var diceNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").setAttribute("src", "images/dice" + diceNumber1 + ".png");
var diceNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").setAttribute("src", "images/dice" + diceNumber2 + ".png");

// If Player 1 Wins, we change the h1 tag to display so.
if (diceNumber1 > diceNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}

// If Player 2 Wins, we change the h1 tag to display so.
else if (diceNumber1 < diceNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}

// If Both Players Draw, we change the h1 tag to display so.
else {
  document.querySelector("h1").innerHTML = "Draw";
}
