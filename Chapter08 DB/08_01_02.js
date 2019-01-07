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