# Node.js Studies @opentutorials.org

## Node.js?
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