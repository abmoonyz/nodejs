//노드 searchParams의 메서드는 FormData나 URLSearchParams객체에도 비슷하게 사용됨
const url = require('url');

const URL = url.URL;
const myURL = new URL('https://nodejs.org/en/')
console.log('searchParams:', myURL.searchParams);

console.log('searchParams.getAll():', myURL.searchParams.getAll('category')); //category 값들이 배열로 출력됨
console.log('searchParams.get():', myURL.searchParams.get('limit')); //limit값
console.log('searchParams.has():', myURL.searchParams.has('page')); //존재여부

console.log('searchParams.keys():', myURL.searchParams.keys()); //키만 출력
console.log('searchParams.values():', myURL,searchParams,values()); //값만 출력

//append('filter', '값') : 기존 필터값에 계속 추가 (기존값 보존)
//set('filter', '값') : 기존 필터값 초기화 후 수정
myURL.searchParams.append('filter', 'es3'); //필터추가 &filter=es3
myURL.searchParams.append('filter', 'es5'); //필터추가 &filter=es3&filter=es5
console.log(searchParams.getAll('filter'));

myURL.searchParams.set('filter', 'es6'); //필터추가 &filter=es6
console.log(searchParams.getAll('filter'));


myURL.searchParams.delete('filter'); //filter 삭제
console.log(searchParams.getAll('filter'));

console.log('searchParams.toString():', myURL.searchParams.toString());
myURL.search = myRUL.searchParams.toString();
