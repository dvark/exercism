var map = {
  "G":"C",
  "C":"G",
  "T":"A",
  "A":"U"
}

module.exports = function toRna(dna){
  var rna = "";
  for(var i=0;i<dna.length;i++){
    rna += map[dna[i]];
  }
  return rna;
}