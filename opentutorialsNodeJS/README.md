# Node.js Studies @opentutorials.org

# 00. Node.js?
HTML 문법에 따라  
WEB Browser 위에서 돌아가는  
WEB Application을 만드는 것 처럼.

||
|:--:|
|WEB Application|
|HTML|
|WEB Browser|

Node.js도
||
|:--:|
|Node.js Application|
|JavaScript|
|Node.js runtime|
  
JavaScript 언어를 통해  
Node.js runtime이 가지고 있는 기능을 호출해서  
Node.js Application을 만드는 것임.

# 01 Node.js 웹 서버 만들기
Node.js는 웹서버 기능을 가지고 있음.  
이런 특성을 이용해서 컨텐츠를 프로그래밍적으로 생산할 수 있게 됨.  
Node.js를 웹 서버로 구동하는 방법을 알아 보자.

## WEB Browser와 WEB Server
웹 브라우져에서 주소를 입력해 웹 서버에 요청을 하면,  
웹 서버는 그 요청에 따른 정보를 찾아서 응답해줌.  
일반적으로 쓰는 웹 서버는 Apache 등이 있음.  
Node.js는 WEB Server기능을 내장하고 있기 때문에,  
Apache 처럼 WEB Server 처럼 쓸 수 있음.  
  
이런 특성으로 Node.js는 Apache에서 할 수 없는 기능들을 할 수 있음.  
- http://opentutorials.org/module/3549/21032

# 02 JavaScript - Data Type - Number
숫자를 JavaScript로 표현하는 방법을 알아보자.  
또, 계산할때 사용하는 산술 연산자를 알아보자.  

## 컴퓨터를 사용하는 이유 = 데이터를 어떻게 처리할 것인가?
어떠한 데이터가 있는가?  
각가의 데이터는 어떻게 처리 하는가?  
Number, String, Boolean, Array, Object ...  
이 중에 Number를 알아보자.

# 03 JavaScript - Data Type - String
JavaScript에서 문자열을 표현하고 처리하는 방법에 대해서 알아 보자.

# 04 JavaScript - Variable (변수)
데이터에 이름을 붙이는 수단인 변수에 대해서 알아보자,  
또한 좋은 코드를 만들기 위한 방법인 중복복의 제거라는 원칙을 알아보자.

# 05 JavaScript - Template Literal
여러줄로 이루어진 문자열의 표현과 문자의 치환을 쉽게 할 수 있는 기능을 제공함.

# 06 Node.js - URL로 입력된 값 사용하기
URL에 포함된 query string을 해석해서 이용하는 방법을 알아보자.

## URL의 이해
- `http://opentutorials.org:3000/main?id=HTML&page=12`
    - http : protocol (통신 규칙)
    - `opentutorials.org` : host (domain)
    - 3000 : port
    - main : path
    - ? : query string의 시작
    - id=HTML&page=12 : query string

## Node.js에서 URL을 통해서 입력된 값을 사용하는 방법.
Query String에 따라서 다른 정보를 보여주는 방법.

- main.js (Node.js Application)에서 Query String의 값을 알아내는 방법.
    - Node.js url parse query string