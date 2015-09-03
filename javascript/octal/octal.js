function Octal(input){
  this.string = input;
}

Octal.prototype.toDecimal = function(){
  if(/[^0-7]/.test(this.string)) return 0;
  var result = 0;
  for(var i=0; i<this.string.length; i++){
    var exponent = this.string.length - 1 - i;
    result+= Math.pow(8,exponent)*parseInt(this.string[i]);
  }
  return result;
}

module.exports = Octal;