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

//  실제 동작하는 코드는 아님.
//  호출 하는 부분을 봐라.