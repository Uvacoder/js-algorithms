# Queue(FIFO) interface

[Queues](https://en.wikipedia.org/wiki/Queue_(abstract_data_type))

## Notes
* A queue can have a capacity.
* Delete operation with objects is inefficient.

## API

- `enqueue(element)` - Adds a string to the back of the queue and returns the new size.
- `dequeue()` - Removes and returns the string at the front of the queue. If the queue is empty it should return `null`.
- `size()` - Returns the number of items in the queue.
- `peak()` - Returns the oldest element added to the collection.
-----------
- `contain(input)` - Returns true if the `input` is contained in the queue.
- `until(input)` - Returns the number of dequeue operations before the `input` is reached.
