var dict = {
    ' _ | ||_|   ': '0',
    '     |  |   ': '1',
    ' _  _||_    ': '2',
    ' _  _| _|   ': '3',
    '   |_|  |   ': '4',
    ' _ |_  _|   ': '5',
    ' _ |_ |_|   ': '6',
    ' _   |  |   ': '7',
    ' _ |_||_|   ': '8',
    ' _ |_| _|   ': '9'
}

function convert(inputString){
    var matrix = inputString.split('\n').map((e) => e.split(''));
    return getNumbers(matrix);
}

function getNumbers(matrix){
    var result = '';
    for(var i=0; i<matrix.length; i+=4) {
        for(var j=0; j<matrix[0].length; j+=3){
            var numberString = extract(matrix, [i, j]);
            result += dict[numberString] || '?';
        }
        result += ',';
    }
    return result.slice(0, -1);
}

function extract(matrix, start) {
    var result = '';
    for(var i=start[0]; i<start[0]+4; i++){
        for(var j=start[1]; j<start[1]+3; j++){
            result += matrix[i][j];
        }
    }
    return result;
}

module.exports = { convert };