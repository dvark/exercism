function Gigasecond(input_date){
  this.input_milliseconds = input_date.getTime();
}

Gigasecond.prototype.date = function(){
  var result_milliseconds = this.input_milliseconds + 1e12;
  var date = new Date(result_milliseconds);

  // Why do I have to make the result less exact to pass the tests?
  date.setHours(0,0,0,0);

  return date;
}

module.exports = Gigasecond;
