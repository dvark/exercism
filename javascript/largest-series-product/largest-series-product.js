function Series(inputString) {
    if(isNaN(inputString)) {
        throw new Error('Invalid input.');
    }
    this.numberArray = inputString.split('').map((n) => parseInt(n));
}

Series.prototype.largestProduct = function(digits) {
    if(digits < 0) {
        throw new Error('Invalid input.');
    }
    if(this.numberArray.length < digits) {
        throw new Error('Slice size is too big.');
    }

    var maxProduct = 0;
    for(var i = 0; i <= this.numberArray.length - digits; i++) {
        var slice = this.numberArray.slice(i, i + digits);
        currentProduct = slice.reduce((product, cur) => {return product * cur;},1)
        if (currentProduct > maxProduct) {
            maxProduct = currentProduct;
        }
    }
    return maxProduct;
}

module.exports = Series;