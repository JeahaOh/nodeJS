// File System - 파일 관리 (writeFile)
const fs = require('fs');

fs.writeFile('test.txt', 'Hello World2', (err) => {
    //  writeFile(경로를 포함한 파일명[, 입력할 내용][, 입력후 리턴 받을 콜백함수])
    //  기존에 파일이 있다면 대체, 없다면 생성
    if(err) throw err;
    console.log('File Write Completed');
});