module.exports = Raindrops;

function Raindrops(){}

Raindrops.prototype.convert = function(number){
  var result = "";
  if(number%3===0){ result += "Pling" };
  if(number%5===0){ result += "Plang" };
  if(number%7===0){ result += "Plong" };
  return result || number.toString();
}