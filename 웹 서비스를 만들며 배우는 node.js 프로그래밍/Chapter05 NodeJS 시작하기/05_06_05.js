// File System - 파일 관리 (open)
//  파일 모듈 선언
const fs = require('fs');
// data.txt 라틑 파일을 쓰기 위한 핸들 열기
const fd = fs.createWriteStream('data.txt', {flags: 'w'});

//  파일 핸들이 생성되면 콜백 반환.
fd.on('open', () => {
    //  파일을 열고 Data라고 기록.
    fd.write("Data");

    //  파일 닫기.
    fd.end( ()=> {
        //  파일을 닫은 뒤 END 출력.
        console.log("END");
    });
});

/*
    node.js는 싱글 스레드이기 때문에 한 동작을 하는동안 다른 동작을 할 수 없다...
*/