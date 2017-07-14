function Node(val) {
  this.value = val;
  this.next = null;
}

function LinkedList() {
  this.top = null;
  this.size = 0;
}


LinkedList.prototype.print = function() {
  let string = '';
  let node = this.top;
  while (node) {
    string += node.next ? node.value + ' -> ' : node.value;
    node = node.next;
  }
  return string;
}

LinkedList.prototype.addToHead = function(value) {
  let node = new Node(value);
  node.next = this.top;
  this.top = node;
  this.size++;
};

LinkedList.prototype.addToTail = function(value) {
  let findTail = (node, value) => {
    if (node.next)
      return findTail(node.next, value);
    newNode = new Node(value);
    node.next = newNode;
    return;
  };
  this.size === 0 ? this.addToHead(value) : findTail(this.top, value);
  this.size++;
};

LinkedList.prototype.removeHead = function() {
  let node = this.top;
  if (node === null)
    return null;
  this.top = node.next;
  return node.value;
};

LinkedList.prototype.contains = function(value) {
  let node = this.top;
  while (node) {
    if (node.value === value)
      return true;
    node = node.next;
  }
  return false;
};

// LinkedList.prototype.removeTail = function() {
//   if (value === undefined) return null;

//   let value = this.value;

// };

module.exports = LinkedList;