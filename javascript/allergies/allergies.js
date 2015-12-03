var map = {
  1: "eggs",
  2: "peanuts",
  4: "shellfish",
  8: "strawberries",
  16: "tomatoes",
  32: "chocolate",
  64: "pollen",
  128: "cats"
};

function Allergies(score){
  this.score = score;
}

Allergies.prototype.list = function(){
  var keys = Object.keys(map).reverse();
  var result = [];
  var score = this.score;
  keys.forEach(function(key){
    while(score >= key){
      if(result.indexOf(map[key]) === -1){
        result.unshift(map[key]);
      }
      score-=key;
    }
  });
  return result;
};

Allergies.prototype.allergicTo = function(name){
  if(this.list().indexOf(name) > -1) return true;
};

module.exports = Allergies;
