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

    //get value of selected rankingsValue
    //get value of selected topicsValue

    //what do I need to get to show I am ___ at ___ on page add constants with . values and new names
  }
});

//const variable to button -- click/eventlistener event prevent -- call back function to run what we want it to pull (aka name())
//to get the info: .value (. are nails) so we are grabbing value attached to new variable
//selectedOptions what the user selects [0]
//at the very end append.child(what you want to add to the mainform)
//

// need to get value of selection from drop down

// surveyForm
//ranking will be seen by user
// rankingsValue--stored
// topicsValue
// clickSubmit

//want to return the selection of rankings value and topics value

//pull value from topics array and rankings array to create a new array
