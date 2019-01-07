//  update, insert, "delete"문 
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
//'DELETE FROM mytable WHERE val = "WRONG"
( 'DELETE FROM p1_memb WHERE mno = 70', (err, result) => {
    if( err ) {
        console.log( err );
        return;
    };
    console.log('result: ', result );
})

connection.end();


/**     성공시
connected as id 59
result:  OkPacket {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  serverStatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0 }

affectedRows    :   실제로 반영된 영의 개수.
insertID        :   Insert 하였을 경우 '첫 번째'값의 AUTO INCREMENT의 값 리턴. 
*/

/**     실패시
connected as id 55
{ Error: ER_NO_SUCH_TABLE: Table 'studydb.posts' doesn't exist
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
    at Object.<anonymous> (/Users/Jeaha/git/nodeJS/Chapter08 DB/08_01_09.js:20:12)
    at Module._compile (internal/modules/cjs/loader.js:721:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
    at Module.load (internal/modules/cjs/loader.js:620:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
    at Function.Module._load (internal/modules/cjs/loader.js:552:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
    at executeUserCode (internal/bootstrap/node.js:342:17)
  code: 'ER_NO_SUCH_TABLE',
  errno: 1146,
  sqlMessage: "Table 'studydb.posts' doesn't exist",
  sqlState: '42S02',
  index: 0,
  sql: 'DELETE FROM posts WHERE title = "WRONG"' }
*/