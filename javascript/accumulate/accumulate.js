module.exports = function accumulate(array, func){
  var result = [];
  array.forEach(function(element){
    result.push(func(element));
  })
  return result;
}