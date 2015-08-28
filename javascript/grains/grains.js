var BigInt = require('./big_integer');

function Grains(){}

Grains.prototype.square = function(number){
  return BigInt(2).pow(number-1).toString();
}

Grains.prototype.total = function(){
  // Using formula for geometric sums
  return BigInt(2).pow(64).add(-1).toString();
}

module.exports = Grains;