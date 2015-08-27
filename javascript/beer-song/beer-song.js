var text = " bottles of beer on the wall";
var text2 = "Take one down and pass it around,"
"8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n";

function verse(number){

}

function Beer(){
  this.verse = verse;
  this.sing = sing;
};

module.exports = new Beer();