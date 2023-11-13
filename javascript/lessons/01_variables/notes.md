# Variables

- Variables declared with `var` can be redeclared in the same scope without any
  error.
- Variables declared with `let` can only be declared once in the same scope, and
  redeclaring them will result in an error.
- Variables declared with `const` also cannot be redeclared in the same scope
  and will result in an error if you try to do so.
- `var` declarations are hoisted to the top of their containing function or
  block, but their initializations are not. This means you can use a variable
  before declaring it, but it will have an initial value of `undefined`.
- `let` declarations are hoisted to the top of their containing block, but they
  are in a "temporal dead zone" (TDZ) until they are initialized. Accessing them
  before initialization results in a ReferenceError.
- `const` declarations are hoisted similar to `let`, but they must also be
  initialized during declaration.

## Recall

1. What happens when you try to redeclare a variable declared with `var` in the
   same scope?
2. Can you redeclare a variable declared with `let` in the same scope? If not,
   what error do you encounter?
3. What happens when you attempt to redeclare a variable declared with `const`
   in the same scope?
4. How does hoisting work with variables declared with `var`?
5. What is the "temporal dead zone" (TDZ), and how does it relate to variables
   declared with `let`?
6. Can you access a variable declared with `let` before it's initialized? What
   error will you get?
7. Are variables declared with `const` hoisted? If so, what is the difference
   between their hoisting and that of `var`?
8. Why is it important to initialize variables declared with `const` during
   declaration?
9. What is the output of the `log` statements for `scopeVar` and `scopeLet`
   outside the block?
10. What happens when you try to access the `scopeLet` variable outside of the
    block where it's declared?
