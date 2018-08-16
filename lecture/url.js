const url = require('url');

const URL = url.URL;
const myURL = new URL('https://nodejs.org/en/')

console.log('new URL():', myURL); //전체 url을 구성하는 요소들을 각각 보여줌
console.log('url.format():', url.format(myURL)); //각각의 구성요소들을 하나의 주소로 만들어줌
console.log('url.parse():', url.parse(myURL)); //각각의 구성요소들을 파싱하여 보여줌
console.log('----------------------------------')


const parsedUrl = url.parse('https://nodejs.org/en/')
console.log('url.parse():', parseUrl)