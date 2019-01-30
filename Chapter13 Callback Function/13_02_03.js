const func = () => {
    console.log("process 1");
    func2();
};

const func2 = () => {
    setTimeout( () => {
        console.log("process 2");
        func3();
    }, 1000);
};

const func3 = () => {
    setTimeout( () => {
        console.log("process ended");
    }, 1000);
};

func();

//  중첩 구문의 복잡성이 낮아진 대신, 코드가 조금 더 길어짐.
//  단순해 져서 보기도 좋지만, 함수의 별열화 순차 실행에도 장점이 됨.