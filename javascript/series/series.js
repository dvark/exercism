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
    var series = [];
    for(var j=0; j<size; j++){
      series.push(this.digits[i+j]);
    }
    result.push(series);
  }
  return result;
}