module.exports = new PrimeFactors();

function PrimeFactors(){}

PrimeFactors.prototype.for = function(number){
  var factors = [];
  for(var i=2; i<=number; i++){
    while(number%i===0){
      number/=i;
      factors.push(i);
    }
  }
 
  return factors;
}