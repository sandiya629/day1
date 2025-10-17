let age = 65; 

let message = (age >= 60) ? "Eligible for senior citizen discount." : "Not eligible for senior citizen discount.";

console.log(message);
let isLoggedIn = true;
let hasSession = true;

if (isLoggedIn && hasSession) {
  console.log("User is logged in and session is active.");
} else {
  console.log("User is not fully authenticated.");
}
let username = ""; 
let email = "user@example.com"; 

if (username || email) {
  console.log("Username or email is provided.");
} else {
  console.log("Please provide a username or email.");
}
let year = new Date().getFullYear();

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}


