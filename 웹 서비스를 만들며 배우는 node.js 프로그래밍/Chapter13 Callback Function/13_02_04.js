const func = () => {
    console.log("process 1");
    func2();
};

let func2_count = 0;
const func2 = () => {
    if( func2_count == 10 ){
        func3();
        return;
    }
    func2_count++;
    setTimeout( () => {
        console.log( "process 2-%d", func2_count );
        func2();
    }, 1000);
};

const func3 = () => {
    setTimeout( () => {
        console.log("process ended");
    }, 1000);
};

func();

/*  03과 다르게 func2를 10번 실행함.
    비동기 함수들은 일반적으로 for문을 사용해서 동작 시키기 어려움.
    for문을 사용하면 동기 함수는 순차적으로 동작 하지만,
    비동기 함수는 명령을 내릴 뿐 실제로 동작되는 시점이 이벤트가 발생하는 시점이 되어 동작이 엉키고,
    원하는 동작을 하지 않게 될 수 있음.
    
    따라서 위와같이 순차적으로 동작 시키면, 그런 걱정없이 명령을 수행함.

    반대로, for문을 사용하면 동기식 코드에서는 안 되지만 비동기에서는 가능한 것 중 하나가 다중 실행임.
*/