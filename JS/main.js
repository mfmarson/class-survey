"use strict";

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM READY");

  const form = document.getElementById("surveyForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("Hello");
  });
});

// need to get value of selection from drop down

// surveyForm
//ranking will be seen by user
// rankingsValue--stored
// topicsValue
// clickSubmit

//want to return the selection of rankings value and topics value

//pull value from topics array and rankings array to create a new array

// const topicsArray = ["HTML", "CSS", "JavaScript"];
// const rankingsArray = ["Awesome", "Great", "Good", "Okay", "Poor", "Unranked"];

// const topicsValue = document.getElementById("topicsValue");

// const rankingsValue = document.getElementById("ratingsValue");
