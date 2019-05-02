const fs = require('fs');

fs.readFile('temp.txt', ( err, data ) => {
    if( err ) {
        console.error("에러로 인해 파일을 열 수 없습니다.\n에러는 다음과 같습니다.");
        console.error( err );
        return;
    }
    console.log( data );
});

fs.unlink('temp.txt', ( err ) => {
    if( err ) {
        console.error("에러로 인해 파일을 삭제할 수 없습니다.\n에러는 다음과 같습니다.");
        console.error( err );
        return;
    }
    console.log('파일이 성공적으로 삭제되었습니다.');
});
// 대부분의 콜백함수의 첫번때 인자는 err, 두번째 인자는 data인 경우가 대다수임.