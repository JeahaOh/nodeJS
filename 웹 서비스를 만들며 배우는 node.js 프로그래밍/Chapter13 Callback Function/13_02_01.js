handleOpen( (hd) => {
    hd.handleProcess( (err, result) => {
        if( err ) {
            console.error( err );
            handleClose( hd );
            return;
        }

        someProcess( result );
        handleClose( hd );
    });
});
/*  단순한 콜백함수의 예임.
    실제로 사용하면 파일을 열고, 네트워크를 열고, DB와 접속하는 과정에서 구문이 중첩되고,
    또 중첩돼서 정신없는 코드가 되어 버림.

    이 솔루션으로 promise나 await, async라는 모듈을 사용하는 방법과 그냥 함수화 하는 방법이 있음.
    그리고 가장 기본적인 방법으로는 함수를 순차적으로 호출하는 방법이 있음.
    비동기는 setTimeout을 이용해서 코드를 구현함.
 */