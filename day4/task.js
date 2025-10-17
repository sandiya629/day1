for (let i = 1; i <= 10; i++) {
  console.log(i);
}
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}
let i = 10;

while (i >= 1) {
  console.log(i);
  i--;
}
let count = 1;

do {
  console.log("Hello World!");
  count++;
} while (count <= 5);
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

for (const fruit of fruits) {
  console.log(fruit);
}
const person = {
  name: "Alice",
  age: 30,
  occupation: "Engineer"
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log("The sum is:", sum);
const numbers = [12, 34, 47, 51, 63, 29];
let found = null;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 50) {
    found = numbers[i];
    break; // Exit the loop once the first match is found
  }
}

if (found !== null) {
  console.log("First number greater than 50 is:", found);
} else {
  console.log("No number greater than 50 found.");
}
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    continue; // Skip this iteration if divisible by 3
  }
  console.log(i);
}
const number = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}
let original = "hello";
let reversed = "";

for (let i = original.length - 1; i >= 0; i--) {
  reversed += original[i];
}

console.log("Reversed string:", reversed);
