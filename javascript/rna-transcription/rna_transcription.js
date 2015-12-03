var map = {
  "G":"C",
  "C":"G",
  "T":"A",
  "A":"U"
};

module.exports = function toRna(dna){
  return dna.split('').reduce(function(rna,element){
    return rna += map[element];
  },"");
};