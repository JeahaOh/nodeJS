const http = require('http');

const SessionStr = () => {
    let str = "";
    const base_str = "exampleSeesionString";
    for( let i = 0; i < 64; i++ ) {
        str += base_str[ Math.floor( Math.random() * base_str.length ) ];
    }
    return str;
}

const server = http.createServer( (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    let session_cookie = SessionStr();
    res.setHeader('Set-Cookie',
        ['sessions=' + session_cookie + '; Expires=' + new Date
            ( new Date().getTime() + 1000 * 86400 ).toUTCString() + "; HttpOnly;",
            'cookie=test2; Expire=' + new Date( new Date().getTime() + 1000 * 68400 ).toUTCString() + ";"
        ]
    );

    res.end('Hello Session\n');
});

/**
    브라우져가 요청을 하면 setHeader를 통해 쿠키 설정 가능.
    set-Cookie를 하면 배열을 넣어줌으로 여러 쿠키 동시 설정 가능.
    쿠키에 만료시한, 보안 설정, 임의의 값을 넣어 줄 수 있음. 만료 시간은 1일 뒤로 설정 함.
    세션이므로 브라우져에서만 읽을 수 있고, 자바스크립트에서는 엑세스 불가능하게 보안 설정함.

    두개의 예외 사항이 생김.
    - 접속시 무조건 새로운 세션을 발금함.
        - 아무런 의미가 없음.
    - 접속시 확인하여 같은 세션을 발급한다 하더라도 헤더 파일의 크기가 커지면 부하가 심해져서 느려지는 단점이 있음.
 */

server.listen(80, (err) => {
    if( err ) {
        console.log( err );
    }
    console.log( 'Server Running' );
});