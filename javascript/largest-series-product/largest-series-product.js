function Series(inputString) {
    if(isNaN(inputString)) {
        throw new Error('Invalid input.');
    }
    this.numberArray = inputString.split('').map(function(n){return parseInt(n);});
}

Series.prototype.largestProduct = function(digits) {
    if(digits < 0) {
        throw new Error('Invalid input.');
    }
    if(this.numberArray.length < digits) {
        throw new Error('Slice size is too big.');
    }
    if(digits === 0 ) {
        return 1;
    }

    var maxProduct = 0;
    for(var i = 0; i <= this.numberArray.length - digits; i++) {
        var currentProduct = this.numberArray[i];
        for(var j = 1; j < digits; j++) {
            currentProduct *= this.numberArray[i+j];
        }
        if (currentProduct > maxProduct) {
            maxProduct = currentProduct;
        }
    }
    return maxProduct;
}

module.exports = Series;