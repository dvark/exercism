function Anagram(input) {
  this.word = input;
  this.matches = matches;
};

var matches = function (input, ...array) {
  if(!(input instanceof Array)) {
    array.unshift(input);
  } else {
    array = input;
  }

  return array.filter(function (element) {
    return isAnagram(element, this.word)
  }, this);
}

function isAnagram(testWord, word) {
  if (testWord.toLowerCase() === word.toLowerCase()) return false;
  if (sortString(testWord.toLowerCase()) === sortString(word.toLowerCase())) return true;
}

function sortString(string) {
  return string.split('').sort().join('');
}

module.exports = function (input) { return new Anagram(input); };