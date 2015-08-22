function Anagram(input){
  var self = this;
  this.word = input;
  this.matches = matches;
};

var matches = function (input){
  var result = [];
  var array = [];

  if(!Array.isArray(input)){
    for(var i=0; i<arguments.length; i++){
      array.push(arguments[i]);
    } 
  } else {
    array = input;
  }

  array.forEach(function(element){
    if(isAnagram.call(this, element)) result.push(element);
  },this);
  return result;
}

function isAnagram(testWord){
  if(testWord.toLowerCase()===this.word.toLowerCase()){
    return false;
  } else if(sortString(testWord.toLowerCase())===sortString(this.word.toLowerCase())){
    return true;
  } else {
    return false;
  }
}

function sortString(string){
  return string.split('').sort().join('');
}

module.exports = function(input){ return new Anagram(input); };