function Squares(size){
  var numbers =  Array.apply(null, {length: size+1}).map(Number.call, Number);
  this.squareOfSums = square(sum(numbers));
  this.sumOfSquares = sum(numbers.map(square));
  this.difference = this.squareOfSums - this.sumOfSquares;
}

function sum(array){
  return array.reduce(function(a,b) { return a+b; });
}

function square(number){
  return Math.pow(number,2);
}

module.exports = Squares;