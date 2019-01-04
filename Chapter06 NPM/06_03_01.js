const qs = require('qs');
//  npm install qs 해야함.

let obj = qs.parse('a=1&b=2');
console.log( JSON.stringify( obj ) );

// let str = qs.stringify( obj );
// console.log( str );

let str = qs.stringify( JSON.parse('{"a":"1","b":"2"}') );
console.log( str );