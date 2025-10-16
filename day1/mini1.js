// 1️⃣ Store and Manage Order Details
let order = {
  restaurantName: "Spice Garden",
  orderNumber: 101,
  foodItems: ["Butter Chicken", "Garlic Naan", "Mango Lassi"],
  totalPrice: 65.50,
  isDelivered: false
};

// 2️⃣ Display Order Summary
function displayOrderSummary(order) {
  console.log("🧾 Order Summary");
  console.log("Restaurant:", order.restaurantName);
  console.log("Order Number:", order.orderNumber);
  console.log("Food Items:", order.foodItems.join(", "));
  console.log("Total Price: QAR", order.totalPrice.toFixed(2));
  console.log("Delivery Status:", order.isDelivered ? "Delivered" : "Pending");
}

// 3️⃣ Update Order Status
function updateDeliveryStatus(order, status) {
  order.isDelivered = status;
  console.log("✅ Delivery status updated to:", status ? "Delivered" : "Pending");
}

// 4️⃣ Support Multiple Items
function addFoodItem(order, item) {
  order.foodItems.push(item);
  console.log(`➕ Added "${item}" to the order.`);
}

function removeFoodItem(order, item) {
  const index = order.foodItems.indexOf(item);
  if (index !== -1) {
    order.foodItems.splice(index, 1);
    console.log(`➖ Removed "${item}" from the order.`);
  } else {
    console.log(`⚠️ Item "${item}" not found in the order.`);
  }
}

// 🧪 Example Usage
displayOrderSummary(order);
addFoodItem(order, "Paneer Tikka");
removeFoodItem(order, "Garlic Naan");
updateDeliveryStatus(order, true);
displayOrderSummary(order);
