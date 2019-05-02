/*  POST는 DET과 다르게 조금 복잡한 과정을 거침.
    기본적으로 GET은 주소줄을 통해서 들어오는 정보라는 한계 때문에 일반적으로 255bytes의 제한을 갖고 있지만,
    POST는 사실상 무제한임.
    데이터가 너무 많을 경우 한번에 받을 수 없어서 콜백을 통해서 받게 됨.
 */
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
        res.end('현재 GET Method 페이지의 pathname은 "' + pathname + '"이며 \nquery는 ' + JSON.stringify( query ) + '입니다.');
        return;
    }   else if( req.method == 'POST' ) {
        let post_data = '';

        req.on('data', (chunk) => {
            post_data += chunk;
        })
        .on('end', () => {
            let post_query = qs.parse( post_data );

            res.statusCode = 200;
            res.setHeader( 'Content-Type' , 'text/plain; charset=utf-8' );
            res.setHeader
            res.end('현재 POST Method 페이지의 pathname은 "' + pathname + '"이며 \nquery는 ' + JSON.stringify( post_query ) + '입니다.');
            return;
        });
    }   else {
        res.statusCode = 200;
        res.setHeader( 'Content-Type' , 'text/plain; charset=utf-8' );
        res.end('Unknown Method');
    }
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
/
POST
/favicon.ico
GET
/?test=asdf
GET
/favicon.ico
GET
```
---
현재 POST Method 페이지의 pathname은 "/"이며 
query는 {"test":"asdf"}입니다.
---
현재 GET Method 페이지의 pathname은 "/"이며 
query는 {"test":"asdf"}입니다.
---

POST 메소드는 위와 같은 방식으로 콜백을 사용해 처리함.
req를 통해 data가 수신되는 이벤트가 발생하면 데이터 수신 단위마다 post_data라는 변수에 데이터를 저장함.
데이터 전송이 마무리되면 end라는 이벤트가 발생함.
받은 모든 데이터를 처리 후 받은 데이터는 GET과 마찬가지로 query 형태이므로 같은 함수를 사용해서 파싱함.

일반적으로 POST를 이용해서 전달하는 데이터는 텍스트 데이터 뿐만 아니라 사진과 같은 바이너리 데이터를 전달하기 위해 사용하는 경우가 많음.
이런 경우 코드가 조금 많이 복잡해 짐.
*/