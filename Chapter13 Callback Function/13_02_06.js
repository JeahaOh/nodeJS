let idx = 0;
//  현재 실행 되고 있는 index

const CallbackProcess = () => {
    if( idx < Func_list.length ) {
        //  Func_list라는 '배열'에서 idx번째 '실행'
        Func_list[ idx ]();
        /*  Func_list[ 0 ]();, Func_list[ 1 ](); 등을 실행하는것
            JS에서는 배열에 함수도 담을 수 있으므로 이와 같이 숱차적으로 실행할 수 있음.
        */

        idx++;
    }   else {
        console.log("Process Ended");
    }
};
//  배열의 개수보다 작을경우에 순차적으로 실행,
//  같을 경우 종료.

const Func_list = [
    () => {
        setTimeout( () => {
            console.log("List1");
            CallbackProcess();
        }, 1000);
    },
    () => {
        setTimeout( () => {
            console.log("List2");
            CallbackProcess();
        }, 1000);
    },
    () => {
        setTimeout( () => {
            console.log("List3");
            CallbackProcess();
        }, 1000);
    },
    () => {
        setTimeout( () => {
            console.log("List4");
            CallbackProcess();
        }, 1000);
    },
    () => {
        setTimeout( () => {
            console.log("List5");
            CallbackProcess();
        }, 1000);
    }
];

const main = () => {
    CallbackProcess();
};

main();