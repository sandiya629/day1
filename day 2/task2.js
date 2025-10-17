// Sample user input
let email = "user@example.com";
let phone = "";

// Check if either email or phone is provided
if (email !== "" || phone !== "") {
  console.log("Login allowed: Email or phone number provided.");
} else {
  console.log("Login failed: Please enter your email or phone number.");
}
// Number of items the user wants to buy
let itemsPurchased = 2;

// Check if user qualifies for Buy 1 Get 1 Free
if (itemsPurchased >= 2 && itemsPurchased % 2 === 0) {
  let freeItems = itemsPurchased / 2;
  console.log("Congratulations! You get " + freeItems + " item(s) free.");
} else {
  console.log("Buy 1 Get 1 Free applies only when you buy items in pairs.");
}
// Function to check leap year
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
  } else {
    console.log(year + " is not a leap year.");
  }
}

// Example usage
isLeapYear(2024); // Output: 2024 is a leap year.
isLeapYear(1900); // Output: 1900 is not a leap year.
isLeapYear(2000); // Output: 2000 is a leap year.
