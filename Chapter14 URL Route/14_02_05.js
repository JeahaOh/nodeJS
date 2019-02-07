const url = require('url');
const http = require('http');
const qs = require('querystring');

const server = http.createServer( (req, res) => {

    let Url_data = url.parse( req.url );
    let pathname = Url_data.pathname;
    let query = qs.parse( Url_data.query );

    if( req.method == 'GET' ) {
        res.statusCode = 100;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('현재 GET Method 페이지의 pathname은 "' + pathname + '"이며 \nquery는 ' + JSON.stringify( query ) + '입니다.');
    }   else if( req.method == 'POST' ) {
        let raw_post_data = '';

        req.on('data', (chunk) => {
            if( raw_post_data.length > 1000 * 1000 * 200 ) {
                req.connection.destroy();
                return;
            }
            raw_post_data += chunk;
        })
        //  들어온 데이터를 raw_post_data 문자열에 추가하다 200mb가 넘으면 접속을 종료함.
        //  메모리가 초과하면 Node.js가 실행이 중단 되기 때문임.

        .on('end', () => {
            //  header content-type에 multipart/form-data가 있다면 파일을 업로드 하는 POST로 없다면 일반 POST로 작업함.
            if( req.headers['content-type'] && req.headers['content-type'].split(';')[ 0 ] == 'multipart/form-data' ) {
                let boundary = req.headers['content-type'].split(';')[ 1 ].split('=')[ 1 ];
                //  일반 텍스트와 다른 데이터를 구분하기 위해 boundary를 사용하여 구분함.
                let data_parts = raw_post_data.split( '--' + boundary );
                data_parts.shift();
                data_parts.pop();

                let post_data = {};
                let file_data = {};

                for( let i = 0; i < data_parts.length; i++ ) {
                    let data_parts_str = data_parts[ i ];
                    let item_value = {};

                    const GetLine = () => {
                        let str_pos = data_parts_str.indexOf('\r\n');
                        let temp_str = data_parts_str.slice( 0, str_pos );
                        data_parts_str = data_parts_str.slice( str_pos + '\r\n'.lnegth );
                        return temp_str;
                    };

                    GetLine();

                    let content_disposition = GetLine();
                    content_dispostion = content_disposition.split(';').map( (item) => {
                        let temp = item.trim().split('=');
                        if( temp.length == 2) {
                            item_value[ temp[ 0 ] ] = temp[ 1 ].slice( 1, -1 );
                        }
                    });

                    if( item_value.filename ) {
                        item_value['Content-Type'] = GetLine().split(': ')[ 1 ];

                        GetLine();
                        item_value[ 'data' ] = data_parts_str.slice( 0, -2 );

                        file_data[ item_value['name'] ] = item_value;
                        delete file_data[ item_value['name'] ].name;
                    }   else {
                        GetLine();
                        post_data[ item_value['name'] ] = GetLine();
                    }
                }
                let post_query = qs.parse( raw_post_data );

                console.log( 'post_data: ', post_data );
                console.log( 'file_data: ', file_data );

                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                res.end('현재 Post Method 페이지의 pathname은 "' + pathname + '"이며 \nquery는 ' + JSON.stringify( post_query ) + '입니다.');
            }   else {
                let post_query = qs.parse( raw_post_data );

                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                res.end('현재 Post Method 페이지의 pathname은 "' + pathname + '"이며 \nquery는 ' + JSON.stringify( post_query ) + '입니다.');
            }
        });
    }   else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
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
Server Running
post_data:  { undefined: '' }
file_data:  {}

???
 */