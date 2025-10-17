// 1. Prompt user for a number
let num = parseInt(prompt("Enter a number to generate its multiplication table:"));

// 2. Loop from 1 to 10
for (let i = 1; i <= 10; i++) {
  // 3. Multiply input number with loop counter
  let result = num * i;

  // 4. Display formatted output
  console.log(`${num} x ${i} = ${result}`);
}
