//  File System - 파일 사용법 입문 (unlink)
const fs = require('fs');
//  fs (File System)을 사용하겠다고 선언함.

fs.unlink('/tmp/hello', ( err ) => {
    //  unlink 파일 삭제 함수.
    if( err ) throw err;
    //  파일 삭제 실패시 err를 던짐
    console.log("successfully delete /tmp/hello");
    //  파일 삭제 성공시 출력.
});

/*
    파일 관련 대부분의 함수는 콜백 함수를 통해서 성공/실패를 리턴함.
    이유 -> 파일 함수들이 CPU 내부에서 일어나는 일이 아닌, CPU 보다 상대적으로 느린 '디스크'자원을 참조하여 시차가 발생하기 때문임.
        상대적으로 느린, '네트워크', '디스크' 와 같은 자원은 다루는 함수는 대부분 콜백 형태로 느리게 응답함.
*/