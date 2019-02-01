const url = require('url');

const querystring = require('querystring');

let url_str = "http://user:pass@host.com:8888/p/a/t/h?query=string&key=value#hash";

let Parse_url = url.parse( url_str );
console.log( Parse_url );

let Query = querystring.parse( Parse_url.query );

console.log( Query );

/*
Url {
  protocol: 'http:',
  slashes: true,
  auth: 'user:pass',
  host: 'host.com:8888',
  port: '8888',
  hostname: 'host.com',
  hash: '#hash',
  search: '?query=string&key=value',
  query: 'query=string&key=value',
  pathname: '/p/a/t/h',
  path: '/p/a/t/h?query=string&key=value',
  href:
   'http://user:pass@host.com:8888/p/a/t/h?query=string&key=value#hash'
}
[Object: null prototype] { query: 'string', key: 'value' }

앞에 나왔던 url.parse를 사용하여 문자열을 파싱한.
파싱한 문자열은 다양한 용도로 사용할 수 있음.
query를 사용해 querystring.parse 함수에 넣음.
querystring.parse는 주어진 뭐리 문자열을 key와 value로 분리해서 배열화 해줌.
 */