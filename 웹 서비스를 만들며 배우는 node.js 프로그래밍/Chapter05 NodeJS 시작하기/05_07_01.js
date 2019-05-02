/*  파일 삭제 unlink
    파일 삭제는 간단함.
    파일 패스만 적으면 끝남.
    콜백 함수를 이용해서 파일이 삭제 되었는지 확인도 가능.
*/
const fs = require('fs');

fs.unlink('results.txt', () => {
    console.log( 'File Unlinked' );
});