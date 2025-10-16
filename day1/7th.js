let str = "100";
let numFromString = Number(str); // or parseInt(str)
console.log("Converted to number:", numFromString); // Output: 100
console.log("Type:", typeof numFromString);         // Output: number
function isEven(number) {
  return number % 2 === 0;
}

// Example usage:
console.log(isEven(4));  // true
console.log(isEven(7));  // false
// Variable explicitly assigned null
let valueNull = null;

// Variable declared but not assigned
let valueUndefined;

console.log("valueNull:", valueNull);               // Output: null
console.log("Type of valueNull:", typeof valueNull); // Output: object (quirk in JS)

console.log("valueUndefined:", valueUndefined);               // Output: undefined
console.log("Type of valueUndefined:", typeof valueUndefined); // Output: undefined
// Create two symbols with the same description
const id1 = Symbol("userID");
const id2 = Symbol("userID");

// Display the symbols
console.log("Symbol 1:", id1);
console.log("Symbol 2:", id2);

// Compare the symbols
console.log("Are symbols equal?", id1 === id2); // Output: false
// Storing a large number using BigInt
const bigNumber = 1234567890123456789012345678901234567890n;

// Display the value
console.log("BigInt value:", bigNumber);

// Check and display the type
console.log("Type of bigNumber:", typeof bigNumber); // Output: bigint
function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Example usage:
console.log(checkEvenOrOdd(10)); // Output: "Even"
console.log(checkEvenOrOdd(7));  // Output: "Odd"
