// Define the pizza object constructor
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

// Define the prototype method to calculate the cost of the pizza
Pizza.prototype.calculateCost = function() {
  // Define the cost of each topping
  var toppingCosts = {
    cheese: 1.00,
    pepperoni: 1.50,
    artichoke: 2.00,
    anchovy: 2.50
  };

  // Define the cost of each size
  var sizeCosts = {
    small: 8.00,
    medium: 10.00,
    large: 12.00
  };

  // Calculate the cost of the pizza based on the toppings and size
  var toppingTotal = 0;
  for (var i = 0; i < this.toppings.length; i++) {
    var topping = this.toppings[i];
    if (toppingCosts.hasOwnProperty(topping)) {
      toppingTotal += toppingCosts[topping];
    }
  }

  var sizeTotal = sizeCosts[this.size];

  var totalCost = toppingTotal + sizeTotal;

  return totalCost.toFixed(2); // Round to 2 decimal places
};

// Example usage
var toppings = ["cheese", "pepperoni", "artichoke"];
var size = "large";
var myPizza = new Pizza(toppings, size);
var cost = myPizza.calculateCost();
console.log(cost); // Output: 15.50
















// // Business logic for PizzaParlor

// function PizzaParlor() {
//   this.pizzas = {};
//   this.choice = 0;
// }

// PizzaParlor.prototype.addPizza = function(pizza) {
//   choice.id = this.assignChoice();
//   this.pizzas[choice.id] = this.choice;
// };

// PizzaParlor.prototype.assignChoice = function() {
//   this.choice += 1;
//   return this.choice;
// };


// // Business  logic for pizza 

// function pizza(sauce ,protin, veges, chees) {
//   this.sauce = sauce
//   this.proitn = protin
//   this.veges = veges
//   this.chees = chees  
// }

// function size(pizzaSize);
//   this.pizzaSize = pizzaSize;
//   this.currentId = 0;

//   //UI LOGIC

//   const pizzaParlor = new pizzaParlor();

//   function userChoice(e) {
//     e.preventDefault();
//     const 
//   }























