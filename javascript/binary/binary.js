function Binary(input){
  this.string = input;
}

Binary.prototype.toDecimal = function(){
  var result = 0;
  for(var i=0; i<this.string.length; i++){
    var exponent = this.string.length - 1 - i;
    result+= Math.pow(2,exponent)*parseInt(this.string[i]);
  }
  return result || 0;
}

module.exports = Binary;