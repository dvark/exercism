var map = ["wink", "double blink", "close your eyes", "jump"];

function Handshake(number){
  if(typeof number != "number") throw 'Handshake must be a number';
  this.decimal = number;
}

Handshake.prototype.commands = function(){
  var binaryArray = this.decimal.toString(2).split("").reverse();
  var result = map.filter(function(e,i){ return binaryArray[i]==="1";});
  if(binaryArray.length > map.length) result.reverse();
  return result;
}

module.exports = Handshake;