module.exports = Cipher;

function Cipher(key){
  if(/[a-z]+/.test(key)){
    this.key = key || "bbbbbbbbbb";
  } else {
    throw "Bad key"
  }
}

Cipher.prototype.encode = function(word){
  return coding("+", word, this.key)
}

Cipher.prototype.decode = function(word){
  return coding("-", word, this.key)
}

function normalize(number){
  if(number > 122){ number = 97 + (number-97)%26}
    if(number < 97){ number = 97 + (number+97)%26}
      return number;
  }

function coding(shiftOperator, word, key){
  var result = "";
  for(var i=0; i<word.length; i++){
    var shift = key[i].charCodeAt() - 97
    if(shiftOperator==="-") shift*=-1;
    result += String.fromCharCode(normalize(word[i].charCodeAt()+shift));
  }
  return result;
} 

