function Queue() {
  this._oldIndex = 0;
  this._newestIndex = 0;
  this._storage = {};
}

Queue.prototype.size = function() {
  return this._newestIndex - this._oldIndex;
}

Queue.prototype.enqueue = function(data) {
  this._storage[this._newestIndex] = data;
  this._newestIndex++;
  return true;
}

Queue.prototype.dequeue = function() {
  if (this.size() === 0) return null;

  let data = this._storage[this._oldIndex];
  this._storage[this._oldIndex] = null;

  this._oldIndex++;

  return data;
}

module.exports = Queue;