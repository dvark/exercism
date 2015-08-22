var start = "I know an old lady who swallowed a ";
var text = {
  fly: "I don't know why she swallowed the fly. Perhaps she'll die.\n",
  spider: "It wriggled and jiggled and tickled inside her.\n",
  bird: "How absurd to swallow a bird!\n",
  cat: "Imagine that, to swallow a cat!\n",
  dog: "What a hog, to swallow a dog!\n",
  goat: "Just opened her throat and swallowed a goat!\n",
  cow: "I don't know how she swallowed a cow!\n",
  horse: "She's dead, of course!\n"
}

var keys = Object.keys(text);

function Song(){
  this.verse = verse;
  this.verses = verses;
};

function verses(start,end){
  var output = "";
  for(var i=start; i<=end; i++){
    output += this.verse(i) + "\n";
  }
  return output;
}

function verse(number){
  var latestAnimal = keys[number-1];
  var output = start + latestAnimal + ".\n";

  if(number!==8){
    output += text[latestAnimal];
    for(var i = number-1; i>0; i--){
      output += middle_part(i);
    }
    if (number > 1) output += text[keys[0]];
  } else {
    output += text[keys[number-1]];
  }
  return output;
}

function middle_part(number){
  if(number==2){
    return "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n";
  } else {
    return "She swallowed the "+ keys[number] +" to catch the " + keys[number-1] + ".\n";
  }
}

module.exports = new Song();