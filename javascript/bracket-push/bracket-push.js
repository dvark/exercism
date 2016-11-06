const matches = ['{}', '()', '[]'];

module.exports = function bracket(inputString) {
    let stack = [];
    inputString.split('').forEach((e) => {
        if(matches.includes(last(stack) + e)) {
            stack.pop();
        } else {
            stack.push(e);
        }
    })
    return stack.length === 0;
}

function last(array) {
    return array[array.length - 1];
}