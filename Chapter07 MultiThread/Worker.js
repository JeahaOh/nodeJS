setInterval( ()=> {
    process.send('worker');
}, 1000);

//  클러스터에게 worker라는 메세지를 보내기만 하는 기능임.

/**
 *  대형 프로젝트에서 안정적으로 프로그램이 돌아가야 하기 때문에,
 *  어떤 에러가 나도 시스템이 멈추면 안되기에 이와 같은 방법을 응용할 시 조금 여유있는 설계가 가능함.
 *  마스터에서는 클러스터 형태로 나뉘어 있는 프로그램들을 동작만 시키고,
 *  실제 동작들은 클러스터에서 동작하도록 설계하는 방법임.
 */