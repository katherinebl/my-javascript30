"use strict";

const secondNeedle = document.querySelector(".seconds");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondDegrees = (seconds / 60) * 360 + 90;
  secondNeedle.style.transform = `rotate(${secondDegrees}deg)`;

  console.log("seconds: ", seconds);
}

setInterval(() => {
  setDate();
}, 1000);
