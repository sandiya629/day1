let str = "Hello World";
let count = 0;
let vowels = "aeiouAEIOU";

for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    count++;
  }
}

console.log("Number of vowels:", count);
const numbers = [12, 45, 67, 23, 89, 34];
let largest = numbers[0]; // Start with the first element

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

console.log("The largest number is:", largest);
