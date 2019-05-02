console.log( 1 );
const a = require( "./subfile04.js" );
console.log( 2 );
const b = require( "./subfile04.js" );
//  한번 호출한 모듈은 두 번 호출되지 않는다.
console.log( 3 );