// Business logic for PizzaParlor

function PizzaParlor() {
  this.pizzas = {};
  this.choice = 0;
}

PizzaParlor.prototype.addPizza = function(pizza) {
  choice.id = this.assignChoice();
  this.pizzas[choice.id] = this.choice;
};

PizzaParlor.prototype.assignChoice = function() {
  this.choice += 1;
  return this.choice;
};

// Business  logic for pizza 

function pizza(sauce ,protin, veges, chees) {
  this.sauce = sauce
  this.proitn = protin
  this.veges = veges
  this.chees = chees  
}

function size