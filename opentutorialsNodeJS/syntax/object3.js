//  var i = if( true ) { console.log( 'if' ); }
//  var j = while( true ) { console.log( 'while' ); }

var f = function() {
    console.log( 1 + 1 );
    console.log( 1 + 2 );
}

//  console.log( f );   //  [Function: f]
//  f();

var a = [ f ];

//  a[0]();

var o = {
    func:f
}

o.func();
