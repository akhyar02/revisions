# Data structure

## Array

### Definition

An array is a collection of elements, each identified by an index or key.

### Multidimensional Array

A multidimensional array is an array of arrays. Each element in the main array
can also be an array and the depth can go as many levels as needed.

### Con of Array

The main disadvantage of an array is its fixed size. Once declared, the size of
an array cannot be changed without creating a new array. Also, in arrays,
insertion and deletion operations are costly as the items need to be shifted.

## Object (Hash Table)

### Different Names

Objects, in the context of different programming languages, are also known as
hash tables, maps, dictionaries, associative arrays, or hash maps.

## Stack

### Definition

A stack is a linear data structure which follows a particular order in which the
operations are performed. The order is LIFO (Last In First Out).

### Pattern

The pattern followed by stacks is LIFO, where the last element added is the
first one to be removed.

### Examples

Examples of stack implementations include function call stacks, undo mechanisms
in text editors, and expression evaluation.

### Code Example

```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length == 0) return "Underflow";
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }
}
```

### Big O's of Stack Methods

- Push: O(1)
- Pop: O(1)
- Peek: O(1)
- isEmpty: O(1)

## Queue

### Definition

A queue is a linear data structure that follows a particular order in which the
operations are performed. The order is FIFO (First In First Out).

### Difference from Stack

In a queue, the first element added is the first one to be removed, unlike a
stack where the last element added is the first to be removed.

### Pattern

The pattern followed by queues is FIFO, where the first element added is the
first one to be removed.

### Examples

Examples of queue implementations include waiting lines, breadth-first search in
a graph, and print job scheduling.

### Code Example

```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[0];
  }

  isEmpty() {
    return this.items.length == 0;
  }
}
```

### Big O's of Queue Methods

- Enqueue: O(1)
- Dequeue: O(1)
- Front: O(1)
- isEmpty: O(1)

## Linked List

### Definition

A linked list is a linear data structure in which elements are not stored at
contiguous memory locations. Each element contains a reference (a link) to the
next element in the list.

### Kinds of Linked Lists

The kinds include singly linked lists, doubly linked lists, and circular linked
lists.

### Difference Between Kinds

In a singly linked list, each node points only to the next node. In a doubly
linked list, each node has two links, one to the next node and another to the
previous node. A circular linked list forms a circle and does not end with a
null reference.

### Terms

- Node: An element of the list containing data and reference.
- Head: The first node in a list.
- Tail: The last node in a list (points to null in a singly linked list).

### Difference from Array

Linked lists provide dynamic size and ease in insertion and deletion compared to
arrays. However, they lack direct access to elements by index.

### Outperformance over Array

Linked lists are more efficient in scenarios where frequent addition and
deletion of elements are required.

### Common Methods

Common methods include add, remove, find, and traverse.

### Code Implementation of a Singly Linked List

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  remove(data) {
    let current = this.head;
    let prev = null;

    while (current != null) {
      if (current.data === data) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        return;
      }
      prev = current;
      current = current.next;
    }
  }
}
```

### Big O's of Singly Linked List Methods

- Add: O(1)
- Remove: O(n)
- Find: O(n)
- Traverse: O(n)

### Pro and Con of Doubly Linked List to Singly Linked List

Pro: Easier navigation (both forward and backward). Con: Requires extra memory
for the backward link.

### Big O's of Doubly Linked List

- Add: O(1)
- Remove: O(n)
- Find: O(n)
- Traverse (Forward and Backward): O(n)

## Tree

### Definition

A tree is a hierarchical data structure consisting of nodes, where each node has
a value and a list of references to other nodes (its children).

### Terms in Tree Data Structure

- Node: An individual element containing data.
- Root: The topmost node in a tree.
- Parent: The node which is a direct predecessor of another node.
- Child: The node which is a direct descendant of another node.
- Sibling: Nodes sharing the same parent.
- Leaf: A node with no children.
- Height: The length of the longest path from the root to a leaf.

### Iteration Direction

Tree structures can be traversed in various orders: pre-order, in-order,
post-order, and level-order.

### Difference from Linked List and Array

Trees allow hierarchical relationships between elements, unlike linear
structures like arrays and linked lists. Trees also provide faster access and
modification compared to linked lists and arrays in certain scenarios.

### Connections in Tree

Each node in a tree has a link to its children and optionally to its parent,
forming a hierarchical structure.

### Requirement in a Tree

A tree must be connected and acyclic. This means there should be exactly one
path between any two nodes.

### Common Implementations

Common implementations include binary trees, AVL trees, red-black trees, and
segment trees.

### Common Types of Tree

- Binary Tree
- Binary Search Tree (BST)
- AVL Tree
- Red-Black Tree
- B-Tree

### Explain BST (Binary Search Tree)

A BST is a binary tree where each node has at most two children. It is
structured so that the left child of a node has a value less than its parent
node, and the right child has a value greater.

### Value Ordering in BST

In a BST, for each node, all elements in the left subtree are less than the
node's value, and all elements in the right subtree are greater.

### BST Great For

BSTs are great for maintaining a sorted list of data and providing efficient
searching, insertion, and deletion operations.

### Insert/Delete in BST

- Insert: The value is compared to the root. If smaller, it goes to the left
  subtree; if larger, to the right. This process continues recursively until an
  appropriate position is found.
- Delete: Three cases arise: deleting a leaf node, a node with one child, or a
  node with two children.

### Search in BST

Starting from the root, compare the value to search with the current node. If
it's smaller, go to the left subtree, if larger, to the right. Repeat until the
value is found or the subtree is null.

### Big O's of BST Methods

- Insert: O(log n) ideally, O(n) in the worst case.
- Delete: O(log n) ideally, O(n) in the worst case.
- Search: O(log n) ideally, O(n) in the worst case.

### Achieving Ideal Big O

The ideal big O is achieved in a balanced BST, where the tree's height is kept
minimal.

### Code Example of BST

I will provide a simple implementation of a BST in JavaScript in the next part
of the response.

## Heap

### Definition

A heap is a specialized tree-based data structure that satisfies the heap
property: if P is a parent node of C, then the key of P is either greater than
or equal to (in a max heap) or less than or equal to (in a min heap) the key of
C.

### Types of Heap

- Max Heap: Parent nodes have a value greater than or equal to their children.
- Min Heap: Parent nodes have a value less than or equal to their children.

### Difference Between Types

The main difference is in the ordering of elements: max heaps prioritize the
largest elements at the top, while min heaps prioritize the smallest.

### Relation Between Siblings

Siblings in a heap are not ordered relative to each other.

### Why Heap is Compact

A heap is a complete binary tree; it's fully filled on all levels except
possibly the last, which is filled from left to right. This makes it a compact
structure.

### Examples of Heap Implementations

Heaps are commonly used in priority queues, heap sort, and finding the Kth
largest/smallest element in a dataset.

## Graph

### Definition

A graph is a collection of nodes (or vertices) connected by edges.

### Difference from Trees

Unlike trees, graphs can have cycles, and their relationships are not
necessarily hierarchical.

### Connection Between Nodes

Nodes are connected by edges, which can represent relationships or paths between
them.

### Useful For

Graphs are useful for representing networks like social networks, transportation
networks, and communication networks.

### Types of Graph

- Undirected Graph: Edges have no direction.
- Directed Graph: Edges have a direction.
- Weighted Graph: Edges

have weights assigned to them.

- Unweighted Graph: Edges do not have weights.

### Undirected, Directed, Weighted, Unweighted Graphs

- Undirected Graph: A graph where edges have no orientation. The edge (u, v) is
  identical to (v, u).
- Directed Graph: A graph where every edge is directed from one vertex to
  another.
- Weighted Graph: Each edge has a numerical value.
- Unweighted Graph: Edges do not hold any weight.

### Weighted Graph Great For

Weighted graphs are ideal for representing networks where the paths have
different costs, lengths, or capacities.

### Methods to Represent Graphs

Two common methods are adjacency matrices and adjacency lists.

### Define Adjacency Matrix

An adjacency matrix is a 2D array of size VxV (where V is the number of
vertices), where each element represents the presence or absence of an edge
between the vertex pairs.

### Code Example of Adjacency Matrix

I will provide a JavaScript code example for an adjacency matrix in the next
part of the response.

### Define Adjacency List

An adjacency list represents a graph as an array of lists. Each list describes
the set of neighbors of a vertex in the graph.

### Difference Between Adjacency List and Matrices

Adjacency lists are more space-efficient for sparse graphs, while adjacency
matrices provide faster access for dense graphs and edge weight lookup.

### Binary Search Tree (BST)

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    var newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}
```

### Adjacency Matrix

```javascript
class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjMatrix = new Array(noOfVertices)
      .fill(null)
      .map(() => new Array(noOfVertices).fill(0));
  }

  addEdge(v, w) {
    this.AdjMatrix[v][w] = 1;
    this.AdjMatrix[w][v] = 1; // For undirected graph
  }

  getAdjMatrix() {
    return this.AdjMatrix;
  }
}
```

### Adjacency List

```javascript
class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }

  addVertex(v) {
    this.AdjList.set(v, []);
  }

  addEdge(v, w) {
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v); // For undirected graph
  }

  getAdjList() {
    return this.AdjList;
  }
}
```

### Indexed Collection

1. **Definition**: An indexed collection in programming refers to a data
   structure that stores elements in a sequential manner, allowing access to
   elements based on their index (position). Each element in the collection can
   be efficiently located using its numerical index.

2. **Example**: A common example of an indexed collection is an array. In an
   array, elements are stored in contiguous memory locations, and each element
   can be accessed using its index, which starts from zero.

### JavaScript Array Methods

3. **Common Methods**:

   - `.push()` / `.pop()`: Add/remove elements from the end of the array.
   - `.shift()` / `.unshift()`: Add/remove elements from the beginning of the
     array.
   - `.slice()`: Returns a shallow copy of a portion of an array.
   - `.splice()`: Changes the contents of an array by removing or replacing
     existing elements and/or adding new elements.
   - `.forEach()`: Executes a provided function once for each array element.
   - `.map()`: Creates a new array with the results of calling a provided
     function on every element in the calling array.
   - `.filter()`: Creates a new array with all elements that pass the test
     implemented by the provided function.
   - `.reduce()`: Executes a reducer function on each element of the array,
     resulting in a single output value.

4. **Reversing an Array**: Use the `.reverse()` method, which reverses an array
   in place. The first array element becomes the last, and the last array
   element becomes the first.

### JavaScript Array Specifics

5. **Last Element**: Besides using `arr.length - 1`, you can use
   `Array.prototype.at(-1)` to access the last element. The gotcha is that this
   method might not be supported in older JavaScript environments.

6. **Internal Representation**:

   - JavaScript engines represent arrays using optimized data structures, often
     a mix of actual array and hash table structures.
   - Arrays are generally fast for indexed access and iteration.
   - Optimizations include elements stored in contiguous memory for fast access
     and special handling for arrays with elements of the same type.

7. **Adding Properties**: Yes, it is possible to add properties to an array, as
   arrays in JavaScript are objects. However, these properties do not count
   towards the array's length.

8. **Performance**:

   - `push()` / `pop()`: Generally fast because they operate at the end of the
     array.
   - `shift()` / `unshift()`: Can be slower, especially for large arrays, as
     they require reindexing of the array.

9. **`for...in` Loop**: Yes, it's possible to use `for...in` to iterate over an
   array, but it's generally not recommended.

10. **Why `for...in` is Bad for Arrays**: It iterates over all enumerable
    properties, not just array elements. This can include inherited properties
    and can lead to unexpected results.

11. **Gotcha of the Length Property**: The `length` property of an array is
    writable. Setting it to a smaller value truncates the array, and setting it
    to a larger value creates 'empty' slots.

12. **Truncating Using Length**: Set the `length` property to a new, shorter
    length. For instance, `arr.length = 3` will truncate the array to its first
    three elements.

13. **Constructor Syntax Gotcha**: Using `new Array(number)` creates an array
    with initial `length` set to `number`, but without any elements, leading to
    'empty' slots. This can be confusing and is generally avoided.

14. **Comparing Arrays**: Arrays need to be compared element-wise as comparing
    array references checks if they reference the same object, not if they have
    the same elements.

15. **Gotchas with Primitive Comparison**: JavaScript performs type coercion in
    comparisons, leading to non-intuitive results (e.g., `0 == false` is true).
    When comparing array elements with primitives, be mindful of this coercion.

## Typed Array in JavaScript: An Overview

### Definition and Characteristics

- **Typed Array**: A collection of binary data in JavaScript, offering a way to
  read and write raw binary data in memory buffers.
- **Not a Replacement for Regular Arrays**: Typed arrays serve a different
  purpose than regular arrays, focusing on efficient binary data processing.
- **Efficiency and Flexibility**: Optimized for handling large datasets and
  binary data efficiently. Adjustments like sharing buffers across multiple
  views enhance this.

### Utility and Use Cases

- **Ideal Scenarios**: Useful in web applications dealing with multimedia, WebGL
  for 3D graphics, and other cases where dealing with binary data is essential.
- **Value of Entries**: Values depend on the specific type of typed array, like
  `Int32Array` will have 32-bit signed integers.

### Technical Aspects

- **`isArray` Returns False**: Typed arrays are not considered true arrays in
  JavaScript, hence `Array.isArray()` returns false.
- **Unsupported Methods**: Some Array methods like `push`, `pop`, are not
  supported directly. Typed arrays are fixed-size.

### Buffers and Views

- **Buffer**: Represents a chunk of memory, not directly accessed but through
  views.
- **Types of Buffers**: `ArrayBuffer` is the primary type.
- **Buffer Actions**: Allocation, deallocation, and being a source of data for
  typed arrays.
- **Differences in Buffer Types**: Vary in how they handle memory and the kind
  of data they are suited for.
- **Race Condition Issues**: Can occur in shared buffers, especially in
  concurrent environments.

### Views

- **Types**: `Int8Array`, `Uint8Array`, `Float32Array`, etc.
- **Differences**: Vary in their data representation, like byte size and whether
  they are signed or unsigned.
- **View Definition**: A view is a typed array itself, providing a way to access
  the data in the buffer.
- **Properties**: Fixed-length, direct representation of a buffer, and different
  data types.

### Additional Features and Limitations

- **Additional Methods**: Methods for reading and writing data according to the
  type of view.
- **Fixed Length**: Length of a typed array can't be changed once it's
  established.

### DataView

- **Definition**: A more flexible view for reading and writing different data
  types from a buffer.
- **Usage**: Useful for handling data with complex structures, not restricted by
  a single data type.
- **Binary Representation**: DataView methods allow for reading and writing data
  in binary format.

### Practical Applications and Examples

- **Web APIs**: Used in APIs like WebGL, Web Audio API, and others where binary
  data processing is required.
- **Creating and Using Views with Buffers**: Involves creating a buffer
  (`ArrayBuffer`) and then creating views (`Int32Array`, etc.) on it.
- **Multiple Views**: A single buffer can have multiple views of different
  types, providing flexible data access.
- **Reading Text from Buffer**: Involves using views like `Uint8Array` and
  decoding the text.
- **Complex Data Structures**: Example might include a buffer storing a complex
  data structure, accessed through various views.
- **Converting to Normal Array**: Typed arrays can be converted to regular
  arrays using methods like `Array.from()`.

### Example Code Snippet

```javascript
// Creating a buffer and a view
let buffer = new ArrayBuffer(16); // create a buffer of 16 bytes
let view = new Int32Array(buffer); // view the buffer as 32-bit integers

// Working with the view
view[0] = 123456;
console.log(view); // Int32Array [123456, 0, 0, 0]

// Creating multiple views
let anotherView = new Uint8Array(buffer);
anotherView[0] = 1;
console.log(anotherView); // Uint8Array [1, 192, 228, 1, 0, 0, 0, 0, ...]

// Reading text from a buffer
let textBuffer = new TextEncoder().encode("Hello, world!");
let textView = new Uint8Array(textBuffer);
console.log(new TextDecoder().decode(textView)); // "Hello, world!"

// Converting to a normal array
let normalArray = Array.from(view);
console.log(normalArray); // [123456, 0, 0, 0]
```

## Indexed collection

### Map

- **Definition**: A Map is a collection of keyed data items, where each key is unique.
- **Map vs Object**:
  - **Key Types**: Map keys can be any type, including objects and primitive values; objects only use strings and symbols.
  - **Order**: Maps maintain insertion order, objects do not (except in modern JS engines for string keys).
  - **Size Property**: Maps have a `size` property; objects don't.
  - **Performance**: Maps perform better in scenarios involving frequent additions and removals.
- **Iteration Order**: The order of map iteration is the order of element insertion.
- **Use Cases for Map vs Object**:

  - Use Map for better performance with large sets of key-value pairs and when keys are not strings.
  - Use objects when working with JSON data and for simpler, smaller datasets where key-value pairs are static.

  ```javascript
  const contacts = new Map();
  contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
  contacts.has("Jessie"); // true
  contacts.get("Hilary"); // undefined
  contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
  contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}
  contacts.delete("Raymond"); // false
  contacts.delete("Jessie"); // true
  console.log(contacts.size); // 1

  const myMap = new Map();
  const keyString = "a string";
  const keyObj = {};
  const keyFunc = function () {};
  // setting the values
  myMap.set(keyString, "value associated with 'a string'");
  myMap.set(keyObj, "value associated with keyObj");
  myMap.set(keyFunc, "value associated with keyFunc");
  console.log(myMap.size); // 3
  // getting the values
  console.log(myMap.get(keyString)); // "value associated with 'a string'"
  console.log(myMap.get(keyObj)); // "value associated with keyObj"
  console.log(myMap.get(keyFunc)); // "value associated with keyFunc"
  console.log(myMap.get("a string")); // "value associated with 'a string'", because keyString === 'a string'
  console.log(myMap.get({})); // undefined, because keyObj !== {}
  console.log(myMap.get(function () {})); // undefined, because keyFunc !== function () {}

  for (const [key, value] of myMap) {
    console.log(`${key} = ${value}`);
  }
  // 0 = zero
  // 1 = one

  for (const key of myMap.keys()) {
    console.log(key);
  }
  // 0
  // 1

  for (const value of myMap.values()) {
    console.log(value);
  }
  // zero
  // one

  for (const [key, value] of myMap.entries()) {
    console.log(`${key} = ${value}`);
  }
  // 0 = zero
  // 1 = one

  myMap.forEach((value, key) => {
    console.log(`${key} = ${value}`);
  });
  // 0 = zero
  // 1 = one

  const kvArray = [
    ["key1", "value1"],
    ["key2", "value2"],
  ];

  // Use the regular Map constructor to transform a 2D key-value Array into a map
  const myMap = new Map(kvArray);

  console.log(myMap.get("key1")); // "value1"

  // Use Array.from() to transform a map into a 2D key-value Array
  console.log(Array.from(myMap)); // Will show you exactly the same Array as kvArray

  // A succinct way to do the same, using the spread syntax
  console.log([...myMap]);

  // Or use the keys() or values() iterators, and convert them to an array
  console.log(Array.from(myMap.keys())); // ["key1", "key2"]

  const first = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
  ]);

  const second = new Map([
    [1, "uno"],
    [2, "dos"],
  ]);

  // Merge two maps. The last repeated key wins.
  // Spread syntax essentially converts a Map to an Array
  const merged = new Map([...first, ...second]);

  console.log(merged.get(1)); // uno
  console.log(merged.get(2)); // dos
  console.log(merged.get(3)); // three

  // Merge maps with an array. The last repeated key wins.
  const mergedWithArr = new Map([...first, ...second, [1, "eins"]]);

  console.log(mergedWithArr.get(1)); // eins
  console.log(mergedWithArr.get(2)); // dos
  console.log(mergedWithArr.get(3)); // three
  ```

### WeakMap

- **Definition**: A WeakMap is a collection of key-value pairs with weakly held keys.
- **Garbage Collection**: Keys are weakly referenced, allowing them to be garbage-collected if there's no other reference to the object.
- **API Differences from Map**:
- WeakMap keys must be objects (most primitives are dont have lifetime and not garbage collected).
- No iteration methods (`forEach`, `keys`, `values`, `entries`).
- No `size` property.
- **Use Cases**: Ideal for private data or caching data without preventing garbage collection.
- **Code Implementation Example**:

```javascript
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "data");
// obj can be garbage collected if there are no other references
```

### Set

- **Definition**: A Set is a collection of unique values of any type.
- **Converting Set to Array**: Use `[...set]` or `Array.from(set)`.
- **Converting Array to Set**: Use `new Set(array)`.
- **Differences from Array**:
  - Set elements are unique.
  - No direct access to elements by index.
  - Better performance for add/remove/has operations.

### WeakSet

- **Definition**: A WeakSet is a collection of objects held "weakly".
- **Differences from Set**:
  - Only stores objects.
  - No iteration methods.
  - No `size` property.
  - Elements are weakly held and are eligible for garbage collection.
- **Use Cases**: Useful for storing a collection of objects without affecting their lifecycle.

### Key and Value Equality

- **Map and Set**:
  - Uses `SameValueZero` equality (similar to `===`, but treats `NaN` as equal to `NaN`).
  - Allows for distinct instances of objects.

## JSON

1. **Definition of JSON**:

   - JSON (JavaScript Object Notation) is a lightweight data-interchange format.
   - It is easy for humans to read and write.
   - It is easy for machines to parse and generate.
   - JSON is based on a subset of JavaScript but is language-independent.

2. **Conversion Process**:

   - **JSON to Native Object**: This process is called "parsing". It involves converting JSON text into a native object of the language being used (e.g., JavaScript object).
   - **Native Object to JSON**: This process is known as "stringification". It involves converting a native object into a JSON text format.

3. **Type of JSON**:

   - JSON is a text format.
   - Despite being derived from JavaScript, it is language-independent.
   - JSON uses conventions familiar to programmers of the C-family of languages.

4. **Storing Methods in JSON**:

   - JSON does not store methods or functions.
   - It is purely a data format and only supports data representation.
   - JSON can store data structures like objects and arrays, but not executable code.

5. **Code Example with `fetch`**:

   ```javascript
   // Example of using JSON with a fetch request in JavaScript

   // Define a request object
   let requestData = {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({ key1: "value1", key2: "value2" }),
   };

   // Use fetch to send the request
   fetch("https://example.com/api/data", requestData)
     .then((response) => response.json())
     .then((data) => console.log(data))
     .catch((error) => console.error("Error:", error));
   ```

6. **Sending JSON Across the Web**:
   - To send JSON, it is typically converted into a string using JSON.stringify().
   - This string is then sent over the web using web protocols like HTTP.
   - In an HTTP request, the 'Content-Type' header is often set to 'application/json' to indicate that the body of the request is JSON formatted.
   - On the server side, the received JSON string is parsed back into a native object for processing.
