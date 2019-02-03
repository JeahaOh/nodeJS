const http = require('http');
const url = require('url');
const qs = require('querystring');

const server = http.createServer( (req, res) => {

    let Url_data = url.parse( req.url );
    let pathname = Url_data.pathname;
    let query = qs.parse( Url_data.query );
    
    console.log( req.url );
    console.log( req.method );

    if( req.method == 'GET' ) {
        res.statusCode = 200;
        res.setHeader( 'Content-Type' , 'text/plain; charset=utf-8' );
        res.setHeader
        res.end('현재 GET Method 페이지의 pathname 은' + pathname + '이며 query는 ' + JSON.stringify(query) + '입니다.');
        return;
    }

    res.statusCode = 200;
    res.setHeader( 'Content-Type' , 'text/plain; charset=utf-8' );
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
Server Running
/?test=asdf
GET
/favicon.ico
GET
```
들어욘 req.url을 파싱해서 Url_data라는 data로 만들어 경로를 pathname에 저장함.
쿼리는 파싱해서 query에 저장함.
실제로는 들어온 값을 사용해서 무엇인가 처리를 하고 클라이언트에게 결과를 돌려주는 작업이 필요함.
*/