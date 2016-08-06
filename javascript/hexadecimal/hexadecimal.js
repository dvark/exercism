function Hexadecimal(input){
    this.input = input;
}

Hexadecimal.prototype.toDecimal = function(){
    if(/[^0-9a-f]/.test(this.input)) {
        return 0;
    }

    return this.input.split('').reduce(function(result, element, index, array){
        var exponent = array.length - 1 - index;
        var factor = isNaN(element) ? parseLetter(element) : parseInt(element);
        return result += Math.pow(16, exponent) * factor;
    },0);
};

function parseLetter(letter) {
    return letter.charCodeAt() - 87;
}

module.exports = Hexadecimal;