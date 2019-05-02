/*  클러스터(Cluster, 다중화)는 자식 프로세스와 달리, 같은 작업을 여러 명이 동시에 작업하는 것.
    클러스터는 여러 개체가 같은 작업을 병렬적으로 진행하는 것임.
    아래 코드는 Node.js 정식 Cluster 기본 샘플 코드임.
 */
const cluster = require('cluster');
const http = require('http');
//  모듈 불러오기.

if (cluster.isMaster) {     //  마스터 부분.
    //  마스터로 동작 하는가, 서브 클러스터로 역할을 하는가 체크,
    //    만약 다시 호출 된다면 클러스터로 동작 하게 됨.

    let numReqs = 0;
    setInterval( () => {
        console.log('numReqs =', numReqs);
    }, 1000);

    const messageHandler = (msg) => {
        if (msg.cmd && msg.cmd == 'notifyRequest') {
            console.log('Noti!');
            numReqs += 1;
        }
    }
    //  이벤트 핸들러 함수. 호출 될 경우 메세지는 msg로 받게 되고,
    //  해당 메세지에서 cmd가 notifyRequest일 경우 화면에 'Noti!'를 출력한뒤 Req에 1추가,
    //  추가된 Req는 1초에 한 번씩 화면에 출력함.

    const numCPUs = require('os').cpus().length;
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
        console.log("New Fork!");
    }
    //  위 코드는 현재 CPU의 개수를 알아내어 서브 클러스터를 그 CPU 개수만큼 동작 시킴.

    Object.keys(cluster.workers).forEach( (id) => {
        cluster.workers[id].on('message', messageHandler);
    });
    //  앞서 포크한 클러스터에서 message가 올 경우
    //  messageHandler라는 함수를 호출하도록 이벤트 핸들러를 등록하는 부분.

}   else {                      //  클러스터 부분.
    http.Server( (req, res) => {
        res.writeHead(200);
        res.end('Hell The NodeJS\n');

        process.send({ cmd: 'notifyRequest' });
    }).listen(8000);
}

/** 마스터일 경우 클러스터들을 Fork, 이벤트를 등록하여 이벤트가 올 경우 숫자 1을 추가하는 동작을 함.
 *  화면에는 1초마다 한 번씩 출력해 주는 형식으로 동작함.
 *  웹 서버로 요청이 들어오면 사용자에게  Hell The NodeJS를 보내주고,
 *  마스터로 notifyRequest라는 cmd를 메세지로 보냄.
 *  
 *  CPU의 코어 만큼 New Fork!가 표시 된 후 1초에 한번 씩 현재까지 들어온 웹 요청을 표시하는 동작.
 *  잘 이해하고 활용한다면 좋은 샘플인...
 * 
 */