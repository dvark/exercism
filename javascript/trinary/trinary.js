function Trinary(input){
  this.trinaryArray = input.split('');
}

Trinary.prototype.toDecimal = function(){
  return this.trinaryArray.reduce(function(result, element, index, array){
    var exponent = array.length - 1 - index;
    return result += Math.pow(3,exponent) * parseInt(element);
  },0) || 0;
};

module.exports = Trinary;