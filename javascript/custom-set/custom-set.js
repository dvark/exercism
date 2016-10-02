function CustomSet(input) {
    this._array = [];
    if(input) {
        input.forEach((element) => {
            this.add(element);
        });
    }
}

CustomSet.prototype.empty = function(){
    return !this._array.length;
}

CustomSet.prototype.toList = function(){
    return this._array;
}

CustomSet.prototype.contains = function(number){
    return this._array.indexOf(number) >= 0;
}

CustomSet.prototype.subset = function(set){
    return set.toList().every((element) => {
        return this.contains(element);
    });
}

CustomSet.prototype.disjoint = function(set) {
    return !set.toList().find((element) => {
        return this.contains(element);
    });
}

CustomSet.prototype.eql = function(set){
    return this.subset(set) && this._array.length === set.toList().length;
}

CustomSet.prototype.add = function(number){
    if(!this.contains(number)) {
        this._array.push(number);
    }
    return this;
}

CustomSet.prototype.intersection = function(set){
    var result = [];
    set.toList().forEach((element) => {
        if(this.contains(element)){
            result.push(element);
        }
    });
    return new CustomSet(result);
}

CustomSet.prototype.difference = function(set){
    var result = [];
    this._array.forEach((element) => {
        if(!set.contains(element)){
            result.push(element);
        }
    });
    return new CustomSet(result);
}

CustomSet.prototype.union = function(set){
    var result = new CustomSet(this._array);
    set.toList().forEach((element) => {
        result.add(element);
    });
    return result;
}

CustomSet.prototype.delete = function(number) {
    var index = this._array.indexOf(number);
    if (index >= 0) this._array.splice(index, 1);
    return this;
}

CustomSet.prototype.clear = function() {
    this._array = [];
    return this;
}

CustomSet.prototype.size = function(){
    return this._array.length;
}

module.exports = CustomSet;
