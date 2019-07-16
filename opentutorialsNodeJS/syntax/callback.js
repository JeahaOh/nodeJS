function a() {
    console.log('A');
}
var a = function() {
    console.log('AA');
}
//  JavaScript에서 function은 값이다...
a();

function slowfunc( callback ) {
    callback();
}

slowfunc( a );

//  callback의 형식...