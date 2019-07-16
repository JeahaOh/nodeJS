var fs = require( 'fs' );

// read file sync
console.log( 'A' );
var result = fs.readFileSync('syntax/sample.txt', 'UTF8');
console.log( result );
console.log( 'C' );

console.log('===');

//  read file async
console.log( 'A' );
fs.readFile('syntax/sample.txt', 'UTF8', function( err, result ){
    console.log( result );
});
console.log( 'C' );

/**
 * Node.js의 성능을 끌어올리기 위해서는 비동기적인 방식으로 작업을 하는것이 좋음.
 */  