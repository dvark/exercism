function Queens(input){
    if (input) {
        if (input.white[0] === input.black[0] && input.white[1] === input.black[1]) {
            throw 'Queens cannot share the same space';
        }
        this.white = input.white;
        this.black = input.black;
    } else {
        this.white = [0, 3];
        this.black = [7, 3];
    }
}

Queens.prototype.toString = function(){
    var board = getEmptyBoard();
    board[this.white[0]][this.white[1]] = 'W';
    board[this.black[0]][this.black[1]] = 'B';
    board = board.map(function(line){
        return line.join(' ');
    });
    return board.join('\n') + '\n';
}

Queens.prototype.canAttack = function(){
    // row or column
    if(this.white[0] === this.black[0] || this.white[1] === this.black[1]) return true;
    // diagonal
    if(Math.abs(this.white[0]-this.black[0]) === Math.abs(this.white[1]-this.black[1])) return true;
    return false;
}

function getEmptyBoard(){
    var array = [];
    for(var i = 0; i < 8; i++) {
        array.push(Array(8).fill('_'));
    }
    return array;
}

module.exports = Queens;
