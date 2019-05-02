//  mysql db 연결 간단한 테스트 코드.
const mysql         = require('mysql');
//  node.js용 mysql 모듈, java로 따지면 JDBC.
//  npm mysql로 설치.
const connection    = mysql.createConnection({
    host    :   'localhost',
    user    :   'study',
    password:   '1111',
    database:   'studydb'
});
/** 
    접속 연결을 위한 정보,
    입력 하지 않을 경우 기본값인 정보는 두
    가지임 host(localhost), port(3306)
 */

connection.connect( (err) => {
    if (err) {
        console.log('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});
//  접속상의 에러를 보여줌.

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if (err) throw err;
    console.log('The solution is : ', rows[0].solution);
});
/*  connect 함수의 결과가 나온 후에 순차적으로 query함수가 실행됨.
    콜백 함수가 있는 함수들은 대부분 비동기 함수임. (일종의 transaction?)
*/

connection.end();
/** end()는 콜백 함수가 있고, destroy()를 사용하면 콜백은 없음.
    destroy()를 통해 종료할 시에는 중간의 쿼리와 상관 없이 모든 접속을 종료함.
    따라서 결과를 볼 수 없을 수도 있음.

    동기와 비동기의 차이 때문에 결과 값이 달라지므로 가급적이면 end()를 통해 연결 해제 하는것이 좋다.
 */