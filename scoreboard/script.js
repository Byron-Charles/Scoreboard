const homeScoreDisplay = document.querySelector(".home-score-display");
const guestScoreDisplay = document.querySelector(".guest-score-display");
const homeOne = document.querySelector(".home-one");
const homeTwo = document.querySelector(".home-two");
const homeThree = document.querySelector(".home-three");
const guestOne = document.querySelector(".guest-one");
const guestTwo = document.querySelector(".guest-two");
const guestThree = document.querySelector(".guest-three");
const resetBtn = document.querySelector(".reset-btn");
let homeScore = 0;
let guestScore = 0;

resetBtn.addEventListener("click", function () {
  console.log(homeScore, guestScore);
  homeScore = 0;
  guestScore = 0;
  homeScoreDisplay.textContent = homeScore;
  guestScoreDisplay.textContent = guestScore;
});

homeOne.addEventListener("click", function () {
  homeScore += 1;
  if (homeScore < 10) homeScoreDisplay.textContent = `0${homeScore}`;
  else homeScoreDisplay.textContent = homeScore;
});

homeTwo.addEventListener("click", function () {
  homeScore += 2;
  if (homeScore < 10) homeScoreDisplay.textContent = `0${homeScore}`;
  else homeScoreDisplay.textContent = homeScore;
});

homeThree.addEventListener("click", function () {
  homeScore += 3;
  if (homeScore < 10) homeScoreDisplay.textContent = `0${homeScore}`;
  else homeScoreDisplay.textContent = homeScore;
});

guestOne.addEventListener("click", function () {
  guestScore += 1;
  if (guestScore < 10) guestScoreDisplay.textContent = `0${guestScore}`;
  else guestScoreDisplay.textContent = guestScore;
});

guestTwo.addEventListener("click", function () {
  guestScore += 2;
  if (guestScore < 10) guestScoreDisplay.textContent = `0${guestScore}`;
  else guestScoreDisplay.textContent = guestScore;
});

guestThree.addEventListener("click", function () {
  guestScore += 3;
  if (guestScore < 10) guestScoreDisplay.textContent = `0${guestScore}`;
  else guestScoreDisplay.textContent = guestScore;
});
