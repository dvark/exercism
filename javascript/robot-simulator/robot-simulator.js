var directions = [ 'north', 'east', 'south', 'west'];
var advancements = [[0, 1], [1, 0], [0, -1], [-1, 0]];
var instructionMap = { R: 'turnRight', L: 'turnLeft', A:'advance' };

function Robot() {};

Object.defineProperty(Robot.prototype, 'bearing', {
    get: function () { return directions[this.bearingIndex]; }
});

Robot.prototype.orient = function(direction){
    if(!directions.includes(direction)){
        throw 'Invalid Robot Bearing';
    }
    this.bearingIndex = directions.indexOf(direction);
}

Robot.prototype.turnRight = function(){
    this.bearingIndex = (this.bearingIndex + 1) % 4;
}

Robot.prototype.turnLeft = function(){
    this.bearingIndex = (this.bearingIndex + 3) % 4;
}

Robot.prototype.at = function(x,y) {
    this.coordinates = [x,y];
}

Robot.prototype.advance = function(){
    var advancement = advancements[this.bearingIndex];
    this.coordinates[0] += advancement[0];
    this.coordinates[1] += advancement[1];
}

Robot.prototype.instructions = function(string){
    return string.split('').map((letter) => instructionMap[letter]);
}

Robot.prototype.place = function(startObject){
    this.at(startObject.x, startObject.y);
    this.orient(startObject.direction);
}

Robot.prototype.evaluate = function(string){
    this.instructions(string).forEach((instruction) => this[instruction]());
}

module.exports = Robot;
