var robots = [];

function Robot(){
  this.name = generateName();
}

Robot.prototype.reset = function(){
  this.name = generateName();
}

function generateName(){
  do{
    var name = "";
    name += generateLetters();
    name += generateNumbers();
  } while (robots.indexOf(name)!==-1)
  robots.push(name);
  return name;
}

function generateNumbers(){
  var result = "00"+Math.floor(Math.random()*999);
  return result.slice(-3);
};

function generateLetters(){
  var result = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  result += String.fromCharCode(65 + Math.floor(Math.random() * 26));
  return result;
}

module.exports = Robot;