var allergens = ["eggs", "peanuts", "shellfish", "strawberries", "tomatoes", "chocolate", "pollen", "cats"];

function Allergies(score){
  this.score = score;
}

Allergies.prototype.list = function(){
  return allergens.filter((allergen, index) => this.score & 1 << index);
};

Allergies.prototype.allergicTo = function(name){
  return this.list().indexOf(name) > -1;
};

module.exports = Allergies;
