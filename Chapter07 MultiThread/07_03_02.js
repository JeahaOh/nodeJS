//  마스터와 클러스터 사이의 통신에서 클러스터가 마스터에게 메세지를 보낼 때 process.send를 사용함.
//    어떤식으로 통신 하는지 확인해보는 예제.
const cluster = require('cluster');

if (cluster.isMaster) {
    const worker = cluster.fork();
    //  fork()를 통해 클러스터를 실행.
    let timeout;

    console.log( 1 );

    //  listening이라는 이벤트가 발생하면 내부의 코드를 실행.
    //  worker cluster로 recvmsg를 보냄.
    worker.on('listening', (address) => {
        console.log( 3 );
        worker.send('recvmsg');
    });

    //  worker에서는 네트워크 서벌르 샐행.
    //  listen 대기상태임.
    //  message 이벤트 발생시 메세지 내용을 보고 recvmsg일 경우 TEST를 출력.
}   else if (cluster.isWorker) {
    const net = require('net');
    const server = net.createServer( (socket) => {  });

    server.listen(8000);

    console.log( 2 );
    process.on('message', (msg) => {
        console.log( 4 );
        if (msg === 'recvmsg') {
            console.log( 'TEST' );
        }
    });
}

/** 마스터에서는 해당 클러스터에서 이벤트 핸들러를 통해 특정 이벤트에 개한 동작을 선언할 수 있음.
 *  마찬가지로, cluster에서도 proccess.on을 통해 마스터로 오는 메세지 이벤트를 처리할 핸들러를 선언할 수 있음.
 *  즉,
 *  마스터에서는 클러스터에게 worker.send라는 명령어를 통해 메세지를 보내고,
 *  클러스터는 process.on이라는 이벤트 핸들러 처리를 통해 해당 메세지를 수신함.
 * 
 *  process.send와 worker.on을 대칭적으로 이해하면 됨.
 *  클러스터 -> 마스터 
 *  process.send -> worker.on
 *  마스터 -> 클러스터 
 *  worker.send -> prosess.on
 * 
 *  한개의 파일에서 클러스타와 마스터로 동작 했지만 파일을 분리 해 보도록 하자.
 */