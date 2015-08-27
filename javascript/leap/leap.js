module.exports = function isLeapYear(year){
  var result = false;
  if(year%4===0){
    result = true;
  }
  if(year%100===0 && year%400!==0){
    result = false;
  }
  return result;
}