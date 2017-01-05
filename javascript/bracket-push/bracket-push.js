const matches = ['{}', '()', '[]'];

module.exports = function bracket(inputString) {
    let stack = [];
    inputString.split('').forEach((e) => {
        if (matches.includes(stack[0] + e)) {
            stack.shift();
        } else {
            stack.unshift(e);
        }
    })
    return stack.length === 0;
}