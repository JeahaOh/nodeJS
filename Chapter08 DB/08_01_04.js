const mysql = require('mysql');
const pool  = mysql.createPool({
    host    : 'localhost',
    user    : 'study',
    password: '1111',
    database: 'studydb',
    connectionLimit: 5
});

pool.getConnection( (err, connection) => {
    connection.query( 
        'SELECT mno, name, email FROM p1_memb',
        (err, rows, fields) => {
            connection.release();
            if ( err ) {
                //  에러가 발생할 경우 에러를 표시하고 종료.
                console.error( err );
                return;
            }

            //  받은 결과 값의 필드 리스트를 보여줌.
            console.log( '\n====fields====\n');
            console.log( fields );
            console.log( '\n====results====\n');

            //  결과물을 출력함.
            for (let i = 0; i < rows.length; i++) {
                console.log( 'ROW: ', rows[ i ] );
            }
        }
    );
});

/** p1_memb table에서 mno, name, eamil을 가져옴.
    에러는 err에 담겨옴. 만약 정상적으로 결과 값을 가져올 수 있다면 rows에 담겨 오게 됨.
    에러가 있다면 rows에는 아무 값이 들어오지 않고,

    에러가 없다면 err에 아무 값이 없으므로 err을 먼저 확인 하여,
    에러가 발생하면 에러를 먼저 처리해 주면 됨.

    네트워크 에러라던지 쿼리에러도 있으니 반드시 예외 처리를 해주는게 좋음.

    결과물은 배열의 형태로 출력 됨.
    결과의 개수는 rows.length를 통해 알 수 있음.

    fields는 결과 테이블의 컬럼 목록을 리턴함.
    row에 대한 정보를 보여주는데 어딘가 쓸모가 있을 것임.
 */

 /** 성공 결과 값
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
ROW:  RowDataPacket { mno: 1, name: 'user01', email: 'user01@test.com' }
ROW:  RowDataPacket { mno: 2, name: 'user02', email: 'user02@test.com' }
ROW:  RowDataPacket { mno: 3, name: 'user03', email: 'user03@test.com' }
ROW:  RowDataPacket { mno: 4, name: 'user04', email: 'user04@test.com' }
ROW:  RowDataPacket { mno: 5, name: 'user05', email: 'user05@test.com' }
ROW:  RowDataPacket { mno: 6, name: 'user06', email: 'user06@test.com' }
ROW:  RowDataPacket { mno: 7, name: 'user07', email: 'user07@test.com' }
ROW:  RowDataPacket { mno: 8, name: 'user08', email: 'user08@test.com' }
ROW:  RowDataPacket { mno: 10, name: 'user10', email: 'user10@test.com' }
ROW:  RowDataPacket { mno: 11, name: 'mnm', email: 'mnm@mnm.com' }
ROW:  RowDataPacket { mno: 12, name: 'tnt', email: 'tnt@tnt.com' }
ROW:  RowDataPacket { mno: 13, name: 'm2u', email: 'm2u@m2u.com' }
ROW:  RowDataPacket { mno: 14, name: 'tcp', email: 'tcp@tcp.com' }
ROW:  RowDataPacket { mno: 19, name: 'Isolata', email: 'I@test.com' }
ROW:  RowDataPacket { mno: 23, name: 's100', email: 's100@test.com' }
ROW:  RowDataPacket { mno: 25, name: 't100', email: 't100@test.com' }
ROW:  RowDataPacket { mno: 29, name: 't101', email: 't101@test.com' }
ROW:  RowDataPacket { mno: 33, name: 't200', email: 't200@test.com' }
ROW:  RowDataPacket { mno: 43, name: 'mvc', email: 'mvc@test.com' }
ROW:  RowDataPacket { mno: 49, name: 'm103', email: 'm103@test.com' }
ROW:  RowDataPacket { mno: 55, name: 'ms808', email: 'ms808@test.com' }
ROW:  RowDataPacket { mno: 56, name: 'ts909', email: 'ts909@test.com' }
ROW:  RowDataPacket { mno: 65, name: 's808', email: 's808@808.com' }
ROW:  RowDataPacket { mno: 69, name: 'sks', email: 'sks@sks.com' }
*/

/** 실패 결과 값
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
    at PoolConnection.query (/Users/Jeaha/git/nodeJS/node_modules/mysql/lib/Connection.js:200:25)
    at pool.getConnection (/Users/Jeaha/git/nodeJS/Chapter08 DB/08_01_04.js:11:16)
    at Handshake.onConnect (/Users/Jeaha/git/nodeJS/node_modules/mysql/lib/Pool.js:64:7)
    at Handshake.<anonymous> (/Users/Jeaha/git/nodeJS/node_modules/mysql/lib/Connection.js:502:10)
    at Handshake._callback (/Users/Jeaha/git/nodeJS/node_modules/mysql/lib/Connection.js:468:16)
    at Handshake.Sequence.end (/Users/Jeaha/git/nodeJS/node_modules/mysql/lib/protocol/sequences/Sequence.js:83:24)
    at Handshake.Sequence.OkPacket (/Users/Jeaha/git/nodeJS/node_modules/mysql/lib/protocol/sequences/Sequence.js:92:8)
    at Protocol._parsePacket (/Users/Jeaha/git/nodeJS/node_modules/mysql/lib/protocol/Protocol.js:278:23)
    at Parser.write (/Users/Jeaha/git/nodeJS/node_modules/mysql/lib/protocol/Parser.js:76:12)
  code: 'ER_NO_SUCH_TABLE',
  errno: 1146,
  sqlMessage: "Table 'studydb.mytable' doesn't exist",
  sqlState: '42S02',
  index: 0,
  sql: 'SELECT row1, row2, row3 FROM mytable' }
 */