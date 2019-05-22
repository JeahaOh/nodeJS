var number = [ 1, 400, 12, 34, 5 ];

var i = 0;
var tot = 0;
while( i < number.length ) {
    console.log( number[i] );
    tot = tot + number[i];
    i++;
}

console.log( `tot : ${tot}` );