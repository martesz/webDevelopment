var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var gameHasStarted = false;
var gameLost = false;
var gameLevel = 0;

$(".btn").click(handleButtonClick);

$(document).keypress(handleKeyPress);

function nextSequence() {
  randomChosenColour = getRandomColour();
  gamePattern.push(randomChosenColour);
  flashButton(randomChosenColour);
  playSoundByFileName(randomChosenColour);
  incrementGameLevel();
}

function incrementGameLevel() {
  gameLevel++;
  displayLevel();
}

function displayLevel() {
  $("h1").text("Level " + gameLevel);
}

function checkAnswer() {
  var patternMatches = true;
  for (var i = 0; i < userClickedPattern.length; i++) {
    if (userClickedPattern[i] === gamePattern[i]) {
      console.log("success");
    } else {
      patternMatches = false;
      gameOver();
    }
  }
  if (patternMatches && userClickedPattern.length === gamePattern.length) {
    nextLevel();
  }
}

function gameOver() {
  gameLost = true;
  playSoundByFileName("wrong");
  $("body").toggleClass("game-over");
  setTimeout(function() {
    $("body").toggleClass("game-over");
  }, 200);
  $("h1").text("Game Over, Press any key to restart");
}

function startOver() {
  gameLevel = 0;
  gamePattern = [];
  userClickedPattern = [];
}

function nextLevel() {
  userClickedPattern = [];
  setTimeout(nextSequence, 1000);
}

function getRandomColour() {
  var randomNumber = Math.round(Math.random() * 3);
  var randomChosenColour = buttonColours[randomNumber];
  return randomChosenColour;
}

function flashButton(color) {
  $("#" + color).fadeOut(100).fadeIn(100);
}

function pressButton(color) {
  toggleButtonPress(color)
  setTimeout(toggleButtonPress, 100, color);
}

function toggleButtonPress(color) {
  $("." + color).toggleClass("pressed");
}

function playSoundByFileName(color) {
  var sound = new Audio("sounds/" + color + ".mp3");
  sound.play();
}

function handleButtonClick(event) {
  var userChosenColour = event.target.id;
  userClickedPattern.push(userChosenColour);
  pressButton(userChosenColour);
  playSoundByFileName(userChosenColour);
  checkAnswer();
}

function handleKeyPress() {
  if (gameHasStarted == false) {
    gameHasStarted = true;
    nextSequence();
  } else if (gameLost == true) {
    gameLost = false;
    startOver();
    nextSequence();
  }
}
