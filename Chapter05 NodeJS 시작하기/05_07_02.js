/*  rename 파일 이동/이름변경
    rename 함수로 파일 이름 변경이 가능하지만,
    파일 아동도 가능함.
*/
const fs = require('fs');

fs.rename('oldname.txt', 'newname.txt', function() {
    console.log( 'File Renamed' );
});