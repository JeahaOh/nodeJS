// 양방향 암호화.
const crypto = require('crypto');
const cipher = crypto.createCipher('aes256', 'a password');

let encrypted = cipher.update('some clear text data', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);
//  6b8f36b4e47211e842e897e323fb8fed589d804eff73289c18e2134e56f310ef
/*  SHA hash 함수 대신 AES라는 암호화 함수가 사용됨.
    update 함수를 통해 암호화할 데이터를 입력하고,
    마지막으로 final 함수를 통해 암호화 되지 않은 잔여 데이터를 암호화 하여 문자열에 추가함.
 */