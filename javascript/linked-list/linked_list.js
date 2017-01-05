function Node(value, prev, next) {
  this.value = value;
  this.prev = prev || this;
  this.next = next || this;
}

function List() {
  this.counter = 0;
  this.head = null;
}

List.prototype.push = function (value) {
  if (this.head) {
    var back = this.head.prev;
    var node = new Node(value, back, this.head);
    back.next = node;
    this.head.prev = node;
  } else {
    this.head = new Node(value);
  }
}

List.prototype.pop = function () {
  if (!this.head) return undefined;
  var back = this.head.prev;
  var value = back.value;
  if (back === this.head) {
    this.head = null;
  } else {
    this.head.prev = back.prev;
    this.head.prev.next = this.head;
  }
  return value;
}

List.prototype.shift = function () {
  this.head = this.head.next;
  return this.pop();
}

List.prototype.unshift = function (value) {
  this.push(value);
  this.head = this.head.prev;
}

List.prototype.count = function () {
  if (!this.head) return 0;
  var counter = 1; // Counting this.head
  var nextNode = this.head.next;
  while (nextNode !== this.head) {
    counter++;
    nextNode = nextNode.next
  }
  return counter;
}

List.prototype.delete = function (value) {
  var nextNode = this.head;
  while(nextNode.value !== value){
    nextNode = nextNode.next;
  }
  var head = this.head;
  this.head = nextNode;
  this.shift();
  this.head = head;
}

module.exports = List;