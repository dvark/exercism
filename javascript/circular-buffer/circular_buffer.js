// Refactores version with array methods,
// seen in one of the other solutions

function circularBuffer(size){
  return new Buffer(size);
}

function bufferEmptyException(){};
function bufferFullException(){};

function Buffer(size){
  this.size = size;
  this.buffer = [];
}

Buffer.prototype.read = function(){
  if(this.buffer.length === 0){
    throw new bufferEmptyException();
  } else {
    return this.buffer.shift();
  }
}

Buffer.prototype.write = function(input){
  if (this.buffer.length >= this.size) {
    throw new bufferFullException();
  } else if(input){
    this.buffer.push(input);
  }
}

Buffer.prototype.forceWrite = function(input){
  this.buffer.shift();
  this.buffer.push(input);
}

Buffer.prototype.clear = function(input){
  Buffer.call(this,this.buffer.length);
}

module.exports = {
  circularBuffer: circularBuffer,
  bufferEmptyException: bufferEmptyException,
  bufferFullException: bufferFullException
}