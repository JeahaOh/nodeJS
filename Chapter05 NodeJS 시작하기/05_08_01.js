//  간단한? 크롤링.
const https = require('https');

//  가져올 데이터를 담을 변수.
let CrawlData = [];

//  해당 URL에서 Data 가져오기.
let url = 'https://nodejs.org/dist/latest-v5.x/docs/api/index.json';
//  v5는 작동하지만 (2019.01) v11버전은 작동 하지 않는 이유는 무엇일까?
https.get(url, (res) => {
    let body = '';
    res.on('data', (d) => {
        body += d;
    });
    res.on('end', () => {
        //  가져온 데이터를 JSON Object 형태로 변환하여 저장.
        let index_data = JSON.parse( body ).desc;

        //  루프를 돌면서 페이지 데이터 가져오기.
            for ( let i = 0; i < index_data.length; i++) {
                //  해당 데이터의 type이 text일 경우에만 data를 분석.
                if( index_data[ i ].type == 'text'){
                    /** 
                        이 부분은 정규 표현식을 사용하면 더 편하지만,
                        이번장에서는 정규식 사용이 아닌 문자열을 다루는 방법에 더 익숙해 지기 위해 문자열 함수를 이용함.
                        앞 부분 코드들은 [] 사이의 내용을 title로 추출한 부분이며,
                        두시 부분 코드들은 () 사이의 내용들을 link로 뽑는 부분임.
                        뽑은 코드는 배열 형태로 CrawlData에 넣을 것임.
                    */
                    let str = index_data[ i ].text;
                    str = str.substr( str.indexOf("[") + 1)
                    let temp_idx = str.indexOf("]");
                    let title = str.substr( 0, temp_idx );

                    str = str.substr( temp_idx + 1 );
                    let link = str.slice( 1, -1 );

                    CrawlData.push({
                        'title': title,
                        'link': link
                    });
                }
            }
        //  얻은 데이터를 화면에 출력.
        console.log( CrawlData );
    });
}).on('error', (e) => {
    console.log( "Error:" , e);
});