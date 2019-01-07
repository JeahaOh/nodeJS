//  "update", insert, delete문 
//  데이터를 조작/변경하는 쿼리문이므로 결과 값의 형태가 조금 다름.

const mysql         = require('mysql');
const connection    = mysql.createConnection({
    host    :   'localhost',
    user    :   'study',
    password:   '1111',
    database:   'studydb'
});

connection.connect( (err) => {
    if (err) {
        console.log('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

connection.query
//'UPDATE test SET col1 = "table2" WHERE col1 = "table"
( 'UPDATE p1_memb SET name = "tt" WHERE mno = 71', (err, result) => {
    if( err ) {
        console.log( err );
        return;
    };
    console.log('result: ', result );
})

connection.end();

/** 성공시
connected as id 62
result:  OkPacket {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  serverStatus: 2,
  warningCount: 0,
  message: '(Rows matched: 1  Changed: 1  Warnings: 0',
  protocol41: true,
  changedRows: 1 }
 */
