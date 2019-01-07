const mysql = require('mysql');

let val_name1 = 'val1';
let val_name2 = 'val1';


//  만약 뭐리를 화면에 출력하고자 한다면 다음과 같이 사용 할 수 있음.
const str = mysql.format
( 'SELECT col1, col2, col3 FROM mytable WHERE col1 = ? and col2 = ?',
    [ val_name1, val_name2 ] );

console.log( str );