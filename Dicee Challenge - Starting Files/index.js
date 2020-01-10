randomNumber1 = getRandomDiceNumber();
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

randomNumber2 = getRandomDiceNumber();
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "Player 2 wins!";
} else {
  document.querySelector("h1").textContent = "Draw!";
}

function getRandomDiceNumber() {
  randomNumber = Math.random();
  randomNumber *= 6;
  randomNumber = Math.floor(randomNumber) + 1;
  return randomNumber;
}
