module.exports = Triplet;

function Triplet(a,b,c){
  this.numbers = [a,b,c];
}

Triplet.prototype.sum = function(){
  return this.numbers.reduce(function(a,b){ return a+b });
}

Triplet.prototype.product = function(){
  return this.numbers.reduce(function(a,b){ return a*b });
}

Triplet.prototype.isPythagorean = function(){
  return Math.pow(this.numbers[0],2)+Math.pow(this.numbers[1],2)===Math.pow(this.numbers[2],2);
}

Triplet.where = function(options){
  var max = options.maxFactor;
  var min = options.minFactor || 0;
  var sum = options.sum;
  var result = [];
  
  for(var c=min; c<=max; c++){
    for(var b=min; b<=max-1; b++){
      var a = Math.sqrt(Math.pow(c,2)-Math.pow(b,2));
      if((isInt(a) && a>min) && a<b) {
        var newTriplet = new Triplet(a,b,c);
        if((sum && newTriplet.sum() == sum) || !sum) result.push(newTriplet);
      }
    }
  }

  return result;
}

Triplet.prototype.toString = function(){
  return this.numbers[0]+" "+this.numbers[1]+" "+this.numbers[2];
}

function isInt(n) {
   return n % 1 === 0;
}