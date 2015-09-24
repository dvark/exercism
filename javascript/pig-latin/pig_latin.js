module.exports = {
  translate: function(sentence){
    var result = "";
    sentence.split(" ").forEach(function(word){
      result+=translate_word(word)+" ";
    })
    return result.trim();
  }
}

function translate_word(word){
  var array = word.split("");
  while(true){
    var match = word.match(/^qu|^[^aouie]/);
    if(!match) break;
    word = word.substr(match[0].length);
    word += match[0];
  }
  return word+"ay";
}