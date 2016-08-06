function Anagram(input){
  var self = this;
  this.word = input;
  this.matches = matches;
};

var matches = function (input){
  var array = [];
  
  if(!Array.isArray(input)){
    // Using for loop as recommended by MDN since arguments is not a proper array
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
    for(var i=0; i<arguments.length; i++){
      array.push(arguments[i]);
    }
  } else {
    array = input;
  }

  return array.filter(function(element){
    return isAnagram(element, this.word)
  },this);
}

function isAnagram(testWord, word){
  if(testWord.toLowerCase()===word.toLowerCase())
    return false;
  if(sortString(testWord.toLowerCase())===sortString(word.toLowerCase()))
    return true;
}

function sortString(string){
  return string.split('').sort().join('');
}

module.exports = function(input){ return new Anagram(input); };