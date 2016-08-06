module.exports = Luhn;

function Luhn(number){
  this.number = number;
  this.checkDigit = number%10;
  this.addends = getAddends(number);
  this.checksum = getAddends(number).reduce(function(a,b){ return a+b });
  this.valid = this.checksum%10===0
}

function getAddends(number){
  var stringArray = number.toString().split("");
  var counter = stringArray.length%2;
  return result = stringArray.map(function(element){
    var num = parseInt(element);
    if (counter%2===0) num*=2;
    counter++;
    if (num < 10) return num;
    return num-9;
  })
}

Luhn.create = function(number){
  for(var i=0; i<10; i++){
    var newNumber = number*10+i;
    var testLuhn = new Luhn(newNumber);
    if (testLuhn.valid) return newNumber;
  }
}