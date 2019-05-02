const http = require('http');

http.get('http://www.google.co.kr', (res) => {
    let body = '';
    res.on('data', (d) => {
        body += d;
    });
    //  http://www.google.co.kr 에서 data를 받아 옴.
    
    res.on('end', () => {
        console.log( "DATA: ", body );
    });
    //  받아온 data를 출력.
    
}).on('error', (e) => {
    console.log( "Error:", e);
});