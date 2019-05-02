const http = require('http');

const port = 80;

const server = http.createServer((req, res) => {
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


/*
    terminal에서 이 파일이 있는곳으로 온 뒤
    sudo node 03_02_01.js
    명령 하면
    Server Running 라고 뜸
    localhost 혹은 127.0.0.1 접속하면
    Hello World
*/