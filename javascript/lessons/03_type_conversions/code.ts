// @ts-nocheck
// Explicit string conversion
let value = true;
let stringValue = String(value); // "true"

value = null;
stringValue = String(value); // "null"

// Explicit numeric conversion
stringValue = "123";
let numericValue = Number(stringValue); // 123

stringValue = "   123   ";
numericValue = Number(stringValue); // 123

stringValue = "123z";
numericValue = Number(stringValue); // NaN

let booleanValue = true;
numericValue = Number(booleanValue); // 1

// Explicit boolean conversion
numericValue = 1;
booleanValue = Boolean(numericValue); // true

numericValue = 0;
booleanValue = Boolean(numericValue); // false

stringValue = "hello";
booleanValue = Boolean(stringValue); // true

stringValue = "";
booleanValue = Boolean(stringValue); // false

stringValue = "0";
booleanValue = Boolean(stringValue); // true

stringValue = " ";
booleanValue = Boolean(stringValue); // true

// Implicit type conversions
let result: string | number = 4 + 5.5; // 9.5 (integer to real number)
result = 4 + "5"; // "45" (number to string)

// Number()
stringValue = "30";
numericValue = Number(stringValue); // 30

// Boolean()
stringValue = "hello";
booleanValue = Boolean(stringValue); // true

// ParseInt()
stringValue = "123.45";
numericValue = parseInt(stringValue); // 123

// ParseFloat()
stringValue = "123.45";
numericValue = parseFloat(stringValue); // 123.45

// String()
numericValue = 30;
stringValue = String(numericValue); // "30"

// toString()
numericValue = 30;
stringValue = numericValue.toString(2); // Convert 30 to a binary string

// Numerical expressions with strings
let mixedResult = 3 * "3"; // 9
mixedResult = 1 + "2" + 1; // "121"

// Boolean values
mixedResult = true + true; // 2
mixedResult = 10 - true; // 9

// Objects with valueOf and toString methods
mixedResult = 3 + { valueOf: () => 2 }; // 5
mixedResult = 4 * { toString: () => " promise is a boy :)" }; // "4 promise is a boy :)"

// Arrays
mixedResult = 4 * []; // 0
mixedResult = 4 + [1, 2]; // "41,2"
mixedResult = 4 * [1, 2]; // NaN

// Checking for NaN
let val = NaN;
let isNan = Number.isNaN(val); // true
isNan = val !== val; // true (alternative way)
