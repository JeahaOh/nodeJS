const data = require('./data.js');
const ServerFunction = () => {
    data.main();
    console.log( data.list );
};

// ServerFunction.createServer();

/*
    exports를 통해서 외부로 내보낼 함수 혹은 변수를 선언하고,
    메인에서는 그 함수 혹은 변수를 사용 할 수 있음.
*/