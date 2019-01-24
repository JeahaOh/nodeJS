const http = require('http');
const fs = require('fs');
const server = http.createServer( (req, res) => {

    if( req.url == '/' ) {
        fs.readFile('index.html', 'utf8', ( err, data ) => {
            if( err ) {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/plain');
                res.end('File Not Found\n');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end( data );
            }
        });
        /**
            Request가 / 라면 index.html을 보냄.
            index.html이 없다면 404에러.
         */
    }   else if( req.url == '/longpolling' ) {
        HttpConnection.push([ req, res ]);
        /**
            '/longpolling'으로 접속한다면
            res와 req 데이터를 HttpConnection이라는 배열에 넣음.
        */
    }   else {
        console.log( req.url );
        setTimeout( () => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end ( data );
        }, 1000);
    }
});

server.listen( 8080, ( err ) => {
    if( err ) {
        console.log( err );
    }
    console.log('Server Running');
});

let HttpConnection = [];

setInterval( () => {
    console.log( HttpConnection.length );
    if( HttpConnection.length > 0 ) {
        const Connection = HttpConnection.pop();
        const res = Connection[ 1 ];
        res.statusCode = 200;
        res.setHeader( 'Content-Type', 'text/plain');
        res.end('End\n');
    }
}, 30 * 1000);