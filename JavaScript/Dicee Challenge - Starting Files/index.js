var imagePath = "images/dice";
const fileExtension = ".png";

function getRandomInt(max) {
  return Math.ceil(Math.random() * max);
}

function selectRandomImage() {
  return imagePath + getRandomInt(6).toString() + fileExtension;
}

function rollDice(className) {
  document.querySelector("." + className).src = selectRandomImage();
}

function rollBothDices() {
  rollDice("img1");
  rollDice("img2");
}

function compareImageSrc() {
  var img1Src = document.querySelector(".img1").src;
  var img2Src = document.querySelector(".img2").src;

  if (img1Src > img2Src) {
    return "greater";
  } else if (img1Src < img2Src) {
    return "less";
  } else {
    return "equal";
  }
}

function compareDices() {
  var h1Element = document.querySelector("h1");
  switch (compareImageSrc()) {
    case "greater":
      h1Element.innerHTML = "Player 1 win!";
      break;
    case "less":
      h1Element.innerHTML = "Player 2 win!";
      break;
    case "equal":
      h1Element.innerHTML = "Draw!";
      break;
  }
}

function playDiceeGame() {
  rollBothDices();
  compareDices();
}
