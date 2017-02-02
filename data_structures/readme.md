# Data Structures

## Table Content

1. [x] ~~[Queue](./queue)~~
2. [x] ~~[Stack](./stack)~~
3. [ ] [Linked List](./linked\ list)~~
4. [ ] [Set](./set)
5. [ ] [Tree](./tree)
6. [ ] [Hash Table](./hash\ table)

### Basics
For the first three there is no use of arrays, instead use of objects with numeric keys. Not allowed 
to use `Object.keys()` or `for (key in obj) {//etc...}` to loop over the keys.

### Advance
Every data structure in this corresponds to a class in the code (use pseudo-classical approach, or the new [ES6 class definition](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes)).
It is assumed that the `value` property of each element is a string or a number.

## Extra credits

- To prevent collisions, make your hash table self-resizing. It should double in size as soon as 75% of the available space has been filled, and shrink to half when space usage falls below 25%.
- Add functionality to sets, so that:
  - A value can belong to more than one set, and for each value you can say what sets it belongs to.
  - You can find the intersection of multiple sets (a list of the values that they share).
  - In the two tasks above there’s a trade-off between space (memory) and time (computation), can you figure out the possible implementations?
- Read about the following data structures and implement any that attract your interest:
  - [Heap](https://en.wikipedia.org/wiki/Heap_(data_structure))
  - [Binary search tree](https://en.wikipedia.org/wiki/Binary_search_tree)
  - [Graph](https://en.wikipedia.org/wiki/Graph_(abstract_data_type))
  - [Trie](https://en.wikipedia.org/wiki/Trie)
  - [B-tree](https://en.wikipedia.org/wiki/B-tree)
  - [Red-black tree](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree)
- Write tests for the new data structure(s) you have implemented.
