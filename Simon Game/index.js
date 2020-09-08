const colors = ["green", "red", "yellow", "blue"];
let gamePattern = [];
let userPattern = [];
let level = 1;
let hasStarted = false;
let numOfClicks = 0;

$(document).keypress(() => {
  
  if (hasStarted === false) {
    hasStarted = true;
    patternGenerator();
  }
});

$(".btn").click((e) => {
  
  if (hasStarted === false) {
    $("#level-title").text("Press a key to start!!");
    return;
  }
  numOfClicks++;

  const userChosenColor = e.target.id;
  userPattern.push(userChosenColor);
  console.log(userPattern);
  console.log(gamePattern);
  playAnimation(userChosenColor);
  makeSound(userChosenColor);
  checkPattern(numOfClicks);
});

function checkPattern(currentLevel) {
  console.log(level+" "+currentLevel);
  if (userPattern[currentLevel - 1] != gamePattern[currentLevel - 1]) {
    console.log("OVER");
    gameOver();
    return;
  } else if (numOfClicks == level) {
    console.log("LEVEL UP");
    level++;
    numOfClicks = 0;
    userPattern = [];
    setTimeout(() => {
      patternGenerator();
    }, 1000);
  }
}

function gameOver() {
  
  var audio = new Audio("sounds/wrong.mp3");
  audio.play();
  $("#level-title").text("Game Over, Press Any Key to Restart!");
  $("body").addClass("game-over");

  setTimeout(() => {
    $("body").removeClass("game-over");
  }, 200);

  startOver();
}

function startOver() {
  
  gamePattern = [];
  userPattern = [];
  level = 1;
  hasStarted = false;
  numOfClicks = 0;
}

function patternGenerator() {
  
  $("#level-title").text("Level " + level);
  let random = Math.floor(Math.random() * 4);
  let randomColor = colors[random];
  gamePattern.push(randomColor);
  playAnimation(randomColor);
  makeSound(randomColor);
}

function playAnimation(color) {
  var count = 0;
  var animate = setInterval(() => {
    $("#" + color).toggleClass("pressed");
    count += 1;
    if (count === 2) {
      clearInterval(animate);
    }
  }, 200);
}

function makeSound(color) {
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}