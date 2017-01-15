// Source for this refactoring: http://exercism.io/submissions/42f1402a40ab4b7687f5266acdc22669

module.exports = Series;

function Series(input){
  this.digits = input.split('').map(function(i){ return parseInt(i)});
}

Series.prototype.digits = function(){
  return this.digits;
}

Series.prototype.slices = function(size){
  if(size > this.digits.length) throw 'Slice size is too big.';
  var result = [];
  for(var i=0; i<=this.digits.length-size; i++){
    result.push(this.digits.slice(i, i+size));
  }
  return result;
}