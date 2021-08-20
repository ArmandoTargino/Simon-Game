var gamePattern = [];
var flag = false;
var flagMusic=false;
var userClickedPattern = [];
var cont = 0;

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  switch (userChosenColour) {
    case "green":
      $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      setTimeout(function () {
      }, 200);
      new Audio('sounds/green.mp3').play();
      break;
    case "red":
      $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      setTimeout(function () {
      }, 200);
      new Audio('sounds/red.mp3').play();
      break;
    case "yellow":
      $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      setTimeout(function () {
      }, 200);
      new Audio('sounds/yellow.mp3').play();
      break;
    case "blue":
      $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      new Audio('sounds/blue.mp3').play();
      setTimeout(function () {
      }, 200);
      break;
    default:
      console.log("userChosenColour");
  }
  checkAnswer(userClickedPattern.length - 1);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "s" && flag === false) {
    if(flagMusic===false){
      new Audio('sounds/Human_Being_Home_Alone_(Sci_Fi_Industries_Remix).mp3').play();
      flagMusic=true;
    }
    nextSequence();
  }
  flag = true;
});

function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
    // gameOver();
  } else {
    new Audio('sounds/wrong.mp3').play();
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press 'S' Key to Restart");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
    console.log("Game Over");
  }
}

function startOver() {
  cont = 0;
  gamePattern = [];
  flag = false;
}

function playSound(name) {
  var sound = new Audio("sounds/" + name + ".mp3");
  sound.play();
}

function playPattern() {
  var i = 0;
  const intervalId = setInterval(function () {
    $("#" + gamePattern[i]).fadeOut(100).fadeIn(100);
    playSound(gamePattern[i]);
    i += 1;
    if (i === gamePattern.length) {
      clearInterval(intervalId);
    }
  }, 1000);
}

function nextSequence() {
  userClickedPattern = [];
  cont++;
  var randomNumber = (Math.floor(Math.random() * 4));
  playPattern();
  switch (randomNumber) {
    case 0:
      gamePattern.push("green");
      $("h1").text("level " + cont);
      break;
    case 1:
      gamePattern.push("red");
      $("h1").text("level " + cont);
      break;
    case 2:
      gamePattern.push("yellow");
      $("h1").text("level " + cont);
      break;
    case 3:
      gamePattern.push("blue");
      $("h1").text("level " + cont);
      break;
    default:
      console.log("randomChosenColor");
  }
  // console.log(gamePattern);
  return randomNumber;
}