const function_name = new Function();
function_name.on('event1', () => {
    callback_process1();
})
.on('event2', () => {
    callback_process2();
});

function_name.startServer();
/*  on이라는 이벤트 리시버를 통해 이벤트를 대기.
    event1, event2등의 형태는 일반적으로
    on('message'), on('connect')등의 메세지로 받거나 연결 되었을 때 함수가 호출되는 형태임.

    주로 이런 형태의 함수는 일회성이 아닌 여러번으 이벤트를 받는 서버 형태의 역할을 할 때 주로 사용함.

    반면에, 이런식으로 하면.
    func_name( some_input, ( err, result ) => {
        process_function();
    });
    한번의 실행으로 한번의 이벤트만 실행되는 코드.
*/