/* eslint-disable prefer-const */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { log } from "../utils/logger";

// Var / Let / Const
var sameName = 1;
var sameName = 2;
let sameNameLet = 1;
// let sameNameLet = 2; // Error: Cannot redeclare block-scoped variable 'sameNameLet'.
const sameNameConst = 1;
// const sameNameConst = 2; // Error: Cannot redeclare block-scoped variable 'sameNameConst'.

hoistedTest = 2;
var hoistedTest;
// hoistedTestLet = 2; // Error: Cannot access 'hoistedTestLet' before initialization
let hoistedTestLet;
hoistedTestLet = 2;

log("sameName", sameName);
log("sameNameLet", sameNameLet);
log("sameNameConst", sameNameConst);
log("hoistedTest", hoistedTest);
log("hoistedTestLet", hoistedTestLet);

// scopes
{
  var scopeVar = "var is scoped to function and static blocks";
  let scopeLet = "let is scoped to brackets";

  log("scopeVar", scopeVar);
  log("scopeLet", scopeLet);
}

log("scopeVar", scopeVar);
// log(scopeLet); // Error: Cannot find name scopeLet

// let, const, class are hoisted but is in a TDZ(temporal dead zone) up until the execution,
// any reference to it will cause reference error

const x = 1;
log("x out", x);
{
  // log(x); // ReferenceError (x is hoisted)
  const x = 2;
  log("x in", x);
}
