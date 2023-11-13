// @ts-nocheck
import { log } from "utils/logger";

// #NUMBER
// Defining integer and float constiables
const integerNumber = 42;
const floatNumber = 3.1416;

// Performing basic arithmetic operations
const sum = integerNumber + floatNumber;
const difference = integerNumber - floatNumber;
const product = integerNumber * floatNumber;
const division = integerNumber / floatNumber;

log("Integer Number:", integerNumber);
log("Float Number:", floatNumber);
log("Sum:", sum);
log("Difference:", difference);
log("Product:", product);
log("Division:", division);

// Checking data types
log("Type of integerNumber:", typeof integerNumber);
log("Type of floatNumber:", typeof floatNumber);
log("Type of sum:", typeof sum);

// Converting a string to a number
const numericString = "123.45";
const parsedNumberFloat = parseFloat(numericString);
const parsedNumberInt = parseInt(numericString);
log("Parsed Number Float:", parsedNumberFloat);
log("Parsed Number Int:", parsedNumberInt);

// Rounding numbers
const roundedNumber = Math.round(floatNumber);
log("Rounded Number:", roundedNumber);

// Generating a random number between 1 and 10
const randomInteger = Math.floor(Math.random() * 10) + 1;
log("Random Integer between 1 and 10:", randomInteger);

// #STRING
// Defining a string
const lang = "JavaScript";
const os = "Windows";

// Accessing characters in a string
const firstChar = lang[0]; // Access the first character ('J')
const thirdChar = os[2]; // Access the third character ('n')

log("First Character:", firstChar);
log("Third Character:", thirdChar);

// Finding the length of strings
const langLength = lang.length; // Get the length of 'JavaScript' (10)
const osLength = os.length; // Get the length of 'Windows' (7)

log("Length of 'JavaScript':", langLength);
log("Length of 'Windows':", osLength);

// Demonstrating autoboxing
const str = "Autoboxing";
const lengthProperty = str.length; // Autoboxing happens here, str is wrapped => String(str).length

log("Length of 'Autoboxing':", lengthProperty);

// #BOOLEAN
const isTrue = true;
const isFalse = false;

log("isTrue:", isTrue);
log("isFalse:", isFalse);

// #ARRAY (OBJECT)
const fruits = ["apple", "banana", "cherry", "date"];

// Accessing elements in an array
log(fruits[0]); // Output: "apple"
log(fruits[2]); // Output: "cherry"

// Accessing an out-of-range index
log(fruits[4]); // Output: undefined

// Getting the length of an array
log(fruits.length); // Output: 4

// Sorting an array of strings alphabetically
fruits.sort();
log(fruits); // Output: ["apple", "banana", "cherry", "date"]

// Sorting an array of numbers correctly
const numbers = [3, 1, 2, 10, 5];
numbers.sort((a, b) => a - b);
log(numbers); // Output: [1, 2, 3, 5, 10]

// #FUNCTION
// Define a named function
function greet(name: string) {
  log(`Hello, ${name}!`);
}

// Call the function with an argument
greet("John"); // Output: Hello, John!

// Define a function with parameters and return value
function add(a: number, b: number) {
  return a + b;
}

// Call the function and store the result in a constiable
const sumFn = add(5, 3);
log(sumFn); // Output: 8

// #OBJECT
// Creating a plain object to represent a website URL
const url: any = {
  protocol: "https",
  domain: "www.codeguage.com",
  path: "/",

  // Adding a method to the object to generate the complete URL
  getURL: function () {
    return this.protocol + "://" + this.domain + this.path;
  },
};

// Accessing object properties using dot notation and bracket notation
log(url.protocol); // 'https'
log(url["domain"]); // 'www.codeguage.com'

// Adding new properties to the object
url.queryString = null;
url["hash"] = null;

// Accessing and modifying the new properties
log(url.queryString); // null
url.queryString = "page=home";
log(url.queryString); // 'page=home'

// Invoking the object method to get the complete URL
const completeURL = url.getURL();
log(completeURL); // 'https://www.codeguage.com/'

// #TYPEOF
// Example for primitive types
log(typeof 10); // Output: 'number'
log(typeof 3.14); // Output: 'number'
log(typeof NaN); // Output: 'number'
log(typeof Infinity); // Output: 'number'
log(typeof "Hello"); // Output: 'string'
log(typeof true); // Output: 'boolean'
log(typeof undefined); // Output: 'undefined'

// Example for null behavior
log(typeof null); // Output: 'object'

// Example for arrays
log(typeof [1, 2, 3]); // Output: 'object'

// Example for objects
log(typeof {}); // Output: 'object'
log(typeof { x: 10 }); // Output: 'object'

// Example for functions
log(typeof function () {}); // Output: 'function'

// #OBJECT - Deeper dive
// Using object literal syntax to create an object
const user: any = {};

// Adding properties to the object
user.name = "John";
user.age = 30;
user.isAdmin = true;

// Removing a property from the object
delete user.age;

// Creating a property with a multiword name using square brackets
user["likes birds"] = true;

// Dynamic property access using a constiable
const key = "isAdmin";
user[key] = true;

// Computed property with a dynamic property name
const fruit = "apple";
const bag: any = {};
bag[fruit] = 5;

// Property value shorthand
const name = "Alice";
const age = 25;
const person = { name, age };

log(person.name); // Alice
log(person.age); // 25

// Checking if a property exists in an object using the "in" operator
log("age" in user); // true, user.age exists
log("blabla" in user); // false, user.blabla doesn't exist

// Iterating over the keys (property names) of an object using a "for...in" loop
for (const key in user) {
  log(key); // name, isAdmin, likes birds
  log(user[key]); // John, true, true
}

// Control the order of properties using non-integer property keys
const phoneCodes: any = {};
phoneCodes["+1"] = "USA";
phoneCodes["+44"] = "UK";
phoneCodes["+33"] = "France";

// Looping over properties with non-integer keys in creation order
for (const code in phoneCodes) {
  log(code, phoneCodes[code]);
}

// Adding new properties to the object (order of addition matters)
user.favoriteColor = "Blue";
user.favoriteFood = "Pizza";

// Looping over the properties in the order they were added
for (const key in user) {
  log(key); // name, isAdmin, likes birds, favoriteColor, favoriteFood
  log(user[key]);
}

// Prototypes
// Example: Point function with redundant setTo method
function Point(x: any, y: any) {
  this.x = x;
  this.y = y;
  this.setTo = function (newX: any, newY: any) {
    this.x = newX;
    this.y = newY;
  };
}

// Prototype-based inheritance in JavaScript
// Prototypes define inherited properties
// Objects know their prototypes through [[Prototype]] attribute

// Creating objects with prototypes
let a = { x: 10, y: 20 };
let b = Object.create(a); // b inherits from a

const arr = [10, -5, 60]; // Inherits from Array.prototype
const obj = {}; // Inherits from Object.prototype

// Objects with null prototype
const nullProtoObj = Object.create(null);

// Setting prototypes using Object.create
b = Object.create(a); // Sets a as prototype of b

// Prototype chains - similar to genetic inheritance
const c = Object.create(b); // Chain: c → b → a → Object.prototype → null

// Property retrieval follows the prototype chain
function checkProperty(o, prop) {
  return prop in o;
}

// Property assignment rules and edge cases
let o = {};
Object.defineProperty(o, "readOnly", {
  value: 0,
  writable: false,
});
// Assigning to readOnly property will be ignored or throw error in strict mode

// hasOwnProperty method to check own properties
function isOwnProp(obj, prop) {
  return obj.hasOwnProperty(prop);
}

// Example usage and test cases
const testObj = Object.create(a);
testObj.z = 30;
console.log(isOwnProp(testObj, "x")); // false, as x is inherited from a
console.log(isOwnProp(testObj, "z")); // true, as z is an own property

// Defining non-writable properties
Object.defineProperty(o, "nonWritable", {
  value: 1,
  writable: false,
});

// Testing hasOwnProperty
console.log(o.hasOwnProperty("x")); // true
console.log(o.hasOwnProperty("nonWritable")); // true

// Note: [[Prototype]] is a conceptual feature for explanation. Actual implementations may consty.
// code.js

// Prototype and the 'in' Operator

// The 'in' operator is used to check if a property is a direct or inherited property of an object.
// It searches through the prototype chain of the object to find the property.

// Example usage of the 'in' operator
const proto = { y: 0 };
o = Object.create(proto);
o.x = 0;

console.log("x" in o); // true - x is an own property of o
console.log("y" in o); // true - y is an inherited property from proto
console.log("hasOwnProperty" in o); // true - inherited from Object.prototype
console.log("nonExistent" in o); // false - nonExistent is not a property of o

// Prototype Property in JavaScript

// Constructor functions in JavaScript use the prototype property.
// It's important to understand that F.prototype is the prototype for instances created by F, not for the function F itself.

// Example with a Point constructor
function Point2(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

// Adding a method to the Point prototype
Point2.prototype.setTo = function (x, y) {
  this.x = x;
  this.y = y;
};

// Prototypal Inheritance in JavaScript

// JavaScript's prototypal inheritance allows one object to inherit from another.
// This creates a flexible and dynamic inheritance hierarchy.

// Emulating Class-Subclass Inheritance

// Constructor functions can act like classes in JavaScript.
// Subclasses can inherit methods and properties from a superclass.

// Example with Shape and Rect classes
function Shape(x, y, fill) {
  // Shape constructor
}

Shape.prototype.move = function () {
  // move method
};

Shape.prototype.delete = function () {
  // delete method
};

function Rect(x, y, width, height, fill) {
  Shape.call(this, x, y, fill);
  this.width = width;
  this.height = height;
}

// Establishing inheritance
Rect.prototype = Object.create(Shape.prototype);
Rect.prototype.constructor = Rect;

// Creating an instance of Rect
const r1 = new Rect(20, 50, 100, 200, "blue");

// Accessing methods from Shape
r1.move();
r1.delete();

// Retrieving and Setting an Object's Prototype

// Determining an object's prototype
const arrProto = Object.getPrototypeOf([1, 2, 3]); // returns Array.prototype

// Changing an object's prototype
a = {};
b = {};
Object.setPrototypeOf(b, a); // sets a as the prototype of b

// Note: Altering the prototype of an object can lead to performance issues.
// It is generally recommended to use Object.create() for new objects.
