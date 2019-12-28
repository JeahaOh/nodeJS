var members = [ 'Jeaha', 'asdf1020', 'qwert' ];
console.log( members[ 1 ] );

var i = 0;
while( i < members.length ) {
    console.log( 'array loop ' + i + ' : ' + members[i] );
    i++;
};

var roles = { 
//  key : value    
    'programmer' : 'Jeaha',
    'designer' : 'asdf1020',
    'manager' : 'qwert'
};

console.log( roles.manager );

for( var n in roles ) {
    console.log( '\tkey => ', n, '\n\t- value => ', roles[ n ] );
};