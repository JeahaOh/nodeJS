//  특정 변수만 SQL에서 이스케이프(escape)할 경우에는 secape() 함수를 사용할 수 있음.
const mysql = require('mysql');
let val_name1 = 'val1';
let val_name2 = 'val2';

const str = mysql.format
( 'SELECT col1, col2, col3, FROM mytable WHERE col1 = '
 + mysql.escape( val_name1 ) + ' and col2 = ' + mysql.escape( val_name2 ) );

console.log( str );

/**
    escape() 쓰면, 문자열을 ''가 붙고, 숫자는 그대로 출력해줌.
    boolean 변수는 true/false로 알아서 처리 됨.

    escape()를 하는 이유.
    SQL 인젝션 해킹공격을 방어하기 위해. 기본적인 것만 갖춰도 대부분의 해킹은 방어 할 수 있음.
 */