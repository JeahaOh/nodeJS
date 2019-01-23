let session_cookie_list = [];
//  메모리상에 세션 데이터를 저장할 공간을 선언함.

const server = http.createServer( (req, res) => {
    let session_cookie;

    if( req.headers.cookie ) {
        let cookies = req.headers.cookie.split(";").map( (obj) => {
            let tmep = obj.trim().split("=");
            if ( temp[ 0 ] == 'sessions' ) {
                session_cookie = temp[ i ];
            }
            return obj.trim().split("=");
        });
    }
    /**
        클라이언트 요청에 cookie가 있다면 쿠기를 분석해서 우리가 필요하는 sessions라는 쿠키를 찾음.
        서버에서 클라이언트로 쿠키를 보낼 때는 Set-Cookie라는 헤더 단위로 요ㅇ이 가지만,
        클라이언트가 서버로 보낼 때는 [키 - 값]으로만 오게 됨.

        ';' 기준으로 파싱한 뒤 '=' 으로 나누면 키와 값이 구분이 됨.
        분석한 쿠키 값 중에 sessions라는 이름을 가진 쿠키가 있다면 session-cookie라는 변수에 넣어 보관함.
     */

    let expire_time = new Date().getTime() + 1000 * 86400;
    if ( !session_cookie || !session_cookie_list[ session_cookie ] ) {
        session_cookie = sessionStr();
        session_cookie_list[ session_cookie ] = {
            session_data: {},
            expire: expire_time
        };

        res.setHeader( 'Set-Cookie', 'sessions=' + session_cookie + '; Expire=' + new Date( expire_time ). toUTCString() + "; HttpOnly" );
    }   else {
        session_cookie_list[ session_cookie ].expire = expire_time;
        res.setHeader('Set-Cookie', 'sessions' + session_cookie + '; Expires=' + new Date (expire_time ).toUTCString() + "; HttpOnly;");
    }
    /**
        session-cookie가 존재지 않거나 session_cookie_list 안에도 해당하는 값이 없다면,
        SessionStr() 함수를 이용해 새로운 쿠키를 생성.
        session_cookie_list[ session_cookie ]에 만료시간과 세션 데이터를 입력함
     */

    res.statusCode = 200;
    res.setheader('Content-Type', 'text/plain');
    res.end('Hello Session\n');
});
/**
    위의 코드가 이뤄지고 나면 그 뒤로는 세션을 저장하고, 읽고, 수정할 필요가 있을때 언제든 session_cookie_list[ session_cookie ]안에 있는 session_data 데이터를 사용할 수 있음.
    반대로, 만료가 되어 삭제할 경우에도 언제든 해당 데이터를 삭제할 수 있음. (해당 세션 값만 서버에서 지워버리면 됨.)
    사용자가 로그아웃을 할 경우 해당 세션 값만 서버에서 지우면 간단하게 끝남.

    실제 서비스를 하게 된다면 세션을 어떻게, 어디에 저장할 지, 세션의 수명을 어떻게 관리할 것인지 고민해야함.
 */