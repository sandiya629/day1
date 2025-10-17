// 1. Prompt user to enter a positive number
let num = parseInt(prompt("Enter a positive number:"));
let sum = 0;

// 2–3. Use while loop to extract and sum digits
while (num > 0) {
  let digit = num % 10;     // Extract last digit
  sum += digit;             // Add digit to sum
  num = Math.floor(num / 10); // Remove last digit
}

// 4. Display the result
console.log("Sum of digits:", sum);
