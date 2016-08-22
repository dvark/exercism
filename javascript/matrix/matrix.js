function Matrix(inputString){
    this.rows = inputString.split('\n').map(formatRowString);
    this.columns = getColumns(this.rows);
}

function formatRowString(rowString){
    return rowString.split(' ').map((string) => { return parseInt(string);});
}

function getColumns(matrix) {
    var result = [];
    for(var i=0; i<matrix[0].length; i++) {
        var column = [];
        for(var j=0; j<matrix.length; j++) {
            column.push(matrix[j][i]);
        }
        result.push(column);
    }
    return result;
}

module.exports = Matrix;
