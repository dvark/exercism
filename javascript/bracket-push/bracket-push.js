const map = {
    '}': '{',
    ']': '[',
    ')': '('
}

const opening = Object.keys(map).map((key) => map[key]);

module.exports = function bracket(inputString) {
    const input = inputString.split('');
    let trackingArray = [];

    for(const i of input) {
        if(!opening.includes(i) && lastElement(trackingArray) === map[i]) {
            trackingArray.pop();
        } else {
            trackingArray.push(i);
        }
    }

    if(!trackingArray.length) {
        return true;
    }
    return false;
}

function lastElement(array) {
    return array[array.length - 1];
}