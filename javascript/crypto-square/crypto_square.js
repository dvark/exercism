module.exports = Crypto;

function Crypto(text){
  this.plaintext = text;
}

Crypto.prototype.normalizePlaintext = function(){
  return this.plaintext.replace(/\W/g,"").toLowerCase();
}

Crypto.prototype.size = function(){
  var text = this.normalizePlaintext();
  return Math.ceil(Math.sqrt(text.length));
}

Crypto.prototype.plaintextSegments = function(){
  var text = this.normalizePlaintext();
  return segments(text,this.size());
}

Crypto.prototype.ciphertext = function(){
  var result = "";
  var array = this.plaintextSegments();
  for(var i=0; i<array[0].length; i++){
    array.forEach(function(text){
      result += text[i] || "";
    })
  }
  return result;
}

Crypto.prototype.normalizeCiphertext = function(){
  var text = this.ciphertext();
  return segments(text,this.size()).join(" ");
}

function segments(text,size){
  var result = [];
  for(var i=0; i<size; i++){
    var element = text.substr(i*size,size);
    if(element){result.push(element)}
  }
  return result;
}