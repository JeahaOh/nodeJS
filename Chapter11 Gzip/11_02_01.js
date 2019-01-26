const http = require('http');
const zlib = require('zlip');
const fs = require('fs');

const Server = http.createServer( (req, res) => {
    const output = fs.readFileSync('About this Documentation _ Node.js v6.16.0 Documentation', 'utf8');
    //  동기 방식으로 파일을 불러옴.
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    let acceptEncoding = req.headers["accept-encoding"];
    if( !acceptEncoding ) {
        acceptEncoding = '';
    }
    /*  자신이 이해할 수 있는 압축 방식 목록을 헤더에 넣어서 서버로 보내줌.
        해당 목록은 헤더에서 accept-encoding이라는 이름으로 오게 되고, 가끔 해당 값이 오지 않는 경우도 있음.
        indexOf를 사용해서 해당 압축 방식을 지원하는지 확인함.
        작은 파일의 경우 deflate가 유리하기 때문에 먼저 확인함.
    */

    if( acceptEncoding.indexOf("deflate") > -1 ) {
        zlib.deflat( output, (err, buffer) => {
            if( err ) {
                res.end( outpust );
                return;
            }
            res.setHeader('Content-Type', 'deflate');
            res.end( buffer );
        });
        /*  모듈에 있는 deflate 함수는 문자열(혹은 buffer)를 입력 받아 deflate 함수를 사용해서 압축한 뒤 콜백을 넘겨줌.
            만약 에러가 발생하면 압축을 하지 않고 그대로 클라이언트에게 전송함.
            정상적인 경우에만 압축 결과를 브라우져를 통해 전달함.
        */
    }   else if( acceptEncoding.indexOf("gzip") > -1 ) {
        zlib.gzip( output, ( err, buffer ) => {
            if( err ) {
                res.end( output );
                return;
            }
            res.setHeader('Content-Type', 'gzip');
            res.end( buffer );
        });
    }   else {
        res.end( output );
    }
});

Server.listen( 8888, ( err ) => {
    if( err ) {
        console.log( err );
    }
    console.log('Server Running');
});