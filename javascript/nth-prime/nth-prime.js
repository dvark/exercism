function nth(amount) {
    if(amount < 1) throw new Error('Prime is not possible');
    var counter = 0;
    var prime = 0;
    var i = 2;
    while(counter < amount) {
        if(isPrime(i)) {
            prime = i;
            counter++;
        }
        i++;
    }
    return prime;
}

function isPrime(number) {
    var result = true;
    for(var i=2; i<=Math.floor(number/2); i++) {
        if(number%i === 0) {
            result = false;
            break;
        }
    }
    return result;
}

module.exports = {nth};
