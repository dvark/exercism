module.exports = Sieve;

function Sieve(max){
  this.max = max;
  this.primes = primes(this.max);
}

function primes(max){
  var result = [];
  for(var i=2; i<=max; i++){
    result.push(i);
  }

  for(var i=0; i<=result.length; i++){
    if(isPrime(result[i])){
      var j = 2;
      while(result[i]*j<=max){
        var index = result.indexOf(result[i]*j);
        if(index !== -1) result.splice(index,1);
        j++;
      }
    }
  }
  return result;
}

function isPrime(number){
  if(number === 2) return true;
  for(var i=2; i<Math.sqrt(number); i++){
    if(number%i===0) return false;
  }
  return true;
}