/**
 var args = process.argv;
 console.log( args );
[ '/usr/local/Cellar/node/11.6.0/bin/node',
  '/Users/Jeaha/git/nodeJS/temp/opentutorials/14 Node.js - 콘솔에서의 입력값/syntax/conditional.js',
  'asdf' ]
A
B
C2
D
 */
var args = process.argv;


console.log( 'A' );
console.log( 'B' );
if( args[2] === 'C1' ) {
    console.log( 'C1' );
}   else {
    console.log( 'C2' );
}
console.log( 'D' );