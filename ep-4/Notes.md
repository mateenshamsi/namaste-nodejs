All the code of the module will be wrapped inside a function (IIFE).
When a module is loaded in Node.js, its code is wrapped in an IIFE (Immediately Invoked Function Expression). This creates a private scope for each module.

**Module Privacy Example:**
```js
// module1.js
const privateVar = "Can't access from outside";
function privateFunction() {
    return "This is private";
}
module.exports = {
    // Only exported items are accessible
    publicFunction: () => "This is public"
};

// module2.js
const mod = require('./module1');
console.log(mod.privateVar); // undefined
console.log(mod.privateFunction()); // error
console.log(mod.publicFunction()); // works
```

**Key Points:**
- Variables declared inside a module are private by default
- Only items explicitly exported via `module.exports` or `exports` are accessible
- Each module has its own scope, isolated from other modules


You can access `module.exports` in two ways:
1. Using `require()` to import the module
2. Directly within the module itself

**Example:**
```js
// Importing module
const myModule = require('./moduleFile');

// Inside the module
module.exports = {
    property: value
}
```
