const fs = require('fs');
const https = require('https');
console.log('Starting the app...');
var a = 1078698 
var b= 20986 
https.get('https://jsonplaceholder.typicode.com/posts', (res) => {
    console.log('Response status code:', res.statusCode);
}) 
setTimeout(() => {
    console.log('Timeout completed after 2 seconds');
}, 2000);
setTimeout(() => {
    console.log('Timeout completed after 0 second');
}, 0); // This will execute immediately after the current call stack is cleared
fs.readFile('./file.txt', 'utf8', (err, data) => {
    console.log('File read completed',data);
}) 
fs.readFileSync('./file.txt',"utf8")
console.log('File read completed');  
function multiply(x, y) {
    return x * y;
}   
multiply(a, b);
console.log('Multiplication result:', multiply(a, b));