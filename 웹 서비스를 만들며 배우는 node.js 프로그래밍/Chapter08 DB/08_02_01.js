const redis = require('redis'),
    //  Redis 모듈 가져오기.
    client = redis.createClient( 6379 , '127.0.0.1' );
    //  port 번호와 IP
    client.auth( '1111' );
    //  PWD

//  redis의 SET과 같다.
client.set('item:asdf', 'some val', 'ex', 100, ( err, result ) => {
    console.log( 'Resule: ' );
    console.log( result );
});

/*  만료시간과 함께 SET 결과는 같음...?
client.setex('item:asdf', 100, 'some val', ( err, result ) => {
    console.log( 'Resule: ' );
    console.log( result );
});
*/

/**
terminal

127.0.0.1:6379> GET item:asdf
"some val"

 */