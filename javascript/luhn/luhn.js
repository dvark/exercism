function Luhn(number) {
  this.checkDigit = number % 10;
  this.addends = getAddends(number);
  this.checksum = this.addends.reduce((a, b) => a + b);
  this.valid = this.checksum % 10 === 0
}

function getAddends(number) {
  var stringArray = number.toString().split("").reverse();
  return stringArray.map(function (element, index) {
    var num = parseInt(element);
    if (index % 2 === 1) num *= 2;
    return num < 10 ? num : num - 9;
  }).reverse();
}

Luhn.create = function (number) {
  for (var i = 0; i < 10; i++) {
    var newNumber = number * 10 + i;
    var testLuhn = new Luhn(newNumber);
    if (testLuhn.valid) return newNumber;
  }
}

module.exports = Luhn;