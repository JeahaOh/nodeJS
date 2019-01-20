let session_cookie_list = [];

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

    res.statusCode = 200;
    res.setheader('Content-Type', 'text/plain');
    res.end('Hello Session\n');
});