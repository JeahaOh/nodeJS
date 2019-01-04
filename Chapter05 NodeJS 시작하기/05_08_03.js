const https = require('https');

//  가져온 데이터를 담는 변수를 선언.
let CrawlData = [];

const url = 'https://nodejs.org/dist/latest-v5.x/docs/api/';

//  해당 URL에서 data 가져오기.
https.get( url + 'index.json', (res) => {
    let body = '';
    res.on('data', (d) => {
        body += d;
    });
    res.on('end', () => {
        //  가져온 데이터를 JSON Object 형태로 변환하여 저장.
        let index_data = JSON.parse( body ).desc;

        //  루프를 돌면서 페이지 데이터 가져오기.
        for (let i = 0; i < index_data.length; i++) {
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
                str = str.substr( str.indexOf("[") + 1 );
                let temp_idx = str.indexOf("]");
                let title = str.substr( 0, temp_idx );

                str = str.substr( temp_idx + 1 );
                let link = str.slice( 1, -1 ).replace('.html', '.json');

                CrawlData.push({
                    'title': title,
                    'link': link,
                    'methods': []
                });
            }
        }

        //  얻은 데이터를 화면에 출력.
        setTimeout( () => {
            GetMethod();
        }, 1000 );
    });
}).on('error', (e) => {
    console.log( 'Error:', e );
});
//  해당 URL에서 데이터를 가져옴.
let page_idx = 0;
const GetMethod = () => {
    console.log( 'Get Methods');
    https.get( url + CrawlData[ page_idx ].link , (res) => {
        let body = '';
        res.on('data', (d) => {
            body += d;
        });
        res.on('end', () => {
            //  가져온 데이터를 JSON Object 형태로 변환하여 저장.
            const temp = JSON.parse( body );

            //  메소드를 사용하기 힘든 데이터는 저장하지 않음.
            if( !temp || !temp.modules || temp.modules.length == 0 || !temp.modules[ 0 ].methods ) {
                page_idx++;
                setTimeout(() => {
                    GetMethod();
                }, 1000);
                return;
            }
            let index_data = temp.modules[ 0 ].methods;

            //  루프를 돌면서 메소드를 하나씩 확인.
            for(let i = 0; i < index_data.length; i++){
                //  개별 메소드에 대해서 필요한 만큼의 데이터를 읽어서 저장함.
                CrawlData[ page_idx ].methods.push({
                    textRaw: index_data[ i ].textRaw,
                    desc: index_data[ i ].desc,
                    signatures: index_data[ i ].signatures
                });
            }

            //  데이터를 불러오고 나면 다시 한 번 호출.
            if(page_idx < CrawlData.length - 1) {
                page_idx++;
                setTimeout(function*(){
                    GetMethod();
                }, 1000 );
            }   else {
                //  화면에 출력.
                console.log( CrawlData );
            }
        });
    }).on('error', (e) => {
        console.log( 'Error:' , e);
    });
};