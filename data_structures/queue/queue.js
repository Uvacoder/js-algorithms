function Queue (capacity) {
  this._head = 0;
  this._tail = 0;
  this._storage = {};
  this._capacity = capacity || Infinity;
}

// O(1)
Queue.prototype.size = function () {
  return this._tail - this._head;
}

// O(1)
Queue.prototype.enqueue = function (data) {
  if (data === undefined || this.size() === this._capacity) return false;
  this._storage[this._tail++] = data;
  return this.size();
}

// O(1)
Queue.prototype.dequeue = function () {
  if (this.size() === 0) return null;

  const data = this._storage[this._head];
  this._storage[this._head++] = null;
  return data;
}

// O(1)
Queue.prototype.peek = function () {
  return this._storage[this._head];
}


module.exports = Queue;