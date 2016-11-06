var text1 = " bottles of beer on the wall";
var text2 = " bottles of beer.\nTake one down and pass it around, ";
var end = "Go to the store and buy some more"

function verse(number) {
  var result = number + text1 + ", " + number + text2 + (number - 1) + text1 + ".\n";

  result = result.replace(/0/g, "no more");
  if (number === 0) {
    result = result.replace("-1", "99");
    result = result[0].toUpperCase() + result.slice(1);
    result = result.replace("Take one down and pass it around", end);
  }
  if (number === 1) {
    result = result.replace("one", "it");
  }
  result = result.replace(/1 bottles/g, "1 bottle");

  return result;
}

function sing(start, end) {
  var output = "";
  for (var i = start; i >= (end || 0); i--) {
    output += this.verse(i) + "\n";
  }
  return output.slice(0, -1);
}

function Beer() {
  this.verse = verse;
  this.sing = sing;
};

module.exports = new Beer();