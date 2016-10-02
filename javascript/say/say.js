var dict = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
}

var scales = {
    1e9: 'billion',
    1e6: 'million',
    1e3: 'thousand',
    1e2: 'hundred'
}

function inEnglish(number) {
    if(number < 0 || number >= 1e12) {
        throw new Error('Number must be between 0 and 999,999,999,999.');
    }
    return dict[number] || deconstruct(number);
}

function deconstruct(number) {
    if (number < 100) {
        return twoDigitsInEnglish(number);
    }
    return biggerNumbersInEnglish(number);
}

function twoDigitsInEnglish(number) {
    var maxTen = Math.floor(number/10);
    return inEnglish(maxTen*10) + '-' + inEnglish(number-maxTen*10);
}

function biggerNumbersInEnglish(number) {
    var result;
    Object.keys(scales).forEach(function(factor){
        if(number >= factor) {
            var maxDivisor = Math.floor(number/factor);
            var remainder = number-maxDivisor*factor;
            var stringEnd = remainder ? ' ' + inEnglish(remainder) : '';
            result = inEnglish(maxDivisor) + ' ' + scales[factor] + stringEnd;
        }
    });
    return result;
}

module.exports = {
    inEnglish
}
