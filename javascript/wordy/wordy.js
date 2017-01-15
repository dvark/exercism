var regex = /(-?\d+)\s(.+?)\s(-?\d+)(.*)$/;

var map = {
    'plus': (a, b) => a + b,
    'minus': (a, b) => a - b,
    'multiplied by': (a, b) => a * b,
    'divided by': (a, b) => a / b
}

function WordProblem(question) {
    this.question = question;
}

WordProblem.prototype.answer = function () {
    var result = null;
    do {
        var matches = regex.exec(this.question);
        if (matches) {
            result = calculate(matches.slice(1, 4));
            this.question = result + matches[4];
        }
    } while (regex.test(this.question));

    if (result === null) {
        throw new ArgumentError();
    }
    return result
}

function calculate(arguments) {
    var number1 = parseInt(arguments[0]);
    var number2 = parseInt(arguments[2]);
    return map[arguments[1]](number1, number2);
}

function ArgumentError() { }
ArgumentError.prototype = Error.prototype;

module.exports = {
    WordProblem,
    ArgumentError
}