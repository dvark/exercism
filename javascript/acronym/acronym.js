function parse(phrase){
    var words = phrase.replace(/([a-z])([A-Z])/g, replacer).split(/[^\w]/);
    var firstLetters = words.map(function(word){
        return word[0];
    });
    return firstLetters.join('').toUpperCase();
}

function replacer(match, p1, p2) {
    return [p1, p2].join(' ');
}

module.exports = {parse};