//  디렉토리 삭제하기.
const fs = require('fs');

//  디렉토리 내의 파일 목록을 읽어오기.
fs.rmdir('test', (err , files ) => {
    if( err ) {
        throw err;
    }

    //  생성 후에는 메세지를 화면에 출력.
    console.log( err );
});

/**
 * 디렉토리가 비어있지 않다면
 * Error: ENOTEMPTY: directory not empty, rmdir 'tempdir'
 * 
 * 비어있는지 조건문을 통해 확인 후 내부 파일을 전부 삭제, 디렉토리를 삭제하는식으로 코드를 짜야함.
 */