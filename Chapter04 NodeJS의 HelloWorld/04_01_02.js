const http = require('http');

const server = http.createServer((req, res) => {
//  createServer 실행하기 전 어떤 식으로 동작해야 할지 '선언'
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    //  클라이언트 측의 ip
    console.log('ip : ' + ip);
    console.log('url : ' + req.url);
    console.log('headers : ' + req.headers);
    //  클라이언트에서 서버로 보낸 헤더 값들.

    res.statudCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n' + JSON.stringify( req.headers, null, 4) );
});

server.listen(80, (err) => {
    if ( err ){
        console.log( err );
    }
    console.log('Server Running');
});

/*
RequestHeaders
사이트의 상태정보 표시,
사용자의 상태에 따라 (모바일, pc) 서버에서 처리하는 방식을 자르게 처리함.

서버에서 클라이언트로 보내는 부분
statusCode : 200, 400, 404, 500
setHeader  : 현재 페이지의 문서를 어던 방법으로 출력할지 결정 (text, html, png, ETC...)
end  또는  write : write 여러번 보낼 수 있음, end 한번 보내면 접속이 끝남.

*/