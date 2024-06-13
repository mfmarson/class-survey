"use strict";

const topicsArray = ["HTML", "CSS", "JavaScript"];
const rankingsArray = ["Awesome", "Great", "Good", "Okay", "Poor", "Unranked"];

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM READY");

  const submitButton = document.getElementById("clickSubmit");
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    displayAnswer();

    console.log("Hello");
  });
  function displayAnswer(event) {
    const surveyForm = document.getElementById(surveyForm);
  }
});
