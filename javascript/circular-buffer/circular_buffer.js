function circularBuffer(size){
  return new Buffer(size);
}

function bufferEmptyException(){};
function bufferFullException(){};

function Buffer(size){
  this.newestIndex = -1;
  this.oldestIndex = 0;
  this.buffer = [];
  for(var i=0; i<size; i++){
    this.buffer.push(null);
  }
}

Buffer.prototype.read = function(){
  if(this.newestIndex === -1){
    throw new bufferEmptyException();
  } else {
    var result = this.buffer[this.oldestIndex];
    this.buffer[this.oldestIndex] = null;
    this.update("oldestIndex");
    return result;
  }
}

Buffer.prototype.write = function(input){
  if(input){
    this.update("newestIndex");
    if (this.buffer[this.newestIndex]) {
      throw new bufferFullException();
    } else {
      this.buffer[this.newestIndex] = input;
    }
  }
}

Buffer.prototype.forceWrite = function(input){
  this.buffer[this.oldestIndex] = input;
  this.update("oldestIndex");
}

Buffer.prototype.clear = function(input){
  Buffer.call(this,this.buffer.length);
}

Buffer.prototype.update = function(index){
  this[index] = (this[index]+1)%this.buffer.length;
}

module.exports = {
  circularBuffer: circularBuffer,
  bufferEmptyException: bufferEmptyException,
  bufferFullException: bufferFullException
}