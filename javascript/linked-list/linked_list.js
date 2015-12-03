function Cell(value, prev, next){
  this.value = value;
  this.prev = prev;
  this.next = next;
}

function List(){
  this.counter = 0;
  this.pointer = undefined;
}

List.prototype.push = function(value){
  this.counter++;
  if(this.pointer){
    var cell = new Cell(value, this.pointer, this.pointer.next);
    if(this.pointer.next) this.pointer.next.prev = cell;
    this.pointer.next = cell;
    this.pointer = cell;
  } else {
    this.pointer = new Cell(value, undefined, undefined);
  }
}

List.prototype.pop = function(){
  this.counter--;
  var output = this.pointer;
  if(output){
    if(this.pointer.next) this.pointer.next.prev = this.pointer.prev;
    if(this.pointer.prev) this.pointer.prev.next = this.pointer.next;
    this.pointer = this.pointer.prev;
    return output.value;
  }
}

List.prototype.unshift = function(value){
  this.counter++;
  if(this.pointer){
    var cell = new Cell(value, this.pointer.prev, this.pointer);
    if(this.pointer.prev) this.pointer.prev.next = cell;
    this.pointer.prev = cell;
  } else {
    this.pointer = new Cell(value, undefined, undefined);
  }
}

// List.prototype.shift = function(){
//   this.counter--;
//   var output = this.pointer.prev;
//   if(output){
//     var outputValue = this.pointer.prev.value;
//     if(output.prev) this.pointer.prev.prev.next = this.pointer;
//     this.pointer.prev = this.pointer.prev.prev;
//     return outputValue;
//   }
// }

List.prototype.count = function(){
  return this.counter;
}

// List.prototype.delete = function(value){
//   this.counter--;
//   var current = this.last;
//   do {
//     if(current.value === value) break;
//     current = current.prev;
//   } while(current);
//   if(current.prev) current.prev.next = current.next;
//   if(current.next) current.next.prev = current.prev;
// }

module.exports = List;