// Define the prices of the three products
let product1Price = 29.99;
let product2Price = 15.50;
let product3Price = 42.75;

// Calculate the total price
let totalPrice = product1Price + product2Price + product3Price;

// Display the result
console.log("The total price of the three products is: $" + totalPrice.toFixed(2));
// Function to check if a number is even or odd
function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    console.log(number + " is even.");
  } else {
    console.log(number + " is odd.");
  }
}

// Example usage
checkEvenOrOdd(7);  // Output: 7 is odd.
checkEvenOrOdd(12); // Output: 12 is even.
// Start from 1
let number = 1;

// Loop until number reaches 10
while (number <= 10) {
  console.log(number);
  number++; // Increment using ++
}
// Function to check voting eligibility
function checkVotingEligibility(age) {
  if (age >= 18) {
    console.log("You are eligible to vote.");
  } else {
    console.log("You are not eligible to vote yet.");
  }
}

// Example usage
checkVotingEligibility (6)
// Define two strings
let string1 = "hello";
let string2 = "hello";
let string3 = new String("hello");

// Compare using ==
console.log("string1 == string2:", string1 == string2);     // true
console.log("string1 == string3:", string1 == string3);     // true

// Compare using ===
console.log("string1 === string2:", string1 === string2);   // true
console.log("string1 === string3:", string1 === string3);   // false
// Sample user input
let email = "user@example.com";
let password = "securePass123";

// Check if both email and password are valid (not empty)
if (email !== "" && password !== "") {
  console.log("Login successful: Email and password are valid.");
} else {
  console.log("Login failed: Please enter both email and password.");
}
// Initial wallet balance
let walletBalance = 100.00;

// Add funds using +=
walletBalance += 50.00; // Adds 50 to the wallet

// Subtract funds using -=
walletBalance -= 20.00; // Deducts 20 from the wallet

// Multiply balance using *= (e.g., bonus multiplier)
walletBalance *= 1.10; // Adds a 10% bonus

// Divide balance using /= (e.g., split with a friend)
walletBalance /= 2; // Splits the balance in half

// Display final balance
console.log("Updated wallet balance: $" + walletBalance.toFixed(2));
// Product stock quantity
let stock = 5;

// Use ternary operator to check availability
let message = stock > 0 ? "Product is in stock." : "Product is out of stock.";

// Display the result
console.log(message);
// Define two numbers
let number1 = 25;
let number2 = 10;

// Compare using greater than
if (number1 > number2) {
  console.log(number1 + " is greater than " + number2);
} else {
  console.log(number1 + " is not greater than " + number2);
}
// Cart total before discount
let cartTotal = 65.00;

// Discount threshold and rate
let discountThreshold = 50.00;
let discountRate = 0.10; // 10% discount

// Apply discount if cart total exceeds threshold
if (cartTotal > discountThreshold) {
  let discountAmount = cartTotal * discountRate;
  let finalTotal = cartTotal - discountAmount;
  console.log("Discount applied: $" + discountAmount.toFixed(2));
  console.log("Final total after discount: $" + finalTotal.toFixed(2));
} else {
  console.log("No discount applied. Total: $" + cartTotal.toFixed(2));
}

