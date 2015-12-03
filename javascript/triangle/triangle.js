function Triangle(a,b,c){
  this.kind = function(){
    if((a+b<c) || (b+c<a) || (a+c<b) || a+b+c<=0)
      throw "Not a triangle!";
    
    if(a === b && b === c) return "equilateral";
    if (a === b || a === c || c === b) return "isosceles";
    return "scalene";
  }
}

module.exports = Triangle;