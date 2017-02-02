# Hash table

[Hash tables](https://en.wikipedia.org/wiki/Hash_table)

Implementation:
* Use the provided hash function to convert any key into an index. Try interacting with it a bit first to get a sense of what it does. Keep in mind that your final implementation must handle conflicts.
* The class should provide these shared methods:
	- `insert(key, value)` - Takes a key (string), stores it with the associated value, and returns `true`.
	- `retrieve(key)` - Returns the value associated with the key (if the key does not exist, it returns `undefined`).
	- `remove(key)` - Returns a boolean, reflecting whether the key / value pair has been removed.