function Bst(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

Bst.prototype.insert = function(data) {
    if(data > this.data) {
        if(this.right === null) {
            this.right = new Bst(data);
        } else {
            this.right.insert(data);
        }
    } else {
        if(this.left === null) {
            this.left = new Bst(data);
        } else {
            this.left.insert(data);
        }
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
