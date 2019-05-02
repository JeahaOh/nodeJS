// File System - 파일 관리 (open, 덮어쓰기?)
const fs = require('fs');

//  test.txt 파일을 쓸 수 있게 핸들 열기
fs.open ('test.txt' , 'a' , (err, fd) => {
    //  w 와 a의 차이가 무엇인지?
    //  실패시 err, 성공시 fd 핸들 리턴.
    if( err ) throw err;

    //  파일 쓰기 수행
    fs.write( fd, "Update" , 4 , ( err, written ) => {
        //  4번째 위치에 Update를 추가함.
        //  실패시에 err, 성공시 기록된 byte 수 리턴.
        if ( err ) throw err;

        console.log( written + " bytes Written");

        fs.close( fd , () => {
            console.log('DONE');
        });
    });
});