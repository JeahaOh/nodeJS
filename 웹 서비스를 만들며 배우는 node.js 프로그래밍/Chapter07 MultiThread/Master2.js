const cluster = require('cluster');
cluster.setupMaster({
    exec: 'worker2.js',
});

const worker = cluster.fork();
worker.on('message', (msg) => {
    console.log(msg);
}).on('error', () => {
    console.log('ERROR');
}).on('exit', (code, signal) => {
    if (signal) {
        console.log(`worker was killed by signal: ${signal}`);
    }   else if (code !== 0) {
        console.log(`worker exited with error code: ${code}`);
    }   else {
        console.log('worker success!');
    }
});

/*
    약간의 에러/예외처리가 추가됨.
    워커에서는 실행 후 5초 뒤 에러코드를 실행함.
    
*/