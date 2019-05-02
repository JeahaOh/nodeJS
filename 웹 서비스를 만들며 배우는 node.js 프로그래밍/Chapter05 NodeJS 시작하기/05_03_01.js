//  http Server.js
/*
Node.js 는 싱글 스레드 기반임.
하나의 스레드가 많은 일을 동시에 처리하기 위해서 이벤트 기반의 비동기 처리가 적합하기 때문임.
*/
const http = require('http');

http.createServer( (req , res) => {
    res.writeHead( 200 , { 'Content-Type' : 'text/plain'});

    /*
    res.write('Hello\n');
    setTimeout(() => {
        res.write('World\n');
        res.end('setTimeout() For res. [ write() or end() ] test\n');
    }, 1000);
    */
    setInterval(() => {
        res.write('Hello World\n');
        res.write('setInterval() For res. [ write() or end() ] test\n');
        //  Interval()은 write()로 test
    }, 1000);
    /*
        write를 호출하면 서버에서 데이터를 묶음 단위로 끊어 보냄.
        이 단위를 "패킷"이라고 함.
        text는 한번에 보내고 비디오나 오디오같은 데이터는 데이터를 읽는 대로 보내는 방식으로 스트리밍 할 수도 있으나,
        실시간 통신을 하려면 브라우져 단에서 처리해야 할 작업이 많다.
    */

}).listen( 8800 , () => {
    console.log( "Server listen started", new Date() );
});
/*
    server.listen(port[, hostname][, backlog[],callback])
    8800이라는 포트 번호를 웹 서버용(리스닝 포트)으로 열고 뒤의 함수를 콜백으로 받음.
*/

console.log( "Server running", new Date() );

//   test : terminal 에서 cURL http://127.0.0.1:8800/