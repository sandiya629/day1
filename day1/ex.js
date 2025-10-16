 // This line prints the message to the console
console.log("Hello, JavaScript!");
// Using var
var name = "Alice";
console.log("var name:", name);

// Using let
let age = 30;
console.log("let age:", age);

// Using const
const country = "Qatar";
console.log("const country:", country);
function testScope() {
  if (true) {
    var x = "I am var";
    let y = "I am let";
    const z = "I am const";
  }

  console.log(x); // ✅ Accessible: var is function-scoped
  //console.log(y); // ❌ Error: let is block-scoped
  //console.log(z); // ❌ Error: const is block-scoped
}

testScope();
// Primitive types
let str = "Hello";
let num = 42;
let bool = true;
let undef;
let nul = null;
let sym = Symbol("id");

// Complex types
let obj = { name: "Alice" };
let arr = [1, 2, 3];
let func = function () { return "Hi"; };

// Type checks
console.log("Type of str:", typeof str);       // string
console.log("Type of num:", typeof num);       // number
console.log("Type of bool:", typeof bool);     // boolean
console.log("Type of undef:", typeof undef);   // undefined
console.log("Type of nul:", typeof nul);       // object (quirk in JS!)
console.log("Type of sym:", typeof sym);       // symbol

console.log("Type of obj:", typeof obj);       // object
console.log("Type of arr:", typeof arr);       // object (arrays are objects)
console.log("Type of func:", typeof func);     // function
// Creating a user profile object
const userProfile = {
  name: "Sara",
  age: 22,
  isStudent: true
};

// Displaying the object
console.log("User Profile:", userProfile);
// Storing favorite colors in an array
let favoriteColors = ["Blue", "Green", "Purple", "Red", "Yellow"];

// Displaying the entire array
console.log("Favorite Colors:", favoriteColors);

// Displaying each color individually
console.log("Individual Colors:");
for (let i = 0; i < favoriteColors.length; i++) {
  console.log(favoriteColors[i]);
}
let str = "100";
let numFromString = Number(str); // or parseInt(str)
console.log("Converted to number:", numFromString); // Output: 100
console.log("Type:", typeof numFromString);         // Output: number




