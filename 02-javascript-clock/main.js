"use strict";

const secondNeedle = document.querySelector(".seconds");
const minutesNeedle = document.querySelector(".minutes");
const hourNeedle = document.querySelector(".hours");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondNeedle.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360;
  minutesNeedle.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360;
  hourNeedle.style.transform = `rotate(${hoursDegrees}deg)`;

  console.log(
    "now: ",
    now.getHours(),
    ":",
    now.getMinutes(),
    ":",
    now.getSeconds()
  );
}

setInterval(() => {
  setDate();
}, 1000);
