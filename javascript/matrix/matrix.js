function Matrix(inputString){
    this.rows = inputString.split('\n').map(formatRowString);
    this.columns = getColumns(this.rows);
}

function formatRowString(rowString){
    return rowString.split(' ').map((string) => { return parseInt(string);});
}

function getColumns(matrix) {
    return matrix[0].map((el, i) => matrix.map((row, j) => matrix[j][i]))
}

module.exports = Matrix;
