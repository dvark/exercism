function Palindromes(options){
    this.max = options.maxFactor;
    this.min = options.minFactor || 1;
    this.palindromes = {};
}

Palindromes.prototype.generate = function(){
    for(var i=this.min; i<=this.max; i++){
        for(var j=i; j<=this.max; j++){
            if(isPalindrome(i*j)){
                this.savePalindrom(i,j);
            }
        }
    }
}

Palindromes.prototype.savePalindrom = function(i,j){
    if(!this.palindromes[i*j]) {
        this.palindromes[i*j] = [[i,j]];
    } else {
        this.palindromes[i*j].push([i,j]);
    }
}

Palindromes.prototype.getPalindrome = function(type){
    var result = {};
    var valueArray = Object.keys(this.palindromes).map((string)=>parseInt(string));
    result.value = Math[type](...valueArray);
    result.factors = this.palindromes[result.value];
    return result;
}

Palindromes.prototype.largest = function(){
    return this.getPalindrome('max');
}

Palindromes.prototype.smallest = function(){
    return this.getPalindrome('min');
}

function isPalindrome(number){
    var string = number.toString()
    return string === string.reverse();
}

String.prototype.reverse = function(){
    return this.split('').reverse().join('');
}

module.exports = Palindromes;
