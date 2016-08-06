module.exports = function words(input){
  var result = Object.create(null);
  inputArray = input.trim().split(/\s+/);
  inputArray.forEach(function(word){
    result[word] ? result[word] += 1 : result[word] = 1;
  })
  return result;
}