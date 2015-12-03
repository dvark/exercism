function transform(old){
  var result = {};
  
  Object.keys(old).forEach(function(key){
    var letters = old[key];
    letters.forEach(function(letter){
      result[letter.toLowerCase()] = parseInt(key);
    })
  })

  return result;
}

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
  var wordAsArray = (input || "").toLowerCase().split('');
  var result = 0;
  return wordAsArray.reduce(function(sum,element){
    return sum += scores[element];
  },0)
}