var BasicMatrix = require('../matrix/matrix.js');

function Matrix(input) {
    BasicMatrix.call(this, input);
    this.saddlePoints = this.getSaddlePoints();
}

Matrix.prototype = Object.create(BasicMatrix.prototype);

Matrix.prototype.getSaddlePoints = function(){
    console.log(this.rows)
    var saddlePoints = [];
    for(var i=0; i<this.rows.length; i++){
        for(var j=0; j<this.rows[i].length; j++){
            if(Math.max(...this.rows[i]) <= this.rows[i][j] && Math.min(...this.columns[j]) >= this.rows[i][j]){
                saddlePoints.push([i,j]);
            }
        }
    }
    return saddlePoints;
}

module.exports = Matrix;
