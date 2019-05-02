// File System
const fs = require('fs');
//  기록할 문자열 생성
let str = [];
for( let j = 0; j < 1000000; j++) {
    str += "0123456789";
}
//  파일을 쓸 핸들 열기.
const writeopen = fs.createWriteStream('results2.txt', {flags: 'w'});
writeopen.on('open', ( data ) => {
    console.log( "open:" , data );
    setTimeout(() => {
        console.log( "Start");
        //  루프를 돌면서 실제로 파일을 씀.
        for( let i = 0; i < 100; i++) {
            writeopen.write( str );
        }
        console.log( "END" );
    }, 0);

    setTimeout( () => {
        //  타이머에 의해 화면에 Test2를 출력.
        console.log( 'Test2' );
    }, 10);

    //  화면에 Test1을 출력.
    console.log( 'Test1' );

    setTimeout( () => {
        writeopen.end( () => {
            //  파일 닫기.
            console.log('File Close');
        });
    }, 10000);
});

/*
    실행 결과
    Test2가 출력 되는 과정과 파일을 쓰는 과정이 동시에 일어나지 않음.
    대용량 파일을 입출력하게 될 경우 다른 이벤트들은 대기 하게 될 것임.
    대용량 파일의 입출력을 한다면 널티 쓰레드를 이용하여 다중 처리 하도록 해야함.
 */