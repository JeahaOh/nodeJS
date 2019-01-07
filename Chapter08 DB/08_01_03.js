const mysql = require('mysql');
const pool  = mysql.createPool({
    host    : 'localhost',
    user    : 'study',
    password: '1111',
    database: 'studydb',
    connectionLimit: 5
});

for (let i = 0; i < 6; i++) {
    pool.getConnection( (err, connection) => {
        if ( err ) {
            console.log('ERROR:', err);
            return;
        }

        connection.query( 'SELECT something FROM sometable', (err, rows) => {
            //  데이터를 사용한 이러저러한 작업들.
            console.log( new Date() );
            setTimeout( () => {
                connection.release();
            }, 3000);

            //  현재 코드에서는 DB와의 접속이 끊어져서 이 이후로는 작업 불가능.
        });
    });
}

/** 결과 
    2019-01-07T06:45:54.124Z
    2019-01-07T06:45:54.126Z
    2019-01-07T06:45:54.126Z
    2019-01-07T06:45:54.126Z
    2019-01-07T06:45:54.126Z
    2019-01-07T06:45:57.127Z

    최대 5개의 연결 가능 한 상황에서 6개의 요청을 보냈고,
    5개는 바로 응답이 옴, 한개는 대기하다 나중에 응답 받음.

    어떤 연결 방식이라도 결국 connection이라는 리턴 값을 받고 그 리턴 값을 통해서 쿼리문을 실행할 수 있음.

    connection Handle을 얻어서 query를 보내고 리턴 값을 받은뒤,
    작업을 처리하고 나서 핸들을 채제함.

 */