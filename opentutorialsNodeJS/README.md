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

# 07 App - 동적인 웹 페이지 만들기
동적인 웹 페이지를 생성하는 방법을 알아보자.

# 08 Node.js - 파일 읽기
Node.js에서 파일을 읽는 방법을 알아보자.
- 검색 키워드
    - Node.js file read

## 정보 시스템에 핵심적인 메커니즘 **CRUD**
- C : Create
- R : Read
- U : Update
- D : Delete

### Module?
기본적으로 제공하는 기능들을 그룹핑해 놓은 각각의 그룹들을 모듈이라고 함.

# 09 App - 파일을 이용해 본문 구현
파일에 본문을 저장하고,  
Node.js의 파일 읽기 기능(fs.readFile)을  
이용해서 본문을 생성하는 방법을 알아 보자.

# 10 JavaScript - Boolean
참과 거짓을 나타내는 데이터 타입인 Boolean을 알아보자.

# 11 JavaScript - Comparison Operator (비교 연산자)
두개의 값을 비교해서 Boolean 값으로 결과를 알려주는 비교 연산자를 알아 보도록 하자

## + ===?
=과, ==과 ===는 비슷하지만 깊게들어가면 완전 다른의미를 가지고 있음.  
지금은 몰라도 전혀 문제 안 된다고는 함. (처음부터 다 이해하려고하면 머리만 아프다고..)  
  
==는 Equal Operator,  
===는 Strict Equal Operator라고 한다고 함.  
strict는 엄격한 이라는 의미로 좀더 엄격하게 같은지를 보는 연산자라고 생각하면 됨.  
  
=는 만약 a=b이라고 했을때, b를 a에 대입해서, 지금부터 a가 b이라고 약속하는 것.  
  
지금부터 너는 졸업생이야는 you = "졸업생"이라고 할 수 있음.  
==는 먄약 a==b이라고 했을때, a가 b과 '값'이 같은지를 판단해서 맞으면 true, 틀리면 false를 반환함.  
===는 만약 a===b이라고 했을대, a가 b과 '값'과 '타입/형식'이 정확하게 같은지를 판단해서 true/false를 반환.  
  
===를 좀더 자세히 설명하면  
예를들어  
1=="1"은 true,  
1==="1"은 false.  
  
또,  
null과 undefined는 값이 없다는 의미의 데이터 형인데.  
null은 값이 없음을 명시적으로 표시한 것이고,  
undefined는 그냥 값이 없는 상태이기때문에,  
==로는 true가 뜨지만, ===로는 false가 리턴됨.  
  
아마도 이제 자바스크립트를 입문한사람들에게는 null과 undefined까지는 좀 어려운 개념인데,  
일단은 ===가 ==보다 엄격하구나 정도로 생각하고 넘어가면 됨.  
  
`실무 개발자들은 실무에서 코딩을 할때는 ==보다는 ===를 사용해야 한다고 강하게 추천합니다.`  
`이유는 역시 조건문이나, 좀더 복잡한 상황의 프로그래밍에서 차이가 나온다고 하네요.`  

# 12 JavaScript - Flow Control Statement (제어문)
프로그램의 의미를 음미해 보면서,
보다 똑똑한 프로그램을 만들기 위한 테크닉으로서 제어문의 필요성을 생각 해 보자.

# 13 JavaScript - Conditional Statement (조건문)
조건에 따라서 코드의 실행 흐름을 바꿀 수 있게 해주는 조건문을 알아 보자.

# 14 Node.js - 콘솔에서의 입력값
콘솔 환경에서 앱을 실행할 때 입력값을 전달하는 방법을 알아 보자.

- 검색 키워드
  - node.js console input parameters 

# 15 App - Not Found 오류 구현
존재하지 않는 정보에 대한 요청이 들어왔을 때,  
Not Found 오류 메세지를 전송하는 방법을 알아 보자.

# 16 App - 홈페이지 구현
조건문을 활용해서 홈페이지를 표현하는 방법을 살펴 보자.

# 17 JavaScript - 반복문
JavaScript의 반복문의 형식을 알아보자.  
while 외에도 for, forEach, do while과 같은 반복문을 알아보자.

# 18 JavaScript - Data Type - Array (배열)
JavaScript에서 서로 연관된 데이터를 정리하는 도구인 배열 (Array)의 형식을 알아 보자.

# 19 JavaScript - Array & Loop (배열과 반복문)
배열은 복수의 데이터를 보관하는 그릇임.  
반복문은 복수의 반복되는 작업을 처리하는 도구임.  
배열과 반복문은 서로 밀접한 관계에 있는 도구임.

# 20 Node.js - 파일 목록 알아내기
Node.js에서,  
특정 디렉토리 하위에 있는 파일과 디렉토리의 목록을 알아내는 방법을 알아보자.

- 검색 키워드
    - nodejs file lit in directory

# 21 App - 글목록 출력하기
data 디렉토리에 있는 파일의 이름을 이용해서 글 목록을 생성하는 기능을 구현해보도록 하자.

# 22 JavaScript - 함수의 기본 문법
코드를 정리 정존해서 재활용성을 높여주는 도구인 함수의 기본 문법을 알아보자.

# 23 JavaScript - 함수의 입력
입력값에 따라서 다르게 작동하는 함수를 만드는 방법을 알아 보자.

# 24 JavaScript - 함수의 출력
JavaScript의 함수 출력 값( return )을 통해서 보다 가치있는 부품으로서 함수를 만드는 방법을 살펴 보자.

# 25 - App 함수를 이용해서 정리 정돈하기
함수를 이용해서 코드를 정리정돈 해 보자.

# 26 Node.js - 동기와 비동기 그리고 콜백
Node.js에서 매우 중요한 특징인 비동기 처리 방식을 알아보자.
Node.js의 실행 순서를 파악 해보도록 하자.

# 27 Node.js - 패키지 매니져와 PM2
혼자서 소프트웨어를 만드는 일은 거의 없음.  
타인의 모듈을 이용해서 소프트웨어를 망들게 됨.  
이 때 사용하는 모듈이 많아지면 여러가지 복잡한 문제가 생김.  
이를 관리하는 도구가 패키지 매니져임.  
이번에는 대표적 패키지 매니져인 NPM을 사용하는 방법을 살펴 보자.  
  
또, 실행중인 Node.js 어플리케이션을 관리하는 프로세스 매니져 PM2의 사용법도 알아보자.

- https://youtu.be/KzjTCREOIkk
  
Package : SoftWare를 부르는 여러가지 표현중 하나.  
  
PM2 설치  
(pm2는 node가 실행중에 에러로 꺼지면 다시 실행 시켜줌.)
```
npm install pm2 -g
```
  
프로젝트 실행
```
pm2 start main.js --watch
```
  
실행중인 프로그램 확인
```
pm2 monit
q
```

프로젝트의 문제점 확인
```
pm2 log
```

특정 디렉토리에 대해서 watch하지 않도록 설정
```
pm2 start main.js --watch --ignore-watch="data/*"
```

# 28 HTML - Form
웹 브라우져에서 서버로 데이터를 전송할 때 사용하는 기능이 form임.  
HTML로 form을 만드는 방법을 알아보자.  

# 29 App - 글생성 UI 만들기
글 작성을 할 수 있는 UI를 구현해보자.

# 30 App - POST 방식으로 전송된 데이터 받기
POST 방식으로 전송된 데이터를 받아서 파일로 전송하는 방법에 대해 알아보자.

- 검색 키워드
    - nodejs post data

# 31 App - 파일 생성과 리다이렉션
전송된 POST 데이터를 받아서 파일에 저장하고,  
그 결과를 리다이렉션하는 방법에 대해서 알아보자.

- 검색 키워드
    - nodejs file write
    - nodejs redirection

# 32 App - 글 수정 - 수정 링크 생성
글 수정 기능 구현을 위해 수정 링크를 추가하는 방법을 알아보자.

# 33 App - 글 수정 - 수정할 정보 전송
수정할 내용을 서버로 보내는 방법을 알아보자.

# 34 App - 글수정 - 수정된 내용 저장
전송된 수정 내용을 받아서 파일명을 변경하고,  
내용을 저장하는 방법을 알아보자.

- 검색 키워드
    - nodejs file rename
    
## pm2
pm2를 실생할 때,  
--watch 옵션을 주면 파일이 변경 되었을 때 앱을 리로드하게 됨.  
즉 data 디렉토리의 파일이 수정되었을 때 리로드가 일어나게 되는 것임.  
이런 문제를 방지하기 위해서는 data 디렉토리에 대해서는 watch를 하지 않도록 설정해야 함.
```
pm2 start main.js --watch --ignore-watch="data/*"
```
# 35 App - 글 삭제 - 삭제버튼 구현
삭제 작업을 하기 위해서는 삭제 버튼이 있어야 함.  
이 때, 링크를 사용하면 안됨.  
링크 대신 form을 이용해서 삭제 버튼을 만드는 방법을 살펴 보도록 하자.

# 36 App - 글 삭제 기능 완성
글 삭제 기능을 완성해 보자.

- 검색 키워드
    - nodejs delete file
    
# 37 JavaScript - 객체의 형식
서로 연관된 데이커를 정리 정돈하는 도구인 객체의 형식을 살펴보도록 하자.

# 38 JavaScript - 객체의 반복
객체의 데이터를 하나씩 꺼내서 반복적인 처리를 하는 방법을 알아보자.

