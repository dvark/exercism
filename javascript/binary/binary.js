function Binary(input){
  this.binaryArray = input.split('');
}

Binary.prototype.toDecimal = function(){
  return this.binaryArray.reduce(function(result, element, index, array){
    var exponent = array.length - 1 - index;
    return result += Math.pow(2,exponent) * parseInt(element);
  },0) || 0;
}

module.exports = Binary;