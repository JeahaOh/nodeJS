const exec = require('child_process').exec;
//  exec는 콜백 함수를 입력 받게 되어있음.

exec('ls -al', (error, stdout, stderr) => {
    if(error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    //  해당 명령줄에서 표준 출력(모니터를 이용한 출력)함.
    console.log(`stderr: ${stderr}`);
    //  해당 명령줄에서 표준 에러로 출력될 때 리턴 값을 받게 됨.
});

/**
 *  리턴 값이 모니터를 통해 출력되는 것을 가정하여 만들어진 경우가 대부분이라
 *  시스템 기본 명령을 사용할 때에는 문자열을 파싱하는 부분이 많이 필요함.
 *  따라서 편리하게 하기 위해 API를 적극 사용을 권장함. 
 */