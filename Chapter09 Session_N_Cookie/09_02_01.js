/**
    DB에 암호를 저장하거나 파일에 암호를 거는 경우에 서로 다른 종류의 알고리즘이 필요함.
    사용자 암호의 경우는 복호화가 불가능 해야 하며,
    복호화가 불가능 한 것을 단방향 암호화
    복호화가 가능 한 것을 양방향 암호화 라고 함.
    단방향 암호화는 다음과 같이 간단하게 할 수 있으며 hash 함수를 사용함.
 */
const crypto = require('crypto');

let result = crypto.createHash('sha256').update('some data to hash').digest('hex');
/**
    sha 256, sha 512는 수업에서 배웠으니 넘어가고.
    hash.update 함수를 통해 hash화할 문자열을 입력하고,
    digest를 통해 hex 형태로 출력하도록 선언하면 리턴값으로 결과물이 반환됨.
    hex 는 16진수를 사용하고, base64는 64진수를 사용함.
 */

console.log( result );