function Isogram(word) {
    this.word = word.toLowerCase();
}

Isogram.prototype.isIsogram = function() {
    return !/([A-zÀ-ÿ]).*\1/.test(this.word);
}

module.exports = Isogram;