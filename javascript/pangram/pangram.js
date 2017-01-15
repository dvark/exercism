// Refactored after looking at http://exercism.io/submissions/80d860c39fa04380b16aca3e667dd703
function Pangram(sentence) {
    this.charSet = new Set(sentence.toLowerCase().replace(/[^a-z]/g, ''));;
}

Pangram.prototype.isPangram = function(){
    return this.charSet.size === 26;
}

module.exports = Pangram;