const http = require('http');
const server = http.createServer( (req, res) => {
    console.log( req.headers );

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('index');
});

server.listen( 8888, ( err ) => {
    if( err ) {
        console.log( err );
    }
    console.log('Server Running');
});

/*
{ host: 'localhost:8888',
  connection: 'keep-alive',
  'upgrade-insecure-requests': '1',
  'user-agent':
   'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36',
  accept:
   'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,**;q=0.8',
   'accept-encoding': 'gzip, deflate, br',
   'accept-language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
   cookie:
    'JSESSIONID=403AEFC66D74EA19ED0B003E59773175; io=38QpBspdKHIrgNe5AFDD' 
}
 { host: 'localhost:8888',
   connection: 'keep-alive',
   'user-agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36',
   accept: 'image/webp,image/apng,image/*,**;q=0.8',
   referer: 'http://localhost:8888/',
   'accept-encoding': 'gzip, deflate, br',
   'accept-language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
   cookie:
    'JSESSIONID=403AEFC66D74EA19ED0B003E59773175; io=38QpBspdKHIrgNe5AFDD'
}

 */