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
