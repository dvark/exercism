function keep(array, func){
  return filter(array,func);
}

function discard(array, func){
  return filter(array, function(element){ return !func(element); })
}

function filter(array, func){
  return array.reduce(function(result, element){
    if(func(element)){
      result.push(element);
    }
    return result;
  },[]);
}

module.exports = {
  keep: keep,
  discard: discard
}