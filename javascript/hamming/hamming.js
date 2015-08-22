function compute(string1, string2){
  if(string1.length !== string2.length){
    throw 'DNA strands must be of equal length.';
  } else {
    var counter=0;
    for(var i=0; i<string1.length; i++){
      if(string1[i]!==string2[i]) counter++;
    }
    return counter;
  }
}

module.exports.compute = compute;