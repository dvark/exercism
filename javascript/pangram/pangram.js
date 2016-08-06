function Pangram(sentence) {
    this.sentence = sentence;
}

Pangram.prototype.isPangram = function(){
    var letters = this.sentence.toLowerCase().replace(/[^a-z]/g, '').split('');
    var uniqueLetters = [];
    letters.forEach(function(letter){
        if(uniqueLetters.indexOf(letter) < 0){
            uniqueLetters.push(letter);
        }
    });

    if(uniqueLetters.length === 26) {
        return true;
    }
    return false;
}

module.exports = Pangram;