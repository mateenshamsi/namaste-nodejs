Rule 1 : You cannot export modules function and variable from it unless it wants it . 

Types of Export in Node js
->Common JS 
->ES Module export 

=>Common JS

CommonJS is the default module system in Node.js. It uses `require()` to import modules and `module.exports` or `exports` to export them.

**Exporting in CommonJS:**
```js
// math.js
function add(a, b) {
  return a + b;
}
module.exports = add;
```

**Importing in CommonJS:**
```js
// app.js
const add = require('./math');
console.log(add(2, 3)); // 5
```

**Exporting multiple values:**
```js
// utils.js
exports.sum = (a, b) => a + b;
exports.mul = (a, b) => a * b;
```

**Importing multiple values:**
```js
// app.js
const utils = require('./utils');
console.log(utils.sum(2, 3)); // 5
console.log(utils.mul(2, 3)); // 6
```

=>ES Module export

ECMAScript Modules (ESM) is the standard module system in JavaScript, and it is now fully supported in Node.js. ESM uses `import` and `export` statements.

**Exporting in ESM:**
```js
// math.js
export function add(a, b) {
  return a + b;
}
```

**Importing in ESM:**
```js
// app.js
import { add } from './math.js';
console.log(add(2, 3)); // 5
```

**Exporting multiple values:**
```js
// utils.js
export function sum(a, b) {
  return a + b;
}
export function mul(a, b) {
  return a * b;
}
```

**Importing multiple values:**
```js
// app.js
import * as utils from './utils.js';
console.log(utils.sum(2, 3)); // 5
console.log(utils.mul(2, 3)); // 6
```
