function keep(array, func){
  var result = [];
  array.forEach(function(element){
    if(func(element)){
      result.push(element);
    }
  })
  return result
}

function discard(array, func){
  var result = [];
  array.forEach(function(element){
    if(!func(element)){
      result.push(element);
    }
  })
  return result
}

module.exports = {
  keep: keep,
  discard: discard
}