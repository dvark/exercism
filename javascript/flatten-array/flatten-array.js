function Flattener(){}

Flattener.prototype.flatten = function(input){
    var string = JSON.stringify(input);
    string = string.replace(/\[|\]/g,'').replace(/null,?/g, '');
    return JSON.parse('[' + string + ']');
}

module.exports = Flattener;