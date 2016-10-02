var SumOfMultiples = function(factors) {
    return {
        to: function(limit){
            var sum = 0;
            for(var i=1; i<limit; i++){
                if(factors.find((factor) => i%factor === 0)){
                    sum += i;
                }
            }
            return sum;
        }
    }
}

module.exports = SumOfMultiples;
