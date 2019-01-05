const cluster = require('cluster');
cluster.setupMaster({
    exec: 'worker.js',
});
//  클러스터의 환경 설정하는 부분
//  worker.js를 실행하도록 선언함.

const worker = cluster.fork();
worker.on('message', (msg) => {
    console.log(msg);
});
//  설정된 환경을 기준으로 클러스터를 실행, 메세지가 오면 해당 메세지를 화면에 출력하도록 이벤트를 작성함.