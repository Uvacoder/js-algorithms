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
    this._newestIndex = 0;
    this._storage = {};
}

Queue.prototype.size = function() {
    return this._newestIndex - this._oldIndex;
}

Queue.prototype.enqueue = function(data) {
    this._storage[this._newestIndex] = data;
    this._newestIndex ++;
}

Queue.prototype.dequeue = function() {
    if(this.size() === 0) return;
    
    let data = this._storage[this._oldIndex];
    delete this._storage[this._oldIndex];
    
    this._oldIndex ++;

    return data;
}






