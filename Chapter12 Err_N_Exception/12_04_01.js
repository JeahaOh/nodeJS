process.env.TZ = 'Asia/Seoul';
//  현재 시간대를 서울로 지정함.

console.log
( "\033[36m" + new Date() + "\033[0m: Node Version: [" + process.version + " ]" );
console.log
( "\033[35m" + new Date() + "\033[0m: [" + __filename + "] Started." );
// 출력하는 문장에 색을 입힘. (현재 시간에 하늘색.)

Object.defineProperty( global, '__stack', {
    get: () => {
        let orig = Error.prepareStackTrace;
        Error.prepareStackTrace = ( _, stack) => {
            return stack;
        };
        let err = new Error;
        Error.captureStackTrace( err, arguments.callee );
        let stack = err.stack;
        Error.prepareStackTrace = orig;
        return stack;
    }
});

Object.defineProperty( global, '__line', {
    get: () => {
        return __stack[ 1 ].getLineNumber();
    }
});
//  __line을 통해 어느 라인에서 문제가 생겼는지 확인함.

const fs = require('fs');

//  Logging Module
//  현재 시간을 파일명으로 하여 로그를 저장함.
global.Logger = ( log ) => {
    const getDateStr = () => {
        return new Date().getFullYear() + "_" + ("0" + (1 + new Date().getMonth())).slice(-2) + "_" + ("0" + new Date().getDate()).slice(-2);
    };
    //  로컨 시간을 문자열 형태로 변환하는 함수. 파일명으로 사용함.

    let stack = ( new Error() ).stack.toString().split("\n")[ 2 ].split(" ").pop().split(":");
    /*  현재 Logger 함수를 호출한 라인을 알기위한 부분.
        에러 로그를 강제로 호출하여 문자열 형태로 파싱하는 함수.
        강제로 에러를 호출한 뒤 문자열을 줄 단위로 나누고, 해당 문자열에 표시된 현대 줄을 확인함.
    */  

    let str = new Date() + ": [" + stack[ 0 ].substr(1)+ "] Line: " + stack[ 1 ];
    //  현재 시간과 라인을 표시하기 위한 문자열. 이전에 가져온 라인에 관한 정보를 넣음.

    if( log ) {
        str += " " + JSON.stringify( log );
        //  주어진 로그를 문자열로 반환한 뒤 앞에서 생성한 션재 시간과 라인 문자열에 합침.
    }
    let k = __filename.split("/");
    k.pop();

    let str_dsp = "\u001b[36m" + new Date() + "\u001b[0m: [" + stack[ 0 ].substr(1) + "] Line: " + stack[ 1 ];
    //  현재 시간과 라인을 표시하기 위한 문자열. 이전에 가져온 라인에 관한 정보를 넣음.

    if( log ) {
        str_dsp += " " + JSON.stringify( log, null, "\t" );
        //  주어진 로그를 문자열로 반환한 뒤 앞에서 생성한 션재 시간과 라인 문자열에 합침.

        str_dsp = str_dsp.replace("\"type\" :\"init\"", "\"type\": \u001b[33m\"init\"\u001b[0m" );
        str_dsp + str_dsp.replace("\type\": \"error\"", "\"type\":\u001b[101m\"error\"\u001b[0m" );
        //  입력받은 log에 type error 혹은 init이 있으면 해당 부분의 색을 변경함.
    }

    console.log( str_dsp );
    fs.appendFile( k.join("/") + '/' + getDateStr() + ".log", str + "\r\n" , ( err ) => {
        if( err ) {
            console.log( str );
        }
    });
    /*  str_dsp눈 화면에 출력.
        str을 파일로 출력함.
        앞에서 생성한 문자열에 .log를 붙여서 YYYY_MM_DD.log 형식의 파일로 출력함.
        기존에 파일이 있는경우 추가(append).
        파일 저장에 실패하는 경우 화면에 출력함.
    */
};

Logger({
    "type" : "error",
    "text" : "something error",
    "code" : "code01"
});
console.log( __line, "Some Code" );