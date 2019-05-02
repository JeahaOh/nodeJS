const url = require('url');

let url_str = "http://user:pass@host.com:8888/p/a/t/h?query=string#hash";

console.log( url.parse( url_str ) );

/*
Url {
  protocol: 'http:',
  slashes: true,
  auth: 'user:pass',
  host: 'host.com:8888',
  port: '8888',
  hostname: 'host.com',
  hash: '#hash',
  search: '?query=string',
  query: 'query=string',
  pathname: '/p/a/t/h',
  path: '/p/a/t/h?query=string',
  href: 'http://user:pass@host.com:8888/p/a/t/h?query=string#hash'
}

parse라는 함수를 통해서 해당 문자열을 요소별로 분류하여 배열에 담았음.
*/