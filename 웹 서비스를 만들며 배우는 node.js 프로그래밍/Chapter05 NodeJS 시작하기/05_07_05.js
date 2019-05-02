const fs = require('fs');

//  디렉토리 내의 파일 목록을 읽어옴.
fs.readdir('tempdir', ( err , files ) => {
    if( err ) {
        throw err;
    }
    //  파일 목록 출력.
    console.log( files );
});

/**
    배열로 파일 목록을 출력함.
    파일이 없다면 빈 배열을 출력.
    디렉토리는 파일명과 같은 형식으로 출력되기 때문에 fs.stat을 통해 파일인지 디렉토리인지 확인 하는게 좋음.
 */