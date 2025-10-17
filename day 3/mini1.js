// Stored credentials
const storedUsername = "admin";
const storedPassword = "12345";

// Get user input
const enteredUsername = prompt("Enter your username:");
const enteredPassword = prompt("Enter your password:");

// Check credentials
if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
  console.log(" Login successful!");
} else {
  console.log(" Invalid credentials!");
}
