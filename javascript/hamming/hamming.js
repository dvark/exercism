function compute(string1, string2){
  if(string1.length !== string2.length)
    throw 'DNA strands must be of equal length.';
  
  return string1.split('').reduce(function(counter, element, index){
    if(element!==string2[index])  counter++; 
    return counter;
  },0);
}

module.exports.compute = compute;