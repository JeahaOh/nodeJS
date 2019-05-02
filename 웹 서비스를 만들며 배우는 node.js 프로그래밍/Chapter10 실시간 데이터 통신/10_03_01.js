const SocketServer = require('socket.io');
const io = new SocketServer();
//  패키지 로드.

const chat = io
.of('/chat')
.on('connection', (socket) => {
    //  connection 이벤트를 통해 클라이언트의 접속을 받으면 인자로 socket을 받음.
    console.log('Connection');
    //  socket을 통해 메세지를 보내거나 이벤트 처리.
    socket.on('msg', (data) => {
        console.log("RECV MSG", data);

        setTimeout( () => {
            //  emit 서버가 클라이언트로 '데이터'를 메세지 형태로 보냄.
            socket.emit("msg", "Send From Server1" + new Date());
            //  주어진 해당 소켓, 자신에게 메세지를 보냄.
            chat.emit("msg", "Send From Server2" + new Date());
            //  현재 접속하고 있는 모든 소켓에 메세지를 보냄.
        }), 1000;
    })
    //  특정 대상에게 메세지를 보낸다면 socket ID를 저장해 놓고, 해당 소켓에만 따로 보내는 형태를 취함.
    
    .on('disconnect', () => {
        console.log("disconnect");
    });
});

io.listen(3000);
//  3000번 포트로 연결을 수신함.