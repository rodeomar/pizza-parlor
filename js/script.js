//Business logic

function pizza(size,toppings) {
  this.size = size
  this.toppings =toppings;
}
pizza.prototype.cost = function() {
  let basePrice = 10;
  let sizePrice = 0;
  let toppingsPrice = 0;

    // Calculate size price
  
    switch(this.size) {
    case 'small':
      sizePrice = 2;
      break;
    case 'medium':
      sizePrice = 4;
      break;
    case 'large':
      sizePrice = 6;
      break;
  }

    // Calculate toppings price

    if (this.toppings.meat) {
      toppingsPrice += 2;
    }
    if (this.toppings.veggies) {
      toppingsPrice += 1;
    }
    if (this.toppings.sauce) {
      toppingsPrice += 0.5;
    }
    if (this.toppings.drinks) {
      toppingsPrice += 2;
    }
}


// UI Logic 

const form = document.getElementById("order-form");
const sizeSelect = document.getElementById("size");
const meatSelect = document.getElementById("meat");
const veggiesSelect = document.getElementById("veggies");
const sauceSelect = document.getElementById("sauce");
const cheeseSelect = document.getElementById("cheese");
const fullNameInput = document.getElementById("full-name");
const emailInput = document.getElementById("email");
const addressInput = document.getElementById("address");
const creditCardInput = document.getElementById("credit-card");
const totalCostInput = document.getElementById("total-cost");
const orderButton = document.getElementById("order-button");
// const veggiesSelect = document.getElementById

orderButton.addEventListener("click", function(event) {
  event.preventDefault();
  const toppings = {
    meat: meatSelect.checked,
    veggies: veggiesSelect.checked,
    sauce: sauceSelect.checked,
    cheese: cheeseSelect.checked
