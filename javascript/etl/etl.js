module.exports = function transform(old){
  var result = {};
  
  Object.keys(old).forEach(function(key){
    var letters = old[key];
    letters.forEach(function(letter){
      result[letter.toLowerCase()] = parseInt(key);
    })
  })

  return result;
}