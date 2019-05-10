var name = 'k8805';

//  Literal : 정보를 표현하는 방법(기호).
var a = 1;      //  숫자 1이라는 데이터를 표현하는 Literal
var b = '1';    //  문자 1이라는 데이터를 표현하는 Literal

// String literals
var letter = 'Dear '+name+'\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' + name + ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa egoing qui officia deserunt mollit anim id est laborum. ' + name;
 
/** Template literals
 * ${} 안에서 변수로 치환함.
 * Template literal을 사용하기 위해서는 '' 나 "" 가 아닌 `` 을 써야 함.
 */
var letter = `Dear ${name}
 
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
${name} Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
${1+1} Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa egoing qui officia deserunt mollit anim id est laborum.
${name}.`;
 
console.log(letter);

