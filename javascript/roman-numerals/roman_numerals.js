var map = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M"
}

module.exports = function toRoman(input){
  var number = input;
  var result = "";
  var keys = Object.keys(map).reverse();

  function check_minus(index1, index2){
    var key = parseInt(keys[index1]);
    var nextKey = parseInt(keys[index2]);
    if( index2%2===0 && Math.floor( (number+nextKey)/key ) > 0 ){
      result+=map[nextKey];
      result+=map[key];
      number-=(key-nextKey);
    }
  }

  keys.forEach(function(key,index){
    while(Math.floor(number/key)>0){
      result+=map[key];
      number-=key;
    }

    check_minus(index, index+2);
    check_minus(index, index+1);
  })

  return result;
}