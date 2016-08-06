function BinarySearch(array){
    if(correctOrder(array)) {
        this.array = array;
    }
}

BinarySearch.prototype.indexOf = function(number) {
    var result = this.findIndex(number);
    if(!this.array.length) {
        return -1;
    }
    return result;
}

BinarySearch.prototype.findIndex = function(number) {
    var midIndex = Math.floor((this.array.length-1) / 2);
    if(this.array[midIndex] < number) {
        this.array = this.array.slice(midIndex + 1);
        return this.findIndex(number) + midIndex + 1;
    }
    if(this.array[midIndex] > number) {
        this.array = this.array.slice(0, midIndex + 1);
        return this.findIndex(number);
    }
    return midIndex;
}

function correctOrder(array){
    return !array.some(function(value, index){
        if(index === 0) {
            return false;
        }
        if(array[index-1] > value) {
            return true;
        }
    });
}

module.exports = BinarySearch;
