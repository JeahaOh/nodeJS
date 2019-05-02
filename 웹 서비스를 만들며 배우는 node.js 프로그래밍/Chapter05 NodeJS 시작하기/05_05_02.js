const qs = require('querystring');
const http = require('http');

const post_data = qs.stringify({
    'key1': 'val1'
    ,
    'key2': 'val2'
});

const post_options = {
    host: 'ptsv2.com',
    //  POST나 GET을 테스트 하는 사이트.
    port: '80',
    path: '/t/asdf',
    method: 'POST',
    headers : {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': post_data.length
    }
};

const post_req = http.request(post_options, (res) => {
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log('Respose: ' + chunk);
    });
});

post_req.write(post_data);
post_req.end();

/*
많은 API 서버가 POST 를 사용함.
*/