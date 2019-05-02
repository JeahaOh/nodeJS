const http = require('http');

const server = http.createServer( (req, res) => {
    
    console.log( req.url );
    console.log( req.method );

    res.statusCode = 200;

    res.setHeader( 'Content-Type' , 'text/plain' );
    res.end('HELLO WORLD');
});

server.listen( 8888, (err) => {
    if( err ) {
        console.log( err );
    }
    console.log('Server Running');
});
/*
```
/
GET
/favicon.ico
GET
/test=afasdf
GET
/favicon.ico
GET
```
*/