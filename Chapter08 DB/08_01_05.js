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

connection.query(
//  'SELECT col1, col2, col3 FROM myTable WHERE col1 =?'
    'SELECT mno, name, email FROM p1_memb WHERE mno = ?',
//  [ 'val1' ]
    [ '1' ], (err, rows, fields) => {
    if ( err ) {
        //  에러 발생시 에러를 출력하고 종료함.
        console.error( err );
        throw err;
    }
    
    //  받은 결과 값의 필드 리스트를 보여줌.
    console.log('\n===filedsList===\n');
    console.log( fields );
    console.log('\n===result===\n');
    //  결과물 출력.
    for (let i = 0; i < rows.length; i++) {
        console.log( 'Row: ', rows[ i ] );
    }
});

connection.end();



/** preparedState문?
    connection.query
    ( 'SELECT col1, col2, col3 FROM mytable WHERE col1 = ? ), [ 'val1' ] );

    connection.query
    ( 'SELECT col1, col2, col3 FROM mytable WHERE col1 = \'val1\'' );

    사실, 위 두 문장은 같은 결과를 보임.
    08_01_06.js 에서 설명.

*/

/** 성공시
connected as id 54

===filedsList===

[ FieldPacket {
    catalog: 'def',
    db: 'studydb',
    table: 'p1_memb',
    orgTable: 'p1_memb',
    name: 'mno',
    orgName: 'mno',
    charsetNr: 63,
    length: 11,
    type: 3,
    flags: 16899,
    decimals: 0,
    default: undefined,
    zeroFill: false,
    protocol41: true },
  FieldPacket {
    catalog: 'def',
    db: 'studydb',
    table: 'p1_memb',
    orgTable: 'p1_memb',
    name: 'name',
    orgName: 'name',
    charsetNr: 33,
    length: 150,
    type: 253,
    flags: 4097,
    decimals: 0,
    default: undefined,
    zeroFill: false,
    protocol41: true },
  FieldPacket {
    catalog: 'def',
    db: 'studydb',
    table: 'p1_memb',
    orgTable: 'p1_memb',
    name: 'email',
    orgName: 'email',
    charsetNr: 33,
    length: 120,
    type: 253,
    flags: 20485,
    decimals: 0,
    default: undefined,
    zeroFill: false,
    protocol41: true } ]

===result===

Row:  RowDataPacket { mno: 1, name: 'user01', email: 'user01@test.com' }
*/
/** 실패시
connected as id 50
{ Error: ER_NO_SUCH_TABLE: Table 'studydb.mytable' doesn't exist
    at Query.Sequence._packetToError (/Users/Jeaha/git/nodeJS/node_modules/mysql/lib/protocol/sequences/Sequence.js:47:14)
    at Query.ErrorPacket (/Users/Jeaha/git/nodeJS/node_modules/mysql/lib/protocol/sequences/Query.js:77:18)
    at Protocol._parsePacket (/Users/Jeaha/git/nodeJS/node_modules/mysql/lib/protocol/Protocol.js:278:23)
    at Parser.write (/Users/Jeaha/git/nodeJS/node_modules/mysql/lib/protocol/Parser.js:76:12)
    at Protocol.write (/Users/Jeaha/git/nodeJS/node_modules/mysql/lib/protocol/Protocol.js:38:16)
    at Socket.<anonymous> (/Users/Jeaha/git/nodeJS/node_modules/mysql/lib/Connection.js:91:28)
    at Socket.<anonymous> (/Users/Jeaha/git/nodeJS/node_modules/mysql/lib/Connection.js:502:10)
    at Socket.emit (events.js:188:13)
    at addChunk (_stream_readable.js:288:12)
    at readableAddChunk (_stream_readable.js:269:11)
    --------------------
    at Protocol._enqueue (/Users/Jeaha/git/nodeJS/node_modules/mysql/lib/protocol/Protocol.js:144:48)
    at Connection.query (/Users/Jeaha/git/nodeJS/node_modules/mysql/lib/Connection.js:200:25)
    at Object.<anonymous> (/Users/Jeaha/git/nodeJS/Chapter08 DB/08_01_05.js:17:12)
    at Module._compile (internal/modules/cjs/loader.js:721:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
    at Module.load (internal/modules/cjs/loader.js:620:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
    at Function.Module._load (internal/modules/cjs/loader.js:552:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
    at executeUserCode (internal/bootstrap/node.js:342:17)
  code: 'ER_NO_SUCH_TABLE',
  errno: 1146,
  sqlMessage: "Table 'studydb.mytable' doesn't exist",
  sqlState: '42S02',
  index: 0,
  sql: "SELECT col1, col2, col3 FROM mytable WHERE col1 = 'val1'" }
/Users/Jeaha/git/nodeJS/node_modules/mysql/lib/protocol/Parser.js:80
        throw err; // Rethrow non-MySQL errors
        ^

Error: ER_NO_SUCH_TABLE: Table 'studydb.mytable' doesn't exist
    at Query.Sequence._packetToError (/Users/Jeaha/git/nodeJS/node_modules/mysql/lib/protocol/sequences/Sequence.js:47:14)
    at Query.ErrorPacket (/Users/Jeaha/git/nodeJS/node_modules/mysql/lib/protocol/sequences/Query.js:77:18)
    at Protocol._parsePacket (/Users/Jeaha/git/nodeJS/node_modules/mysql/lib/protocol/Protocol.js:278:23)
    at Parser.write (/Users/Jeaha/git/nodeJS/node_modules/mysql/lib/protocol/Parser.js:76:12)
    at Protocol.write (/Users/Jeaha/git/nodeJS/node_modules/mysql/lib/protocol/Protocol.js:38:16)
    at Socket.<anonymous> (/Users/Jeaha/git/nodeJS/node_modules/mysql/lib/Connection.js:91:28)
    at Socket.<anonymous> (/Users/Jeaha/git/nodeJS/node_modules/mysql/lib/Connection.js:502:10)
    at Socket.emit (events.js:188:13)
    at addChunk (_stream_readable.js:288:12)
    at readableAddChunk (_stream_readable.js:269:11)
    --------------------
    at Protocol._enqueue (/Users/Jeaha/git/nodeJS/node_modules/mysql/lib/protocol/Protocol.js:144:48)
    at Connection.query (/Users/Jeaha/git/nodeJS/node_modules/mysql/lib/Connection.js:200:25)
    at Object.<anonymous> (/Users/Jeaha/git/nodeJS/Chapter08 DB/08_01_05.js:17:12)
    at Module._compile (internal/modules/cjs/loader.js:721:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
    at Module.load (internal/modules/cjs/loader.js:620:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
    at Function.Module._load (internal/modules/cjs/loader.js:552:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
    at executeUserCode (internal/bootstrap/node.js:342:17)
 */