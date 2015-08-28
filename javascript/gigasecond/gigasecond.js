module.exports = function Gigasecond(input_date){
  this.input_milliseconds = input_date.getTime();
  this.date = date;
}

function date(){
  var result_milliseconds = this.input_milliseconds + (1e9 *1000);
  var date = new Date();
  date.setTime(result_milliseconds);

  // Why do I have to make the result less exact to pass the tests?
  date.setHours(0,0,0,0);
    
  return date;
}

