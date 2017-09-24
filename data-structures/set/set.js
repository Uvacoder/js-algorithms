'use strict';

function Set(capacity) {
  this._storage = {};
  this._size = 0;
  this._capacity = capacity || Infinity;
}

Set.prototype.add = function (value) {
  if (value === undefined || this._size === this._capacity) return;
  if(this._storage[value]) return;
  
  this._storage[value] = value;
}
