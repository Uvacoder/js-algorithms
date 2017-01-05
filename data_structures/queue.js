const assert = require( 'chai' ).assert;

describe('Data Structures', () => {
   describe('-- Queue', () => {
       let queue;
       beforeEach(() => queue = new Queue());

       it('should be initally empty', () => { 
           assert.equal(queue.size(), 0);
       });

       it('should add an element', () => {
           queue.enqueue('first element');
           assert.equal(queue.size(), 1);
       })
       it('should return the last element inserted', () => {
           queue.enqueue({value: 'Object'});
           queue.enqueue('HoHoHO');
           queue.enqueue(30);
           assert.equal(queue.size(), 3);
           assert.equal(queue.dequeue().value, 'Object');
           assert.equal(queue.size(), 2);
       });

       it('should not break if we do a pop with an empty queue', () => {
           queue.dequeue();
           queue.enqueue(3);
           assert.equal(queue.size(), 1);
       });
   });
});



function Queue() {
    this._oldIndex = 0;
    this._newIndex = 0;
    this._storage = {};
}

Queue.prototype.size = function() {
    return this._newIndex - this._oldIndex;
}

Queue.prototype.enqueue = function(data) {
    this._storage[this._newIndex] = data;
    this._newIndex ++;
}

Queue.prototype.dequeue = function() {
    let val = this._storage[this._oldIndex];
    this._oldIndex ++;
    
    return val;
}






