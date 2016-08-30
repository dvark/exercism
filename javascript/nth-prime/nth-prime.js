function nth(amount) {
    if(amount<1) throw new Error('Prime is not possible');
    var counter = 0;
    var prime = 0;
    for(var i=2; counter<amount; i++){
        if(isPrime(i)) {
            prime = i;
            counter++;
        }
    }
    return prime;
}

function isPrime(number) {
    for(var i=2; i<=Math.sqrt(number); i++) {
        if(number%i === 0) {
            return false;
        }
    }
    return true;
}

module.exports = {nth};
