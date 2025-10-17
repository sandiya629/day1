let number = 7;

if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}
let score = 85; 

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}
let age = 17; 

if (age >= 18) {
  console.log("Eligible for a driver's license.");
} else {
  console.log("Not eligible for a driver's license.");
}
let isLoggedIn = true;  
let isAdmin = true;     

if (isLoggedIn) {
  if (isAdmin) {
    console.log("Welcome, Admin!");
  } else {
    console.log("Welcome, User!");
  }
} else {
  console.log("Please log in to continue.");
}
let day = "Wednesday"; // You can change this to any day

switch (day) {
  case "Monday":
    console.log("Start of the work week!");
    break;
  case "Tuesday":
    console.log("Keep going, it's only Tuesday.");
    break;
  case "Wednesday":
    console.log("Midweek hustle!");
    break;
  case "Thursday":
    console.log("Almost there!");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  case "Saturday":
    console.log("Enjoy your Saturday!");
    break;
  case "Sunday":
console.log("Rest and recharge.");
    break;
  default:
    console.log("Invalid day.");
}
let password = "mySecret123"; 

if (password.length >= 8) {
  console.log("Password is valid.");
} else {
  console.log("Password must be at least 8 characters long.");
}

