const http = require('http');
//  http 모듈을 불러오는 라인

const port = 80;
//  실제 서비스 사용시, http = 80, https = 443 을 사용함.
//  사람 뿐 아니라 검색 엔진에도 노출 되기 위해서임

const hostname = '127.0.0.1';
//  서버가 응답할 IP 설정, 특정 IP에서만 서버를 동작하게 하는 경우가 있음.

const server = http.createServer((req, res) => {
//  createServer 실행하기 전 어떤 식으로 동작해야 할지 '선언'
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, (err) => {
    if ( err ){
        console.log( err );
    }
    console.log('Server Running');
});

//  node.js server 종료 방법 = console or teminal에서  ^(ctl) + c