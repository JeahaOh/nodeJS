var http = require( 'http' );
var fs = require( 'fs' );
var app = http.createServer( function( request, response ) {
    var url = request.url;
    if( request.url == '/' ) {
      url = '/index.html';
    }
    if( request.url == '/favicon.ico' ) {
        response.writeHead( 404 );
        response.end();
        return;
    }
    response.writeHead( 200 );
    console.log( __dirname + url );

    //  Apache는 할 수 없는 것.
    //  이곳에 무엇을 넣느냐에 따라 사용자에게 전송하는 데이터가 바뀜.
    //  response.end( "JEAHA" + url );

    response.end( fs.readFileSync( __dirname + url ) );
 
});
app.listen( 3000 );