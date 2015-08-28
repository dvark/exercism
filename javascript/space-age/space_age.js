var EARTH_PERIOD = 31557600;

var map = {
  Earth: 1,
  Mercury: 0.2408467,
  Venus: 0.61519726,
  Mars: 1.8808158,
  Jupiter: 11.862615,
  Saturn: 29.447498,
  Uranus: 84.016846,
  Neptune: 164.79132
}

function SpaceAge(seconds){
  this.seconds = seconds;
}

Object.keys(map).forEach(function(key){
  SpaceAge.prototype["on"+key] = function(){
    return parseFloat((this.seconds / EARTH_PERIOD / map[key]).toFixed(2)); // Really, JS?
  }
})

module.exports = SpaceAge;
