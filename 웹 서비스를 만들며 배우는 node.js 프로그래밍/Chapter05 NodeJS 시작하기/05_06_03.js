// File System - 파일 관리 (open)
const fs = require('fs');

// test.txt 파일을 쓸 수 있게 핸들을 염.
fs.open('test.txt' , 'w' , (err, fd) => {
    //  실패시 err를, 성공시 fd라는 핸들을 리턴.
    if(err) throw err;

    //  파일 쓰기 수행
    fs.write( fd, "hello world" , ( err , written ) => {
        //  실패시 err 리턴, 성공시 기록된 바이트 수 리턴.
        if(err) throw err;
        console.log( written + ' bytes Written');

        fs.close( fd , () => {
            console.log('DONE');
        });
    });
});