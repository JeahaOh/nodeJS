const item = require('./item.js');

console.log( item() );
item.test();


/**
    이와 같은 방법을 사용하면 처음에 선언하는 부분에서 초기화를 진행 할 수도 있음.
    예로 MySQL 처럼 서버에 접속하기 위해서 특별한 정보가 필요할 때,
    처음 선언하는 부분에서 초기화를 진행하고 그 뒤 필요한 함수들을 실행하는 식으로 사용할 수 잇음.

    require/exports를 사용하면 외부에서는 내부에서 어떤 식으로 동작하는지 알 수 없는 상태에서
    동작을 구현할 수 있으므로, 작업 분담이나 기능별 분담하여 작업 단순화에 좋음.
 */