exports.main = () => {
    if( condition == 'write' ) {
        board_write();
    }   else if( condition == 'read') {
        board_read();
    }   else if( condition == 'modify') {
        board_modify();
    }
};

const board_write = () => { };
const board_read = () => { };
const board_modify = () => { };

/**
    exports를 통해서 외부로 보낼 함수 혹은 변수를 선언,
    메인에서는 그 함수 혹은 변수를 사용함.
    Main.js, user.js, board.js에서는 단 하나의 함수를 생성 호출 하였지만,
    필요에 따라 여러 함수나 변수를 선언, 호출할 수 있음.
 */