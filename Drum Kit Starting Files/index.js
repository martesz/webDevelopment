var drums = document.querySelectorAll(".drum");
for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", handleButtonClick);
}

document.addEventListener("keydown", function(event) {
  playSoundByKey(event.key);
  buttonAnimation(event.key);
});

function handleButtonClick() {
  var buttonInnerHtml = this.innerHTML;
  playSoundByKey(buttonInnerHtml);
  buttonAnimation(buttonInnerHtml);
}

function playSoundByKey(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log(key + " pressed");
  }
}

function buttonAnimation(key) {
  var button = document.querySelector("." + key);

  button.classList.toggle("pressed");

  setTimeout(function() {
    button.classList.toggle("pressed");
  }, 100);
}
