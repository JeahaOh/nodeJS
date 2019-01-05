const qs = require('qs');
/*  
    require     :   크기가 큰 패키지든 작은 패키지든 require를 사용해서 호출한 뒤
                    해당 객체를 필요에 따라 사용함.
                    여러 기능을 확장하는 역할임.
                    호출 한 뒤 리턴값을 받는 변수가 하나의 클래스가 되어 그 안에 있는 함수들을 사용할 수 있음.
    npm install qs 해야함.
    qs package  :   JSON 형태의 데이터를 url에서 다룰 수 있는 형태의 문자열로 변환할때 주로 사용함.
*/

let obj = qs.parse('a=1&b=2');
console.log( JSON.stringify( obj ) );

// let str = qs.stringify( obj );
// console.log( str );
/*
    stringify   :   데이터를 url에서 사용 가능한 query 문자열 형태로 변환해줌.
                    문자열이 아닌 데이터 형태로 넣어줘야 함.
                    문자열을 넣고자 한다면 JSON.parse를 이용하여 변환한뒤 넣어줘야함.
*/

let str = qs.stringify( JSON.parse('{"a":"1","b":"2"}') );
console.log( str );