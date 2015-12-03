function Octal(input){
  this.octalArray = input.split('');
}

Octal.prototype.toDecimal = function(){
  if(/[^0-7]/.test(this.octalArray.join(''))) return 0;
  return this.octalArray.reduce(function(result, element, index, array){
    var exponent = array.length - 1 - index;
    return result += Math.pow(8,exponent) * parseInt(element);
  },0) || 0;
};

module.exports = Octal;