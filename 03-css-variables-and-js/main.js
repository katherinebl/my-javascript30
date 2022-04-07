"use strict";

const inputs = document.querySelectorAll(".controls input");

function handleChange() {
  //dataset is a tidy object that contains all the data-attributes that we add to the html elements

  const suffix = this.dataset.sizing || "";

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("change", handleChange));
inputs.forEach((input) => input.addEventListener("mousemove", handleChange));
