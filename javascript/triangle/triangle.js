function Triangle(a,b,c){
  this.kind = function(){
    if((a+b<c) || (b+c<a) || (a+c<b) || a+b+c<=0){
      throw "Not a triangle!";
    } else {
      if(a === b && b === c){
        return "equilateral";
      } else if (a === b || a === c || c === b){
        return "isosceles";
      } else{
        return "scalene";
      } 
    }
  }
}

module.exports = Triangle;