# Data types

## Primitives

- Primitives are the simplest forms of data in JavaScript.
- They are like atoms, representing basic values.
- Examples of primitive data types: undefined, null, number, string, boolean.
- Primitives do not have properties or methods attached to them.
- Primitives are immutable, meaning their values cannot be changed directly.

## Objects

- Objects are composed of primitive values and are more complex than primitives.
- They are like molecules, made up of primitives.
- Objects can have properties and methods attached to them.
- Anything in JavaScript that is not a primitive is an object.
- Objects are sometimes referred to as references, and the object type is known
  as the reference type.
- Objects can be modified by adding, updating, or deleting properties.

## Number

- Numbers are fundamental in computing and are used extensively in various
  fields, including arithmetic calculations, data science, 3D modeling, and
  artificial intelligence.
- In programming, numbers are typically categorized into two groups: integers
  and floats (floating-point numbers).

### Integers

- An integer is a whole number without a decimal point.
- Examples of integers include 0, 1, 100, -30, -50, -100.
- Integers are sometimes referred to as fixed-point numbers.

### Floats (Floating-Point Numbers)

- A float, or floating-point number, is a number with a decimal point.
- Examples of floats include 0.1, 3.878, -4589.4, etc.

### JavaScript's Number Type

- Unlike some programming languages, such as Python, JavaScript does not
  distinguish between integers and floats.
- In JavaScript, there is only one type for numbers, which is simply called
  'number.'
- JavaScript represents all numbers using the 'number' data type, regardless of
  whether they are integers or floats.

### Number Literals

- Number literals are exact representations of numeric values in code.
- In JavaScript, you can use number literals to represent numbers directly in
  your code.

### Examples of Number Operations in JavaScript

- JavaScript allows you to perform various operations with numbers, such as
  addition, subtraction, multiplication, and division.
- The result of these operations depends on the types of numbers involved.

## String

### Strings in JavaScript

- A string is a sequence of textual characters.
- Strings in JavaScript can be defined using single quotes (''), double quotes
  (""), or backticks (``) for template literals.
- Each character in a string has an index, starting from 0.
- The length of a string is the total number of characters it contains.

### Accessing Characters and Length

- To access a character in a string, use square brackets with the index inside,
  e.g., `str[0]` for the first character.
- To find the length of a string, use the `length` property, e.g., `str.length`.

### Autoboxing in JavaScript

- In JavaScript, primitive types, including strings, do not have properties or
  methods attached to them.
- Autoboxing is the process where JavaScript automatically wraps a primitive
  value into an object of the corresponding wrapper class when you try to access
  a property or method on it.
- Wrapper classes for primitives in JavaScript include `String` for strings,
  `Number` for numbers, `Boolean` for booleans, `BigInt` for big integers, and
  `Symbol` for symbols.
- Autoboxing allows you to use properties and methods on primitives as if they
  were objects.
- Autoboxing is implementation-dependent, and the actual mechanism varies among
  JavaScript engines.

#### Example of Autoboxing

- When you access a property on a string primitive, like `str.length`,
  JavaScript autoboxes the primitive into a `String` object temporarily to
  access the property.
- Behind the scenes, it creates a wrapper object, accesses the property, and
  then may delete the temporary object.

Understanding autoboxing is essential in JavaScript as it enables you to work
with primitive values as if they had properties and methods, but it's important
to remember that the actual implementation details may vary across different
JavaScript engines.

## Boolean

- Booleans are values that represent either true or false.
- They are essential in conditional programming to make decisions based on
  evaluation outcomes.
- The term "Boolean" is named after George Boole, a British mathematician known
  as the "father of symbolic logic" and for his contributions to Boolean algebra
  and logic.
- In JavaScript, Booleans are represented using the literal values true and
  false.
- You can create Boolean variables in JavaScript, like var proceed = true; and
  var stopNow = false;. Booleans play a crucial role in controlling the flow of
  a JavaScript program through conditional statements and expressions.

## Object - Array

- An array is an ordered collection of data.
- It's like a sequence of values or a list of items.
- Elements of an array are formally called items or elements.
- Each element has an index in the array.
- The total number of elements is the array's length.

### Array Elements

- Array elements can be of any data type, including numbers, strings, Booleans,
  or even arrays.
- Elements in an array do not have to be of the same data type.

### Creating Arrays

- Arrays can be created using square brackets ([]), where elements are separated
  by commas.
- This is called an array literal.
- Arrays can also be created using the `Array()` constructor.

### Accessing Elements

- Accessing an element in an array is done using square brackets and the
  element's index.
- Arrays are zero-indexed, so the first element is at index 0.
- Accessing an out-of-range index returns undefined.
- The length property is used to get the total number of elements in an array.

### Sorting Arrays

- Arrays can be sorted using the `sort()` method.
- By default, `sort()` sorts elements alphabetically (as strings).
- Sorting is performed in-place (modifies the original array).
- Sorting numbers correctly requires passing a sorting function as an argument
  to `sort()`.

### Sorting Numbers

- To sort numbers correctly using `sort()`, provide a sorting function as an
  argument.
- The sorting function subtracts one number from another (a - b) for ascending
  order.
- This ensures correct numerical sorting.

## Functions

- Functions are used as arguments for sorting and perform specific operations.
- How functions work and their importance in sorting is explored in more detail
  in the chapter on JavaScript Arrays — Sorting.

Certainly! Here are some key points to remember about functions in JavaScript
based on the provided information:

### Definition

- A function in JavaScript defines a piece of code that is executed when the
  function is called.
- Functions are used to group together code that can be executed later by
  invoking the function.

### Syntax (named function)

- The `function` keyword is used to create a named function.
- The syntax for creating a named function is as follows:
  ```javascript
  function functionName(parameterList) {
    // Function body with statements
  }
  ```

### Invocation

- To call (or invoke) a function, you simply write its name followed by a pair
  of parentheses.
- Invoking a function executes the code defined inside the function.

### Parameter and argument

- Functions can accept additional data called arguments.
- These arguments are defined within the parentheses when calling the function.
- The names used to refer to these arguments inside the function are called
  parameters.
- Parameters are defined within the parentheses when defining the function.

### Return

- The `return` keyword is used to return a value from a function.
- The value to be returned is specified immediately after the `return` keyword
  within the function's body.
- Returning a value allows you to use the result of the function in various
  ways, such as assigning it to a variable or passing it as an argument to
  another function.

## Objects

### Defintion

- An object in JavaScript is a composite data type that consists of properties
  and methods.
- Properties define the characteristics or attributes of an object, while
  methods define its behavior or actions.

### Real world analogy

- Think of objects in JavaScript like real-world objects. For example, a toaster
  oven has properties (model number, warranty period, etc.) and methods (turning
  it on/off, setting a timer).

### Syntax

- Objects in JavaScript are typically created using object literals, enclosed
  within curly braces `{}`.
- Object properties and values are defined as key-value pairs, separated by
  colons (`:`) and separated by commas (`,`).
- Example:
  ```javascript
  var obj = { x: 10, y: 20 };
  ```

### Plain object

- A "plain object" is a specific type of object in JavaScript, known for its
  simplicity.
- It is used when you want to store multiple pieces of information under a
  single name.
- Example:
  ```javascript
  var url = {
    protocol: "https",
    domain: "www.codeguage.com",
    path: "/",
  };
  ```

### Accessing property

- You can access object properties using either dot notation (`object.property`)
  or bracket notation (`object['property']`).
- Example:
  ```javascript
  url.protocol; // 'https'
  url["protocol"]; // 'https'
  ```

### Adding property

- You can add new properties to an existing object using either dot notation or
  bracket notation, along with the assignment operator `=`.
- Example:
  ```javascript
  url.queryString = null;
  url["hash"] = null;
  ```

### Methods

- Methods are special properties of an object that have function values.
- You can define methods on objects just like properties, but with function
  values.
- Example:
  ```javascript
  var url = {
    protocol: "https",
    domain: "www.codeguage.com",
    path: "/",
    getURL: function () {
      return url.protocol + "://" + url.domain + url.path;
    },
  };
  ```

### Invoking methods

- To call object methods, use parentheses `()` after the method name.
- Example:
  ```javascript
  url.getURL(); // 'https://www.codeguage.com/'
  ```

### OOP

- JavaScript is an object-oriented programming language, and objects are
  fundamental to its design.
- Objects allow you to model and encapsulate data and behavior in a structured
  way.

## Typeof operator

### Defintion

- The `typeof` operator in JavaScript is used to determine the data type of a
  given expression and returns it as a string value.

### Primitive types

- For primitive data types (e.g., numbers, strings, booleans, undefined),
  `typeof` returns a string containing the name of the type.
- Example:
  - `typeof 10; // 'number'`
  - `typeof "Hello"; // 'string'`
  - `typeof true; // 'boolean'`
  - `typeof undefined; // 'undefined'`

### Null Behaviour

- When used with the `null` value, `typeof` returns 'object'. This is a
  historical bug in JavaScript and is not intuitive.
- Example: `typeof null; // 'object'`

### Arrays

- When used with arrays, `typeof` returns 'object', not 'array'.
- Example: `typeof [1, 2, 3]; // 'object'`
- Arrays are objects in JavaScript, and `typeof` treats them as such.

### Objects

- For pure object data types, such as empty objects or objects with properties,
  `typeof` returns 'object'.
- Example:
  - `typeof {}; // 'object'`
  - `typeof {x: 10}; // 'object'`

### Functions

- When used with functions, `typeof` returns 'function'. Functions are treated
  as a special type of object in JavaScript because they are callable objects.
- Example: `typeof function() {}; // 'function'`

### Exceptions

- Functions are an exception to the general rule that objects are labeled as
  'object' by `typeof`.
- Functions are distinguished from other objects due to their ability to be
  called, and `typeof` reflects this by returning 'function' for them.

In summary, `typeof` can be used to determine the data type of expressions in
JavaScript, but it may produce unexpected results for certain values like `null`
and functions. Understanding these behaviors is important for effective
JavaScript programming.

## Object - deeper dive

### Syntax

- Using the "object constructor" syntax:
  ```javascript
  let user = new Object();
  ```
- Using the "object literal" syntax (more commonly used):
  ```javascript
  let user = {};
  ```

### Object literal

The object literal syntax `{}` is a concise way to create objects in JavaScript.
It's widely used and preferred over the "object constructor" syntax.

### Property and key

Objects consist of properties, and each property is identified by a key (a
string). You can think of an object as a cabinet with labeled files, where the
keys are the labels, and the values are the contents of the files.

### Adding property

- New properties can be added to an object at any time using either notation.
- Example: `user.isAdmin = true;`

### Removing property

- Properties can be removed using the `delete` operator.
- Example: `delete user.age;`

### Multiword property

- Property names with spaces or special characters must be enclosed in quotes
  within square brackets.
- Example: `"likes birds": true`

### Square bracket notation

- Square brackets allow you to use any string as a property name, making it
  suitable for dynamic or computed property names.
- Example: `user["likes birds"] = true;`

### Dynamic property access

- You can use variables to access properties dynamically with square bracket
  notation.
- Example: `user[key] = true;`

### Dot notation limits

- Dot notation requires property names to be valid variable identifiers (no
  spaces, special characters, or starting with digits).
- Dot notation cannot be used with dynamically generated property names.
- Example: `user.key` will look for a property named "key" instead of using the
  value of the `key` variable.

### Computed property

- Computed properties in JavaScript objects allow you to use square brackets to
  dynamically set property names.
- This is especially useful when you want the property name to be determined by
  a variable or a more complex expression.
- For example, you can create an object with a property name determined by a
  user's input, like `bag[fruit] = 5;`.

### Property-value shorthand

- Property value shorthand is a feature in JavaScript that allows you to create
  object properties with the same name as existing variables without explicitly
  specifying the property name.
- Instead of `name: name`, you can simply write `name`.
- This shorthand makes object creation shorter and more concise.

### Property name limitations

- There are no limitations on property names in JavaScript objects, unlike
  variable names, which cannot use reserved words.
- You can use any string or symbol as a property name, and other types will be
  automatically converted to strings.
- For example, you can have object properties with names like `for`, `let`, or
  `return`.
- Numbers used as property names are automatically converted to strings, so `0`
  and `"0"` refer to the same property.
- However, there's a special property named `__proto__` that cannot be set to a
  non-object value.

### in operator

- The "in" operator in JavaScript is used to check whether a specific property
  exists within an object.
- It returns `true` if the property exists in the object, and `false` if it
  doesn't.
- You can use the "in" operator with a quoted string for the property name or
  with a variable containing the property name to be tested.

Example:

```javascript
let user = { name: "John", age: 30 };
console.log("age" in user); // true, user.age exists
console.log("blabla" in user); // false, user.blabla doesn't exist
```

- The "in" operator is particularly useful when a property exists in an object
  but stores the value `undefined`.

Example:

```javascript
let obj = { test: undefined };
console.log(obj.test); // undefined, but property exists
console.log("test" in obj); // true, the property does exist
```

### for...in loop

- The "for..in" loop is used to iterate over all the keys (property names) of an
  object.
- It is different from the regular "for" loop and is specifically designed for
  working with objects.
- The loop syntax is `for (key in object)` where `key` is a variable that will
  represent each property name during each iteration.

Example:

```javascript
let user = { name: "John", age: 30, isAdmin: true };

for (let key in user) {
  // key represents the property name
  console.log(key); // name, age, isAdmin
  // user[key] represents the value associated with the property
  console.log(user[key]); // John, 30, true
}
```

- You can use any variable name instead of `key` to represent the property name,
  such as `prop` or any other valid variable name.

### Order of properties

- Objects in JavaScript are ordered, but the order is not always intuitive.

- The order of properties in an object depends on whether they are considered
  "integer properties" or non-integer properties.

- Integer properties are properties with keys that can be converted to and from
  integers without a change. For example, "49" is an integer property because it
  remains the same when converted to an integer and back.

- When looping over an object's properties with a `for...in` loop, integer
  properties are sorted in ascending order, while non-integer properties are
  listed in the order they were created.

- To control the order of properties in an object, you can use non-integer
  property keys. Adding a "+" sign before property keys, like "+49" instead of
  "49," makes them non-integer, and they will be listed in the creation order
  when looping over the object.

- In the example provided, by using non-integer property keys for phone codes,
  you can ensure that they appear in the desired order when looping over the
  object.

- Here are some examples of integer and non-integer properties:

  - Integer properties: "49" (can be converted to 49 and back), "-123," etc.
  - Non-integer properties: "abc," "name," "surname," etc.

- When you add new properties to an object, they will be listed in the order
  they were added, regardless of whether they are integer or non-integer
  properties.

- Understanding the order of properties in an object is important when working
  with JavaScript, especially in scenarios where the order of property iteration
  matters.

## Prototypes

### Problem with Methods in Constructors

- **Illustrative Example**: The `Point` function creating a new `setTo` method
  for each instance.
- **Issues Highlighted**:
  - Redundancy: Each `Point` instance has a unique `setTo` method, leading to
    unnecessary duplication.
  - Global Scope Pollution: Previous solutions polluted the global scope.
- **Solution**: Avoid defining instance methods in the constructor's body; use
  prototypes instead.

### Understanding Prototypes

- **JavaScript as a Prototype-based OOP Language**: Unlike class-based languages
  (e.g., C++, Java), JavaScript utilizes prototype-based inheritance.
- **Prototype Definition**: The prototype of an object `o` is the object from
  which `o` inherits properties.
- **Inheritance Mechanism**:
  - Properties defined on a prototype object `p` are accessible on an object `o`
    that inherits from `p`.
  - Example: If `a` is the prototype of `b`, properties of `a` are accessible in
    `b`.
- **Inheritance Mechanism**: Objects in JavaScript know their prototypes through
  the [[Prototype]] attribute.
- **Defined in ECMAScript Spec**: Section 10.1 specifies every object has a
  [[Prototype]] attribute, holding a reference to its prototype.
- **Role of [[Prototype]]**: It determines from which object the properties are
  inherited.

### Illustrative Examples

- **Object `b` with Prototype `a`**:
  - `var a = { x: 10, y: 20 };`
  - `var b = { p: 100, q: 200 };`
  - Internally, `b` has a [[Prototype]] attribute pointing to `a`.
- **Array Example**:
  - `var arr = [10, -5, 60];`
  - Internally, `arr` has a [[Prototype]] attribute pointing to
    `Array.prototype`.
- **Object Example**:
  - `var obj = { x: 0, y: 0 };`
  - Internally, `obj` has a [[Prototype]] attribute pointing to
    `Object.prototype`.

### Special Case: Null Prototype

- **Objects with Null Prototype**: An object can have its prototype set to
  `null`, indicating no inheritance.
- **Example**: `Object.prototype` is the only predefined object in JavaScript
  with a null prototype.

### Implementation Note

- **[[Prototype]] as a Spec Feature**: The [[Prototype]] notation is conceptual,
  used for explanation. Actual JavaScript engines may implement it differently
  but conform to the behavior defined in the spec.

### The Object.create() Method

- **Introduction**: `Object.create()` was introduced in ECMAScript 5 to create
  new objects with a specified prototype.
- **Syntax**: `Object.create(prototype[, propsObj])`.
- **Usage**:
  - Creates a new object with the given prototype.
  - The second argument (`propsObj`) is optional and specifies initial
    properties using property descriptors.

### Building Prototype Relationships

- **Example with Objects `a` and `b`**:
  - `var a = { x: 10, y: 20 };`
  - To set `a` as the prototype of `b`:
    - Create `b` using `Object.create(a)`.
    - Add properties to `b` after creation.

### Using Object.create() with null

- **Creating Objects with No Prototype**: `Object.create(null)` creates an
  object with a null prototype.
- **Result**: Such objects do not inherit any properties.
- **Example**:
  - `var o = Object.create(null);`
  - `o.x = 10; o.y = 20;`
  - `console.log(o); // Outputs {x: 10, y: 20}`

### Concept of Prototype Chains

- **Definition**: A prototype chain is a list of prototypes, where each
  prototype is the prototype of the previous one, ending with `null`.
- **Analogy**: Similar to genetic inheritance, where traits are passed down
  through generations.

### Example of Prototype Chain

- **Objects `a`, `b`, `c`**:
  - `var a = { x: 10, y: 20 };`
  - `var b = Object.create(a);`
  - `var c = Object.create(b);`
- **Prototype Chain for `c`**:
  - `b → a → Object.prototype → null`
- **Significance**: Prototype chains are crucial for property resolution in
  JavaScript.

### Property Retrieval Mechanism

- **Process**: When accessing a property, JavaScript looks for it on the object
  first, then on its prototype, and so on up the prototype chain.
- **Stopping Condition**: Stops when the property is found or `null` prototype
  is reached.
- **Property Shadowing**: Properties on an object can overshadow those on its
  prototype.

#### Examples

- Objects `o1`, `o2`, `o3` with inheritance `o3` → `o2` → `o1`.
- Accessing properties on `o3` will first check `o3`, then `o2`, then `o1`.

### Property Assignment Mechanism

- **Surprising Cases**: Understanding JavaScript's property assignment behavior
  is crucial to avoid unexpected bugs.
- **Rules**:
  - If a property is non-writable or a setter-less accessor on the object or its
    prototype, assignment is ignored or throws an error in strict mode.
  - If writable, or a setter exists, it behaves as expected.

#### Demonstrative Examples

- **Object `o` with Non-writable Property**:
  - Defining a non-writable property on `o` will prevent modification, even in
    derived objects.
- **Inherited Properties**:
  - If a property is inherited and non-writable, assignment on derived objects
    is ignored or errors in strict mode.
  - If it has a setter, the setter is invoked.

### Summary of Property Assignment Cases

- **Table Overview**:
  - Own or Inherited | Data or Accessor | Writable? | Has Setter? | Result
  - Own | Data | Yes | — | Set property to value.
  - Own | Data | No | — | Ignore or error.
  - Own | Accessor | — | Yes | Invoke setter.
  - Own | Accessor | — | No | Ignore or error.
  - Inherited | Data | Yes | — | Create and set own property.
  - Inherited | Data | No | — | Ignore or error.
  - Inherited | Accessor | — | Yes | Invoke inherited setter.
  - Inherited | Accessor | — | No | Ignore or error.
  - Nonexistent | — | — | — | Create and set own data property.

### Distinction Between Own and Inherited Properties

- **Own Properties**: Defined directly on the object.
- **Inherited Properties**: Defined on any object in the prototype chain, but
  not on the object itself.

### Utilities for Distinguishing Properties

- **hasOwnProperty() Method**: Used to check if a property is an object's own
  property.
  - Syntax: `obj.hasOwnProperty(propName)`.
  - Returns `true` if `propName` is an own property of `obj`, otherwise `false`.

#### Example with hasOwnProperty()

- **Initial Setup**:
  - `var a = { x: 0, y: 0 };`
  - Checking `a.hasOwnProperty('x')` and `a.hasOwnProperty('y')` both return
    `true`.
  - `a.hasOwnProperty('z')` returns `false` as `z` is not an own property of
    `a`.
- **Introducing Prototype**:
  - `var proto = { z: 0 };`
  - `var a = Object.create(proto); a.x = 0; a.y = 0;`
  - `a.hasOwnProperty('z')` returns `false`, but `proto.hasOwnProperty('z')`
    returns `true`.

#### Test Case

- **Given Code**:
  - `var o = {};`
  - `Object.defineProperty(o, 'x', { value: 0 });`
- **Question**: What does `o.hasOwnProperty('x')` return?
- **Answer**: `true`, since `x` is defined as an own property of `o`.

### Prototypes and the in Operator

- **Function of in Operator**: Checks if a property is an own or inherited
  property of an object.
- **Mechanism**: It traverses the entire prototype chain to find the property.

#### Example with in Operator

- **Setup**:
  - `var proto = { y: 0 };`
  - `var o = Object.create(proto); o.x = 0;`
- **Usage**:
  - `'x' in o` returns `true` (own property).
  - `'y' in o` returns `true` (inherited property).
  - `'hasOwnProperty' in o` returns `true` (inherited from `Object.prototype`).
  - `'nonExistent' in o` returns `false` (property doesn't exist).

#### Conclusion

- **Combining hasOwnProperty() and in**: These tools help identify if a property
  is own, inherited, or non-existent on an object. This distinction is crucial
  for understanding property access and modification behaviors in JavaScript
  object-oriented programming.

### Understanding the Prototype Property

- **Recap of Constructor Function**: When `new F()` is called, an instance of
  `F` is created with its prototype set to `F.prototype`.
- **Common Misunderstanding**: `F.prototype` is not the prototype of the
  function `F` itself, but the prototype for instances created by `F`.
- **Key Role of F.prototype**: It is an object from which all instances of `F`
  inherit properties and methods.

#### Example: Point Constructor with setTo Method

- **Point Constructor**:
  - `function Point(x = 0, y = 0) { this.x = x; this.y = y; }`
- **Adding setTo Method on Prototype**:
  - `Point.prototype.setTo = function(x, y) { this.x = x; this.y = y; }`
- **Benefits**:
  - Memory Efficiency: `setTo` method is defined once on `Point.prototype`, not
    in every instance.
  - No Global Scope Pollution: All related functionality encapsulated within
    `Point`.
  - Better Readability and Maintainability.

#### Example: Item Class with Accessor Property

- **Item Constructor**:
  - `function Item(sellingPrice, actualPrice) { ... }`
  - Defines `sellingPrice`, `actualPrice`, and an accessor property `discount`.
- **Accessor Property `discount`**:
  - Calculates discount percentage based on `sellingPrice` and `actualPrice`.
  - Avoids redundancy and simplifies interface.
- **Using Item Instance**:
  - `var item = new Item(25, 50);`
  - Access and set `discount` property to dynamically calculate selling price.

### Prototype Model Strengths

- **Delegation of Property Assignment**:
  - Assignment to an inherited accessor property (e.g., `item.discount = 30`)
    invokes the setter on the prototype, not creating an own property.
- **Prototype Model Power**: Direct inheritance from objects, leading to simple
  but effective design.

### Understanding Prototypal Inheritance in JavaScript

Prototypal inheritance in JavaScript is a mechanism where one object can inherit
properties and methods from another object, enabling a form of class-subclass
relationships as seen in classical object-oriented programming.

### Emulating Class-Subclass Inheritance

- **Constructor Functions as Classes**: In JavaScript, constructor functions can
  act like classes.
- **Inheriting Methods and Properties**: A subclass can inherit methods and
  properties from a superclass.

#### Example: Shape and Rect Classes

- **Shape Class**:
  - Methods: `move()`, `delete()`.
  - Defined using `function Shape(x, y, fill) { ... }`.
  - Methods added to `Shape.prototype`.
- **Rect Class**: Inherits from `Shape`.
  - Additional property: `width`, `height`.
  - Constructor calls `Shape.call(this, x, y, fill)` to initialize inherited
    properties.
  - Methods added to `Rect.prototype`.

### Establishing Inheritance

- **Initial Approach**: Setting `Rect.prototype = new Shape()`.
  - Inefficient as it creates redundant properties on `Rect.prototype`.
- **Preferred Approach**: Using `Object.create(Shape.prototype)`.
  - Creates an empty object with `Shape.prototype` as its prototype.
  - Efficient and clean, avoiding redundant properties.

#### Testing the Inheritance

- **Creating an Instance of Rect**:
  - `var r1 = new Rect(20, 50, 0, 0);`
- **Accessing Methods**:
  - `r1.draw()` – Specific to `Rect`.
  - `r1.move(-1, 5)`, `r1.delete()` – Inherited from `Shape`.

### Key Takeaways

- **JavaScript's Prototypal Inheritance**: Enables objects to inherit from other
  objects, creating a flexible and dynamic inheritance hierarchy.
- **Object.create Method**: A cornerstone of establishing prototypal
  inheritance, allowing the creation of objects with a specific prototype.

### Retrieving an Object's Prototype

- **Challenge**: Determining an object's prototype when the constructor is
  unknown or `constructor` property is unavailable.
- **Non-Standard Approach**: `__proto__` property.
  - Returns the prototype of the object.
  - Accessor property defined on `Object.prototype`.
  - Example: `[1, 2, 3].__proto__ === Array.prototype` returns `true`.
- **Standard Approach**: `Object.getPrototypeOf()` method.
  - Syntax: `Object.getPrototypeOf(obj)`.
  - Returns the prototype of `obj`.
  - Recommended for use over `__proto__`.
  - Example: `Object.getPrototypeOf({ x: 0 }) === Object.prototype` returns
    `true`.

### Setting an Object's Prototype

- **Changing an Existing Object's Prototype**:
  - Two methods: Assigning to `__proto__` and `Object.setPrototypeOf()`.
- **Using `__proto__`**:
  - Syntax: `obj.__proto__ = newValue`.
  - Direct assignment to change the prototype.
  - Example: `b.__proto__ = a` sets `a` as the prototype of `b`.
- **Using `Object.setPrototypeOf()`**:
  - Syntax: `Object.setPrototypeOf(obj, proto)`.
  - Sets `proto` as the prototype of `obj`.
  - Example: `Object.setPrototypeOf(b, a)` sets `a` as the prototype of `b`.
- **Performance Considerations**:
  - Both `__proto__` and `Object.setPrototypeOf()` can negatively impact
    performance.
  - They disrupt internal optimizations for property access.
  - Recommended to use `Object.create()` for new objects instead of altering
    prototypes of existing objects.

### Key Points

- Retrieving an object's prototype is crucial for understanding inheritance and
  behavior.
- JavaScript provides both standard (`Object.getPrototypeOf()`) and non-standard
  (`__proto__`) ways to retrieve an object's prototype.
- Setting an object's prototype after its creation (`__proto__`,
  `Object.setPrototypeOf()`) is possible but should be used cautiously due to
  potential performance issues.

## Standard Built-in Objects

- Referred to as "global built-in objects" or "standard objects".
- Accessible globally, include properties and methods of the standard object,
  including inherited ones.

### Number

- Represents numerical data, either integers or floating points.
- Created using `Number()` constructor.
- Can convert various types to numbers.
- Properties: Constructor, MAX_VALUE, MIN_VALUE, NEGATIVE_INFINITY,
  POSITIVE_INFINITY, Prototype.
- Methods: `toExponential()`, `toFixed()`, `toLocaleString()`, `toPrecision()`,
  `toString()`, `valueOf()`.

### BigInt

- Handles large integers beyond the scope of the standard Number primitive.
- Created using `BigInt()` constructor.
- Properties: Constructor, Prototype.
- Methods: `asIntN()`, `asUintN()`, `toLocaleString()`, `toString()`,
  `valueOf()`.

### Math

- Executes arithmetic operations, not a function object.
- Static properties and methods, no instance creation.
- Properties: PI, E, LN2, LN10, LOG2E, LOG10E, SQRT2, SQRT1_2.
- Methods: `max()`, `min()`, `round()`, `ceil()`, `floor()`, `exp()`, `pow()`,
  `abs()`, `random()`, `sqrt()`, `sin()`, `cos()`, `tan()`, `sinh()`, `cosh()`,
  `tanh()`.

### Date

- Manages dates and times.
- Created using `Date()` constructor.
- Supports operations like comparing dates, formatting, and precision in
  milliseconds.
- Properties: Constructor, Prototype.
- Methods: `Date()`, `getDate()`, `getDay()`, `getFullYear()`, `getHours()`,
  `getMinutes()`, `getSeconds()`, `getMilliseconds()`.

### String

- Represents all strings in JavaScript.
- Created using `String()` constructor.
- Used for string length, character search, substring extraction, etc.
- Syntax: `var variable_name = new String(string);`
- Properties: Length, Constructor, Prototype.
- Methods: `charAt()`, `toLowerCase()`, `toUpperCase()`, `concat()`,
  `indexOf()`, `lastIndexOf()`, `raw()`.

### RegExp

- Used for character pattern validation.
- Created with `RegExp()` constructor or literal syntax.
- Supports pattern matching and search-replace with regular expressions.
- Properties: Constructor, Global, ignoreCase, lastIndex, multiline, source,
  sticky, unicode.
- Methods: `exec()`, `test()`, `toSource()`, `toString()`, `compile()`.

### Object

- Represents various keyed collections and complex entities.
- Created using `Object()` constructor.
- Properties: Constructor, **proto**.
- Methods: `assign()`, `create()`, `entries()`, `freeze()`, `is()`, `keys()`,
  `seal()`, `toString()`, `values()`.

### Function

- Basis of every JavaScript function.
- Created using `Function()` constructor.
- Properties: length, displayName, caller, name, arguments.
- Methods: `toString()`, `call()`, `bind()`, `apply()`.

### Boolean

- Wrapper class for converting non-Boolean values to Boolean (true/false).
- Created using `Boolean()` constructor.
- Properties: Constructor, Prototype.
- Methods: `toSource()`, `valueOf()`, `toString()`.

### Symbol

- Used for unique property keys in objects, avoiding conflicts.
- Created using `Symbol()` constructor.
- Properties: asyncIterator, hasInstance, match, species, toPrimitive,
  unscopables, search, split, matchAll.
- Methods: `for()`, `keyFor()`, `toString()`.

## Recall

### Primitives

1. What is a primitive in JavaScript, and how does it relate to the concept of
   simplicity in data?
2. Can you name five primitive data types in JavaScript, and provide an example
   for each?
3. Describe the key characteristic of primitives that distinguishes them from
   objects.
4. Why don't primitives have properties or methods attached to them in
   JavaScript?
5. What is the term used to describe the immutability of primitive values, and
   why is it important?

### Objects

1. How does an object in JavaScript differ from a primitive in terms of
   complexity?
2. Using the analogy of atoms and molecules, explain the relationship between
   primitives and objects.
3. List two examples of objects in JavaScript, and briefly explain what makes
   them objects.
4. Describe what properties and methods are and explain how they are associated
   with objects.
5. What is meant by "reference" in the context of objects, and why are objects
   sometimes referred to as references?

### Strings

1. Define a string in JavaScript. How can you represent a string using single
   quotes, double quotes, and backticks?
2. Explain the concept of character indexing in strings. How are characters
   indexed in a string?
3. What is the length of a string, and how can you find it in JavaScript?
4. Demonstrate how to access the first and third characters of a string using
   square brackets and indices.
5. Calculate and print the length of a given string in JavaScript.
6. Can you modify the contents of a string directly by changing a character at a
   specific index?
7. What is autoboxing, and why is it relevant in JavaScript?
8. Provide examples of wrapper classes in JavaScript for primitive types.
9. Explain the process of autoboxing when you access a property on a string
   primitive.
10. Why is it important to understand autoboxing when working with primitive
    values in JavaScript?

### Object - array

1. What is an array, and how is it described in terms of data collection?
2. What are the formal names for the elements within an array?
3. How is each element in an array identified?
4. Explain the concept of zero-indexing in arrays.
5. What types of data can be stored in array elements?
6. Is it necessary for all elements in an array to have the same data type?
7. How can you create an array using an array literal?
8. What is the alternative method for creating arrays, and what is it called?
9. How do you access a specific element in an array?
10. What happens when you try to access an element at an out-of-range index in
    an array?
11. What property is used to determine the total number of elements in an array?
12. How can you sort an array of elements using the `sort()` method?
13. By default, how does the `sort()` method arrange elements in an array?
14. What type of function do you need to provide to the `sort()` method to
    correctly sort numbers in ascending order?
15. Describe how the sorting function works when sorting numbers using `sort()`.
16. Why are functions important in the context of sorting arrays?

### Functions

1. What is the purpose of a function in JavaScript?
2. How is a named function defined in JavaScript? Provide the syntax.
3. What happens when you invoke a function in JavaScript?
4. What are arguments and parameters in the context of JavaScript functions?
5. Explain the role of the `return` keyword in a JavaScript function.
6. How can you use the result of a function in JavaScript after it has been
   returned?
7. Give an example of a JavaScript function and explain how it is invoked.
8. Describe a situation where you would use a function to group code in
   JavaScript.
9. Can a JavaScript function accept multiple arguments? If so, how are they
   specified?
10. What is the importance of functions in the context of sorting in JavaScript
    arrays?

### Objects

1. What is an object in JavaScript, and what does it consist of?
2. Can you provide a real-world analogy to explain the concept of objects in
   JavaScript?
3. How are objects typically created in JavaScript, and what syntax is used?
4. What is a "plain object," and when would you use it in JavaScript?
5. How can you access object properties in JavaScript, and what are the two
   common notations for this?
6. How do you add new properties to an existing JavaScript object?
7. What are methods in the context of JavaScript objects, and how are they
   defined?
8. How do you invoke methods defined on an object?
9. Explain the importance of objects in JavaScript as it relates to
   object-oriented programming (OOP).
10. Provide an example of a JavaScript object with both properties and methods.

### typeof

1. What does the `typeof` operator in JavaScript do?
2. How does the `typeof` operator behave for primitive data types? Provide
   examples.
3. What does the `typeof` operator return when used with the `null` value? Why
   is this behavior considered a historical bug?
4. When you use the `typeof` operator with arrays, what value does it return?
   Why does this behavior occur?
5. How does the `typeof` operator behave when used with pure object data types?
   Give examples.
6. When `typeof` is applied to functions, what value does it return? Why are
   functions treated differently from other objects?
7. What is the general rule for objects when using the `typeof` operator, and
   why is there an exception for functions?

### Object - deeper dive

1. What are the two main syntax options for creating objects in JavaScript?
2. Why is the "object literal" syntax preferred over the "object constructor"
   syntax?
3. What is the role of keys in JavaScript objects, and how are they related to
   properties?
4. How can you add a new property to an existing JavaScript object?
5. Explain how you can remove a property from an object using JavaScript.
6. When should you enclose property names in quotes within square brackets, and
   provide an example.
7. How does the square bracket notation differ from the dot notation when
   accessing properties in JavaScript objects?
8. What advantage does square bracket notation have when dealing with dynamic or
   computed property names?
9. How can you access object properties dynamically using variables in
   JavaScript?
10. What limitations does dot notation have in terms of property names and
    dynamic property access?
11. What are computed properties in JavaScript objects, and how are they useful?
12. Give an example of using computed properties in JavaScript objects.
13. What is property-value shorthand in JavaScript objects, and why is it
    beneficial?
14. How can you create object properties with the same name as existing
    variables using property-value shorthand?
15. Are there any limitations on property names in JavaScript objects? If so,
    what are they?
16. Give an example of using a reserved word as a property name in a JavaScript
    object.
17. What happens when you use numbers as property names in JavaScript objects?
18. Is there a special property name that cannot be set to a non-object value in
    JavaScript objects? If so, what is it called?
19. What is the purpose of the "for...in" loop in JavaScript?
20. How is the "for...in" loop different from the regular "for" loop?
21. What is the syntax of the "for...in" loop?
22. In a "for...in" loop, what does the variable represent that is used to
    iterate over property names?
23. Give an example of iterating over the keys of an object using a "for...in"
    loop.
24. How can you access the values associated with the properties during a
    "for...in" loop?
25. Can you use any variable name other than "key" to represent the property
    name in a "for...in" loop?
26. What will be the output of a "for...in" loop when applied to an empty
    object?
27. Is the order of iteration guaranteed when using a "for...in" loop?
28. When should you use a "for...in" loop in your JavaScript code?

### Prototypes

1. **Understanding Prototypes in JavaScript**:

   - What is the key difference between prototype-based OOP (like JavaScript)
     and class-based OOP (like C++ or Java)?
   - How does JavaScript determine from which object an object inherits
     properties?

2. **Prototypes and Property Inheritance**:

   - What happens when you try to access a property on a JavaScript object?
   - Describe the concept of property shadowing in the context of JavaScript
     prototypes.

3. **The Problem with Methods in Constructors**:

   - Why is it not advisable to define instance methods inside a constructor in
     JavaScript?
   - What issues arise from creating a new method for each instance of an
     object?

4. **The Object.create() Method**:

   - What is the purpose of the `Object.create()` method introduced in
     ECMAScript 5?
   - How do you create an object with no prototype in JavaScript?

5. **Prototype Chains in JavaScript**:

   - Describe what a prototype chain is and its significance in JavaScript.
   - What happens in the property retrieval process when accessing a property in
     JavaScript?

6. **Special Case: Null Prototype**:

   - What is unique about an object with a null prototype in JavaScript?
   - Which predefined JavaScript object has a null prototype?

7. **Examples and Implementation**:

   - How would you set one object as the prototype of another object in
     JavaScript?
   - Provide an example of how the property retrieval mechanism works across a
     prototype chain.

8. **Understanding Property Retrieval**:

   - Describe the process of property retrieval in JavaScript. What is the order
     of checking for properties?
   - What is property shadowing in JavaScript and how does it affect property
     retrieval?

9. **Property Assignment Mechanism**:

   - What happens when you try to assign a value to a non-writable property in
     JavaScript?
   - Explain the behavior of JavaScript when assigning a value to a property
     that has a setter.

10. **Summarizing Property Assignment Cases**:

    - How does JavaScript handle property assignment for own data properties
      that are writable?
    - What is the result of attempting to assign a value to an inherited
      property with a setter?

11. **Distinguishing Own and Inherited Properties**:

    - Define 'own properties' and 'inherited properties' in JavaScript.
    - How does JavaScript treat these two types of properties differently during
      property assignment?

12. **Using hasOwnProperty()**:

    - What is the purpose of the `hasOwnProperty()` method in JavaScript?
    - Provide an example where `hasOwnProperty()` would return `true` and
      another where it would return `false`.

13. **Testing Understanding of hasOwnProperty()**:

    - If a property 'x' is defined using
      `Object.defineProperty(o, 'x', { value: 0 });`, what would
      `o.hasOwnProperty('x')` return?

14. **Prototypes and the 'in' Operator**:

    - How does the 'in' operator in JavaScript work with respect to own and
      inherited properties?
    - Provide an example demonstrating how the 'in' operator works with both own
      and inherited properties.

15. **Recap of Constructor Function and Prototype Property**:

    - What is the difference between `F.prototype` and the prototype of the
      function `F` itself?
    - How does `F.prototype` play a role when a new instance is created using
      `new F()`?

16. **Benefits of Prototype Methods**:

    - Why is it more memory-efficient to define methods like `setTo` on
      `Point.prototype` rather than in the `Point` constructor?
    - How does adding methods to a prototype enhance readability and
      maintainability in JavaScript?

17. **Prototypal Inheritance Model**:

    - Explain how property assignment to an inherited accessor property works in
      JavaScript's prototypal inheritance model.
    - What makes JavaScript's direct inheritance from objects a powerful
      feature?

18. **Emulating Class-Subclass Relationships**:

    - How can constructor functions in JavaScript emulate class-subclass
      relationships found in classical OOP?
    - Describe the process of establishing inheritance between two constructor
      functions like `Shape` and `Rect`.

19. **Efficient Method for Establishing Inheritance**:

    - Why is using `Object.create(Shape.prototype)` preferred over
      `Rect.prototype = new Shape()` for establishing inheritance?
    - What are the advantages of using `Object.create()` in this context?

20. **Retrieving and Setting an Object's Prototype**:

    - What is the difference between using `__proto__` and
      `Object.getPrototypeOf()` to retrieve an object's prototype?
    - Explain the performance considerations when using `__proto__` or
      `Object.setPrototypeOf()` to change an object's prototype.

21. **Understanding Prototype Access and Manipulation**:
    - Why is it important to understand how to retrieve and set an object's
      prototype in JavaScript?
    - What are the key takeaways from JavaScript's approach to prototypes and
      inheritance?

### Built-in Objects

1. **Number Object**:

   - What method would you use to convert a number to its exponential form in
     JavaScript?
   - Name two properties of the `Number` object used to represent extreme number
     values.

2. **BigInt Object**:

   - For what purpose is the `BigInt` object used in JavaScript?
   - How do you create a BigInt value from a numeric literal?

3. **Math Object**:

   - What is the purpose of the `Math` object in JavaScript?
   - Name two methods provided by the `Math` object to round numbers.

4. **Date Object**:

   - How do you create a new Date object in JavaScript?
   - Which method of the `Date` object is used to get the day of the week?

5. **String Object**:

   - How do you create a new String object in JavaScript?
   - What method would you use to find the position of a substring within a
     string?

6. **RegExp Object**:

   - What is the purpose of the `RegExp` object in JavaScript?
   - How can you test if a certain pattern exists in a string using RegExp?

7. **Object Object**:

   - What is the primary purpose of the `Object` object in JavaScript?
   - Name a method used to copy the values of all enumerable own properties from
     one or more source objects to a target object.

8. **Function Object**:

   - What is unique about the `Function` object in JavaScript?
   - Name a method that changes the context of `this` within a function.

9. **Boolean Object**:

   - What is the Boolean object used for in JavaScript?
   - How do you convert a non-Boolean value to a Boolean value?

10. **Symbol Object**:
    - What is the primary use of the `Symbol` object in JavaScript?
    - How do you create a new unique Symbol?
