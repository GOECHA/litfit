// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS file
import "./css/styles.css";

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "./images/turing-logo.png";

console.log("This is the JavaScript entry file - your code begins here.");

// An example of how you tell webpack to use a JS file

import userData from "./data/users";
import hydrationInfo from "./data/hydration";

console.log("User Data:", userData);

import User from "../src/classes/User";
import Hydration from "../src/classes/Hydration";


// ~~~~~~~~~~~~~~~~~~~querySelectors~~~~~~~~~~~~~~~
const testButton = document.querySelector(".test-button");
const userGreeting = document.querySelector(".user-greeting");
const userDashboardContainer = document.querySelector(".user-dashboard-container");

// ~~~~~~~~~~~~~~~~~~~EventListeners~~~~~~~~~~~~~~~
window.addEventListener("load", getAllData);
testButton.addEventListener("click", testBtn);

// ~~~~~~~~~~~~~~~~~~~Globals~~~~~~~~~~~~~~~

let user;
let hydration;

function getAllData() {
  user = new User(userData.users[getRandomIndex(userData.users)]);
  hydration = new Hydration(hydrationInfo.hydrationData);

  userGreeting.innerText = `Welcome, ${user.findUserFirstName(userData.users)}`;
  userDashboardContainer.innerHTML = 
  `<section class="user-dashboard">
  <section class="step-container">
    <h4 class="step-title">Step Info</h4>
    <p class="user-step-goal-title">${user.findUserFirstName(userData.users)}'s, Step Goal!</p>
    <p class="user-step-goal">${user.dailyStepGoal}</p>
    <p class="user-step-goal-title">Total Member's Step Goal!</p>
    <p class="avg-user-step-goal">${user.findAvgStepGoal(userData.users)}</p>


  </section>, 
  <section class="water-container">

  </section>
  </section>`

    // "address"
    // "email"
    // "strideLength"
    // "dailyStepGoal"
}

function testBtn() {
  // const {id, name, address, email, strideLength, dailyStepGoal, friends} = user;
  console.log("hydration(8)", hydration.findAvgFLuidOzs(user.id));
}

function getRandomIndex(array) {
//   console.log("{array}", array);
  return Math.floor(Math.random() * array.length);
}

function hide(element) {
  element.classList.add("hidden");
}

function show(element) {
  element.classList.remove("hidden");
}


