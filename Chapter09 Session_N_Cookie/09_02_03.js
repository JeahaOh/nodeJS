// 복호화.
const crypto = require('crypto');
const decipher = crypto.createCipher('aes256', 'a password');

const encrypted = '6b8f36b4e47211e842e897e323fb8fed589d804eff73289c18e2134e56f310ef';

let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');

console.log(decrypted);
/*  암호화와 같이 함수를 선택하고, 비밀번호를 입력.
    update에 문자열을 넣어줌.
    마지막으로 남은 문자열을 정리하기 위해 final을 호출함.
 */