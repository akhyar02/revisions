## Type Conversions in JavaScript

### Overview

- **Operators and functions** in JavaScript often automatically convert values
  to the appropriate type.
- **Explicit conversion** is sometimes necessary.
- This chapter focuses on **primitive types** and excludes objects.
- **Three main conversions**: to string, to number, and to boolean.

### String Conversion

- Occurs when we need a string representation of a value.
- Use `String(value)` to explicitly convert a value to a string.
- Examples:
  - `true` becomes `"true"`
  - `null` becomes `"null"`

### Numeric Conversion

- Automatic in mathematical functions and expressions.
- Use `Number(value)` for explicit conversion.
- **Rules**:
  - `undefined` → `NaN`
  - `null` → `0`
  - `true` / `false` → `1` / `0`
  - **String**: Trims whitespaces, empty string becomes `0`, non-numeric string
    gives `NaN`.
- Examples:
  - `"123"` → `123`
  - `"   123   "` → `123`
  - `"123z"` → `NaN`
  - `true` → `1`

### Boolean Conversion

- Used in logical operations.
- Use `Boolean(value)` for explicit conversion.
- **Rules**:
  - Intuitively “empty” values (`0`, `""`, `null`, `undefined`, `NaN`) become
    `false`.
  - All other values become `true`.
- Examples:
  - `1` → `true`
  - `0` → `false`
  - `"hello"` → `true`
  - `""` (empty string) → `false`
  - `"0"` (string with zero) → `true`
  - `" "` (space-only string) → `true`

### Summary

- **String Conversion**: Usually obvious for primitive values.
- **Numeric Conversion**:
  - Follows specific rules.
  - Noteworthy: `undefined` is `NaN` (not `0`), and non-empty strings (including
    `"0"` and `" "`) are `true` as booleans.
- **Boolean Conversion**:
  - Based on whether the value is "empty" or not.

## Type Conversions in JavaScript

### Introduction

- JavaScript supports two types of type conversions:
  - **Implicit Conversion (Casting)**: Done automatically by the JavaScript
    engine.
  - **Explicit Conversion (Casting)**: Performed manually by the developer.

### Implicit Type Conversions

- **Definition**: Automatically converting one data type to another.
- **Mechanism**: The JavaScript engine converts data types as needed, especially
  during operations involving different types.
- **Examples**:
  - `4 + 5.5` results in `9.5`. An integer is converted to a real number.
  - `4 + "5"` results in the string `"45"`. The number is converted to a string
    for concatenation.

### Explicit Type Conversions

- **Performed by Developers**: Using specific JavaScript functions to convert
  data types.
- **Functions for Conversion**:
  - `Number()`: Converts to a number.
  - `Boolean()`: Converts to `true` or `false`.
  - `ParseInt()`: Converts to an integer.
  - `ParseFloat()`: Converts to a floating-point number.
  - `String()`: Converts to a string.
  - `toString()`: Converts numbers into binary, octal, or hexadecimal string
    formats.

### Specific Conversion Functions

1. **Number()**

   - Converts strings or other values to numbers.
   - Example: `'30'` becomes `30`.

2. **Boolean()**

   - Converts any value to `true` or `false`.
   - Non-empty strings (e.g., `"hello"`) and non-zero numbers become `true`;
     empty strings (`""`) and `0` become `false`.

3. **ParseInt()**

   - Converts values to integers.
   - Discards decimal parts from floats.
   - Extracts integer from a string starting with numbers.

4. **ParseFloat()**

   - Extracts floating-point numbers from strings.
   - Adds `.0` to integer values for floating-point representation.

5. **String()**

   - Converts any value to a string.
   - Example: `30` becomes `'30'`.

6. **toString()**
   - Converts numbers to strings in different bases (binary, octal,
     hexadecimal).

### Summary

- This article provides insights into JavaScript's type conversions.
- **Key Points**:
  - Understanding the automatic (implicit) and manual (explicit) conversions in
    JavaScript.
  - Familiarity with functions like `Number()`, `Boolean()`, `ParseInt()`,
    `ParseFloat()`, `String()`, and `toString()` for explicit conversions.

## Notes on JavaScript's Implicit Coercion

### Overview

- **Implicit Coercion**: Automatic conversion of an unexpected value type to the
  expected type.
- **Best Practice**: Generally best avoided due to potential unexpected results.

### Examples of Implicit Coercion

1. **Numerical Expressions with Strings**

   - `3 * "3"` results in `9` (string to number conversion).
   - `1 + "2" + 1` results in `"121"` (number to string conversion for
     concatenation).

2. **Boolean Values**

   - `true + true` equals `2` (boolean to number).
   - `10 - true` equals `9` (boolean to number).

3. **Objects with `valueOf` and `toString` Methods**

   - `3 + { valueOf: () => 2 }` equals `5`.
   - `4 * { toString: () => " promise is a boy :)" }` results in a string
     concatenation: `"4 promise is a boy :)"`.

4. **Arrays**

   - `4 * []` equals `0` (array converted to 0).
   - `4 + [1, 2]` results in `"41,2"` (array converted to string for
     concatenation).
   - `4 * [1, 2]` results in `NaN` (not a number).

5. **Falsy and Truthy Values**
   - Non-numeric values like `"string"` in numeric expressions result in `NaN`.
   - Empty strings and `0` in logical expressions are treated as `false`.
   - Non-empty strings and non-zero numbers are `true`.

### Specific Cases

1. **`+` Operator with Strings**

   - Acts as concatenation when one operand is a string.
   - Converts numbers to strings instead of strings to numbers.

2. **Array Conversion in Expressions**

   - Uses `toString()` method of arrays for conversion.
   - Arrays without elements are treated as `0` in numeric expressions.

3. **`valueOf` Method**

   - Used by JavaScript for numeric or string value expectations.
   - Overrides `toString` if both methods are defined.

4. **Falsy and Truthy Values**
   - Certain values like `false`, `0`, `null`, `undefined`, `""`, `NaN`, and
     `-0` are falsy.
   - Most other values are truthy.

### Handling `NaN`

- **`NaN` (Not a Number)**:
  - A special numeric value that isn't equal to itself.
  - Can be checked using `Number.isNaN()` or by comparing it to itself
    (`val !== val`).

### Best Practices

- **Avoid Relying on Implicit Coercion**:
  - Be explicit when determining the truthiness of a value.
  - Use strict type checking (`===`) instead of loose checking (`==`).

### Summary

- Understanding JavaScript's implicit coercion is crucial for avoiding
  unexpected behaviors in code.
- Explicit type checking and conversion are recommended over relying on
  JavaScript's automatic type coercion.

## Recall

1. **Understanding Type Conversion in JavaScript**

   - What are the three main types of conversions in JavaScript?
   - Which primitive types are excluded from the focus of type conversions in
     JavaScript?

2. **String Conversion**

   - How do you explicitly convert a value to a string in JavaScript?
   - What string representations do `true` and `null` convert to?

3. **Numeric Conversion**

   - What function is used for explicit numeric conversion in JavaScript?
   - What numeric values do `undefined`, `null`, and `true`/`false` convert to?
   - How does JavaScript handle numeric conversion for strings with whitespace,
     empty strings, and non-numeric strings?

4. **Boolean Conversion**

   - How does JavaScript determine the boolean value of different types of
     values?
   - What boolean values do `1`, `0`, `"hello"`, `""`, `"0"`, and `" "` convert
     to?

5. **Summary of Conversions**

   - What is unique about the numeric conversion of `undefined` and non-empty
     strings in JavaScript?
   - What general rule does JavaScript follow for boolean conversions?

6. **Differentiating Type Conversions**

   - What are the two types of type conversions in JavaScript, and who performs
     them?

7. **Implicit Conversion Mechanism**

   - How does JavaScript handle implicit type conversion when different data
     types are involved in an operation?

8. **Explicit Conversion Functions**

   - Name the functions used in JavaScript for explicit type conversion.

9. **Understanding `Number()` Function**

   - What is the purpose of the `Number()` function, and what types of values
     can it convert?

10. **Role of `Boolean()` Function**

    - Describe how the `Boolean()` function works in JavaScript and give
      examples of values that convert to `true` and `false`.

11. **Using `ParseInt()` and `ParseFloat()`**

    - Compare the `ParseInt()` and `ParseFloat()` functions. When should each be
      used?

12. **String Conversion Techniques**

    - How does the `String()` function differ from the `toString()` method in
      converting values to strings?

13. **Real-world Application**

    - Provide an example where implicit type conversion in JavaScript might lead
      to an unexpected result.

14. **Conversion Functions' Outcomes**

    - What would be the result of converting a non-numeric string with
      `Number()` and a numeric string with `Boolean()` in JavaScript?

15. **Conversion in Mathematical Operations**

    - How does JavaScript handle type conversion in mathematical operations like
      addition and multiplication with mixed data types?

16. **Understanding Implicit Coercion**

    - What is implicit coercion in JavaScript, and why is it generally
      recommended to avoid it?

17. **Coercion in Numerical and String Operations**

    - How does JavaScript handle implicit coercion in an expression like
      `3 * "3"` and `1 + "2" + 1`?

18. **Boolean Value Coercion**

    - What are the results of `true + true` and `10 - true` in JavaScript, and
      why?

19. **Object Coercion with `valueOf` and `toString`**

    - How does JavaScript implicitly coerce an object with `valueOf()` and
      `toString()` methods in numerical and string operations?

20. **Array Coercion in Expressions**

    - What happens when you use an array in a numeric expression like `4 * []`
      or in a string concatenation like `4 + [1, 2]`?

21. **Understanding Falsy and Truthy Values**

    - What defines a value as falsy or truthy in JavaScript? Can you give
      examples of each?

22. **Role of the `+` Operator**

    - Describe how the `+` operator behaves differently when used with a string
      and a number in JavaScript.

23. **Handling `NaN`**

    - What is unique about `NaN` in JavaScript, and how can you reliably check
      for it?

24. **Best Practices in Type Conversion**

    - Why is explicit type checking preferred over implicit coercion in
      JavaScript?

25. **Real-World Implications**
    - Provide an example where implicit coercion could lead to an unexpected or
      erroneous outcome in a JavaScript application.
