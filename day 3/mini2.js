// Prompt user to enter a traffic light color
let color = prompt("Enter a traffic light color (red, yellow, green):");

// Convert input to lowercase to handle case-insensitive input
color = color.toLowerCase();

// Check the color and display the corresponding message
if (color === "red") {
  console.log("Stop!");
} else if (color === "yellow") {
  console.log("Slow down!");
} else if (color === "green") {
  console.log("Go!");
} else {
  console.log("Invalid color!");
}
