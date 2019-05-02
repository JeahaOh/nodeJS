/** Pooling
    대게 우리가 한개의 테이블만 다루지 않고, 동시에 접속을 하기도 함.
    이런 경우의 효율을 위해 Pooling이라는 기능이 있음.

    하나의 긴 쿼리가, 긴 시간동안 작업을 하는 경우.
    다른 쿼리들은 대기 해야함.
    Pooling은 이런 경우 여러개의 연결을 미리 대기시켜 놓고 새로운 연결을 통해 다른 쿼리 작업을 진핸함.
    풀 역시도 풀이 가득하면 새로운 작업을 할 수 없음.
    따라서 작업이 끝나면 연결을 반환 해 주는 작업이 필요함.
 */

const mysql = require('mysql');
const pool  = mysql.createPool({
    host    : 'localhost',
    user    : 'study',
    password: '1111',
    database: 'studydb',
    connectionLimit: 5
});

pool.getConnection((err, connection) => {
    pool.query( 'SELECT something FROM sometable', (err, rows) => {
        //  데이터를 처리할 이러저러한 작업들.

        connection.release();
        //  현재 코드에서는 DB와의 접속이 끊겨서 이 이후로는 작업 불가능.
    });
});

/** 기본 최대 접속 연결 수는 10이지만 5로 한정함.
    접속이 5개가 넘으면 더 연결 하지 못하고 대기 해야 함.
    08_01_03.js를 보면 이해가 더 쉬울 것임.
 */