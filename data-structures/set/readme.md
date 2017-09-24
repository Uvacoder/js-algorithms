## Set

[Sets](https://en.wikipedia.org/wiki/Set_(abstract_data_type))

* No order
* No repetitions
* It is checked existance of a value.

Implementation:
- `add(value)` - Adds an entry to the set and returns `true`.
- `has(value)` - Returns a boolean, reflecting whether the value can be found in the set.
- `remove(value)` - Deletes an entry from the set and returns `true`.
- `all()` - Returns an array with all entries.
- `size()` -  Returns length of the set.
- `union(b)` - Returns a set with all elements that are in A or B
- `intersection(b)` - Returns a set with all elements that are in A and B
- `difference(b)` - Returns a set with all elements that are in A but not in B

- Extra functionality:
  - A value can belong to more than one set, and for each value you can say what sets it belongs to.
  - You can find the intersection of multiple sets (a list of the values that they share).
  - In the two tasks above there’s a trade-off between space (memory) and time (computation), can you figure out the possible implementations?
