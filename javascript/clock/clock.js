// For fun, here a version with just one variable in the clock object
// which makes the exercise closer to the actual date implementation in JS

var MIN_IN_DAY = 24*60;

function Clock(minutes){
  this.total_minutes = minutes;
}

function at(hours,minutes){
  return new Clock(hours*60 + (minutes|| 0));
}


Clock.prototype.plus = function(minutes){
  this.total_minutes += minutes;
  return this;
}

Clock.prototype.minus = function(minutes){
  this.plus(-minutes);
  return this;
}

Clock.prototype.equals = function(clock){
  if(this.toString() === clock.toString()){
    return true;
  } else {
    return false;
  }
}

Clock.prototype.getHours = function(){
  while(this.total_minutes<0){
    this.total_minutes += MIN_IN_DAY;
  }
  return Math.floor((this.total_minutes % MIN_IN_DAY) / 60);
}

Clock.prototype.getMinutes = function(){
  return (this.total_minutes % MIN_IN_DAY) - this.getHours()*60;
}

Clock.prototype.toString = function(){
  var output = ("0"+this.getHours()).slice(-2);
  output += ":" + ("0"+this.getMinutes()).slice(-2);
  return output;
}

module.exports.at = at;