# Hash table

[Hash tables](https://en.wikipedia.org/wiki/Hash_table)

Implementation:
* Use a hash function to generate the index from a key.
* The class should provide these shared methods:
	- `insert(key, value)` - Takes a key (string), stores it with the associated value, and returns `true`.
	- `retrieve(key)` - Returns the value associated with the key (if the key does not exist, it returns `undefined`).
	- `remove(key)` - Returns a boolean, reflecting whether the key / value pair has been removed.

- To prevent collisions, the hash table is self-resizing. It doubles in size as soon as 75% of the available space has been filled, and shrink to half when space usage falls below 25%.