function Bst(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

Bst.prototype.insert = function(data) {
    if(data > this.data) {
        direction = 'right';
    } else {
        direction = 'left';
    }

    if(this[direction] === null) {
        this[direction] = new Bst(data);
    } else {
        this[direction].insert(data);
    }
}

//Had to look this up: https://de.wikipedia.org/wiki/Bin%C3%A4rbaum#Iterative_Implementierung
Bst.prototype.each = function(callback) {
    if(this.left) {
        this.left.each(callback);
    }
    callback(this.data);
    if(this.right) {
        this.right.each(callback);
    }
}

module.exports = Bst;
