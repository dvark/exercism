module.exports = PhoneNumber;

function PhoneNumber(input){
  this.input = input;
}

PhoneNumber.prototype.number = function(){
  var result = this.input.replace(/\D/g,"");
  if(result.length === 11 && result[0] === "1"){
    result = result.slice(1);
  }
  if(result.length === 10) {
    return result;    
  } else {
    return "0000000000";
  }
}

PhoneNumber.prototype.areaCode = function (){
  return this.number().slice(0,3);
}

PhoneNumber.prototype.toString = function(){
  var number = this.number();
  return "("+ this.areaCode() +") "+number.slice(3,6)+"-"+number.slice(6,10);
}