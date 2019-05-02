const user = require('./user.js');
const board = require('./board.js');

const ServerFunction = () => {
    if( condition == 'user' ) {
        user.main();
    }   else if( condition == 'board' ){
        board.main();
    }
};

ServerFunction.createServer();
/*
    실제 동작하는 코드는 아님. 호출 하는 부분을 봐라.
    require를 이용하여 다른 파일을 불러오고,
    불러온 내용을 변수에 저장한 뒤 서버를 실행하면서 
    특정 이벤트(사용자의 페이지 요청 등)에 해당하는 변수를 호출하여 실행함.
*/