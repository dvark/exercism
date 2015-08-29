var transform = require("../etl/etl");

var scores_old = {
  1: [ "A", "E", "I", "O", "U", "L", "N", "R", "S", "T" ],
  2: [ "D", "G" ],
  3: [ "B", "C", "M", "P" ],
  4: [ "F", "H", "V", "W", "Y" ],
  5: [ "K" ],
  8: [ "J", "X" ],
  10: [ "Q", "Z" ]
};

var scores = transform(scores_old);

module.exports = function score(input){
  var word = (input || "").toLowerCase();
  var result = 0;
  for(var i=0; i<word.length; i++){
    result+= scores[word[i]];
  }
  return result;
}