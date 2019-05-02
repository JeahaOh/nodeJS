const url = require('url');
const http = require('http');

const server = http.createServer( (req, res) => {

    let Url_data = url.parse( req.url );
    let pathname = Url_data.pathname;

    let url_pathname = url.parse( req.url ).pathname;
    let url_route = url_pathname.split('/');
    if( url_route .length < 2 || url_pathname == '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('index');
        return;
    }
    /*  브라우져에서 입력한 url을 사용해서 pathname을 분리함.
        해당 pathname을 '/'을 기준으로 분할하여 경로를 만듦.
        만약 pathname이 '/'일 경우에는 화면에 index라고 출력함.
     */
    let statusCode = 200;
    let Header = {
        'Content-Type': 'text/plain; charset=utf-8'
    };

    let output = '';

    switch( url_route[ 1 ] ) {
        case 'board':
            let userid = url_route[ 2 ];
            let boardName = url_route[ 3 ];
            output = '사용자명은 ' + userid + '이며,\n게시판명은 ' + boardName + ' 입니다.';
            break;
        default :
            statusCode = 404;
            output = '404 File Not Found';
    }
    res.writeHead( statusCode, Header);
    res.end( output );
});
/*  브라우져로 보내는 헤더와 본문을 처리.
    switch문을 활용하면 다양한 처리를 하기 훨씬 쉬워짐.
    header를 추가하거나 제거하는 부분은 개별적으로 처리가 가능하며,
    리다이렉트가 필요하거나 에러가 발생할 경우 다른 응답값을 사용자에게 보내는 방법이 훨씬 쉬워짐.

    switch에서 해당사항이 없을 경우
    default로 가면서 404에러를 보내고 '404 File Not Found'를 출력함.

    실제로 서비스를 개발시 위처럼 단순한 하나의 depth로 처리되지 않고, 
    여러 단계를 거쳐야 할 때도 있음.
    그런경우에는 하나의 switch문에 넣지 않고 출력하는 함수로 만들면 됨.
 */

server.listen( 8888, ( err ) => {
    if( err ) {
        console.log( err );
    }
    console.log('SERVER RUNNING');
});