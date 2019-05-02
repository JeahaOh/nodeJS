const SockServer = require('socket.io');
const io = new SockServer();

let SockList = [];
//  사용자들의 socket을 관리하기 위한 변수.
const chat = io
.of('/chat')
.on('connection', (socket) => {
    SockList[ socket.id ] = null;
    //  사용자들이 접속하면 해당 변수에 socket의 id를 key값으로 하는 원소를 넣음.
    socket.emit( "msg", "서버에 접속되었습니다." + new Date() );
    //  간단하게 접속했다는 알림을 보냄.

    for( let sock_id in SockList ) {
        if( sock_id != socket.id && SockList[ sock_id ] == null ) {
            SockList[ sock_id ] = socket.id;
            SockList[ socket.id ] = sock_id;
            break;
        }
    }
    //  간단한 for문을 통해서 빈 원소가 있으면 그 해당 원소에 해당 소켓을 연결하고 서로서로 대화방을 연결해 줌.
    //  빈 대화방이 있다면, 연결 하지 않음.

    let opt_socket = SockList[ socket.id ];
    if( opt_socket ) {
        chat.sockets[ opt_socket ].emit("msg", "[상대방]이 서버에 접속했습니다.");
        chat.sockets[ socket.id ].emit("msg", "[ 상대방과 연결되었습니다. ]");
    }
    //  열결이 되었다면 열결 되었다고 알려줌.

    socket.on('msg', ( data ) => {
        const opt_socket = SockeList[ socket.id ];
        if( opt_socket ) {
            chat.sockets[ opt_socket ].emit("msg", "[상대방]" + data);
            chat.sockets[ socket.id ].emit("msg", "[나]" + data);
        }
    })
    //  사용자가 대화를 시작하여 서버로 메세지가 왔을 경우 다른 상대방에게 보내줌.

    .on('disconnect', () => {
        let opt_socket = SockList[ socket.id ];
        if( opt_socket ) {
            chat.sockts[ opt_socket ].emit("msg", "상대방이 접속을 종료했습니다.");
            SockList[ opt_socket ] = null;
        }
        delete SockList[ socket.id ];
    });
    //  접속이 끊길 경우 해당 소켓을 정리하고 상대방이 접속을 종료했다는 메세지를 보내줌.
    //  해당 socket을 SocketList에서 제거.
});

io.listen(3000);

setInterval( () => {
    let count = 0;
    for( let sock_id in SockList ) {
        count++;
    }
    chat.emit("msg", "[ 전체 공지!! 현재 접속자는 총 " + count + "명 입니다.]");
}, 1000 * 10);
//  1초에 한번씩 모든 접속자에게 총 접속자 수를 알려줌.