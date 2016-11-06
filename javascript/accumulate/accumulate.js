module.exports = function accumulate(array, func){
  var result = [];
  for(var i = 0; i < array.length; i++) {
    result.push(func(array[i]));
  }
  return result;
}