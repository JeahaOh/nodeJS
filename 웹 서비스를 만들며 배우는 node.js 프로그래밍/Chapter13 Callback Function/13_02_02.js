const func = () => {
    console.log("process 1");
    setTimeout( () => {
        console.log("process 2");
        setTimeout( () => {
            console.log("process ended");
        }, 1000);
    }, 1000);
};

func();

//  콜백 지옥의 시작.