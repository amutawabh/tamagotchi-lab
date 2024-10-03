/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let boredom = 0;
let hunger = 0;
let sleepiness = 0;
let isGameOver = false;

/*------------------------ Cached Element References ------------------------*/
const boredomStat = document.getElementById("boredom-stat");
const hungerStat = document.getElementById("hunger-stat");
const sleepinessStat = document.getElementById("sleepiness-stat");
const message = document.getElementById("message");
const restartButton = document.getElementById("restart");

/*----------------------------- Event Listeners -----------------------------*/
document.getElementById("play").addEventListener("click", handleClick);
document.getElementById("feed").addEventListener("click", handleClick);
document.getElementById("sleep").addEventListener("click", handleClick);
restartButton.addEventListener("click", resetGame);

/*-------------------------------- Functions --------------------------------*/
function init() {
  boredom = 0;
  hunger = 0;
  sleepiness = 0;
  isGameOver = false;
  render();
}

function render() {
  boredomStat.textContent = boredom;
  hungerStat.textContent = hunger;
  sleepinessStat.textContent = sleepiness;

  if (isGameOver) {
    message.classList.remove("hidden");
    restartButton.classList.remove("hidden");
  } else {
    message.classList.add("hidden");
    restartButton.classList.add("hidden");
  }
}

function checkGameOver() {
  if (boredom >= 10 || hunger >= 10 || sleepiness >= 10) {
    isGameOver = true;
    render();
  }
}

function handleClick(event) {
  if (isGameOver) return;

  const buttonId = event.target.id;

  if (buttonId === "play") {
    boredom = Math.max(boredom - 2, 0);
  } else if (buttonId === "feed") {
    hunger = Math.max(hunger - 2, 0);
  } else if (buttonId === "sleep") {
    sleepiness = Math.max(sleepiness - 2, 0);
  }

  boredom += 1;
  hunger += 1;
  sleepiness += 1;

  checkGameOver();
  render();
}

function resetGame() {
  init();
}

// Initialize the game on load
init();