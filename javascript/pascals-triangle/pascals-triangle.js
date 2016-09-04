function Triangle(amount) {
    this.rows = [[1]];
    this.lastRow = [1];
    for(var i=2; i<=amount; i++) {
        this.generateNextRow();
    }
}

Triangle.prototype.generateNextRow = function() {
    var nextRow = [];
    for(var i=0; i<=this.lastRow.length; i++){
        var left = this.lastRow[i-1] || 0;
        var right = this.lastRow[i] || 0;
        nextRow.push(left + right);
    }
    this.rows.push(nextRow);
    this.lastRow = nextRow;
}

module.exports = Triangle;
