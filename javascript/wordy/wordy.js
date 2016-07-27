var regex = /(-?\d+)\s(.+?)\s(-?\d+)(.*)$/;

function WordProblem(question){
    this.question = question;
}

WordProblem.prototype.answer = function(){
    var result = null;
    do {
        var matches = regex.exec(this.question);
        if(matches) {
            result = calculate(matches.slice(1,4));
            this.question = result + matches[4];
        }
    } while (regex.test(this.question));

    if(result === null) {
        throw new ArgumentError();
    }
    return result
}

function calculate(arguments) {
    var number1 = parseInt(arguments[0]);
    var number2 = parseInt(arguments[2]);
    var result;
    switch (arguments[1]) {
        case 'plus':
            result = number1 + number2;
            break;
        case 'minus':
            result = number1 - number2;
            break;
        case 'multiplied by':
            result = number1 * number2;
            break;
        case 'divided by':
            result = number1 / number2;
            break;
    }
    return result;
}

function ArgumentError(){}
ArgumentError.prototype = Error.prototype;

module.exports = {
    WordProblem,
    ArgumentError
}