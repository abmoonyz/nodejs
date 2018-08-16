# Chapter_03.

#### 3-1. 노드 모듈 시스템

```js
//모듈로 사용하기 위해 내보내기
const 변수 = require('./var.js')

//모듈로 사용하기 위해 내보내기
//module이라는 객체에 exports속성을 사용하는 것
module.exports = checkOddOrEven;

//exports는 객체 속성만 담을 수 있음
exports.odd = odd; 
exports.even = even;
```



#### 3-2. global 객체

- 노드의 전역 객체는 global (ex. setTimeout, setInterval, setImmediate, ...)
- 전역 객체 : 어디에서나 접근 가능한 객체
- 모든 파일에서 사용가능하기 때문에 편할 수도 있지만, 위험함.

```js
console.log(global);
```



#### 3-3. console 객체

```js
//console 객체 안에 많은 메서드가 존재함

console.time('전체시간');

console.log('평범한 로그입니다. 쉼표로 구분해 여러 값을 찍을 수 있습니다.');
console.log(string, number, boolean);
console.error('에러 메세지는 console.error에 담아주세요');

console.dir(obj, { colors: false, depth: 2});
console.dir(obj, { colors: true, depth: 1});

console.time('시간측정');
for (let i = 0; i < 100000; i++) {
    continue;
}

//console.trace()로 호출 스택을 추적할 수 있음.
function b() {
    console.trace('에러 위치 추적');
}

function a() {
    b();
};
a();

console.timeEnd('시간측정');
console.timeEnd('전체시간');
```



#### 3-4. 타이머 (setTimeout, setInterval, setImmediate)

- setTimeout, setInterval : 설정, clearTimeout, clearInterval : 해제
- 즉시 실행되는 setImmediate 함수를 이벤트 루프로 보낼 때 사용

```js
//timer.js

//설정
const timeout = setTimeout(() => {
  sonsole.log('1.5초 후 실행')  ;
}, 1500);

const interval = setInterval(() => {
    console.log('1초마다 실행');
}, 1000);

//해제
clearTimeout(timeout);
clearInterval(interval);
```



#### 3-5. \_\_filename, \_\_dirname, process

```js
//현재경로
console.log(__filename);

//현재파일경로
console.log(__dirname);

//노드는 싱글스레드. but, 멀티 프로세스 사용가능
//process 객체에는 현재 실행중인 노드 프로그램 정보가 들어있다.
//프로세스는 스레드보다 큰 개념 (프로그램)
//노드로 데스크탑 프로그램을 만들때 사용, 웹에서는 거의 사용하지 않음
process.version //노드버전
process.arch //bit
process.platform //os
process.pid //프로세스아이디, kill
process.uptime() //프로세스가 실행된 시간
process.cwd() //프로그램 실행경로 
process.execPath //노드가 설치된 경로
process.cpuUsage() //현재 CPU사용량
process.exit() // 프로세스종료
process.env
process.nextTick
```



#### 3-6. OS 모듈

- OS는 운영체제와 관련된 모듈

```js
// OS는 운영체제와 관련된 모듈
// 웹 개발보다는 데스크탑 프로그램 만들때 사용

const os = require('os');

os.arch()
os.platform()
os.type()
os.uptime()
os.hostname()
os.realease()
os.homedir()
os.tmpdir()
os.freemem()
os.totalmem()

os.cpus()
//싱글스레드, 1core사용
//cpus로 core확인 후 멀티 프로세싱으로 싱글스레드 극복하기 위해 사용하기도 함
```



#### 3-7. path 모듈

```js
const path = require('path');

path.sep //경로구분자, win(\\), POSIX(/)
path.delimiter //환경변수구분자, win(;), POSIX(:)

path.dirname(__filename) //파일경로
path.extname(__filename) //확장자
path.basename(__filename) //파일이름

path.parse(__filename)) //파일경로, 확장자, 이름 등 한번에
path.format({ ... }) //여러개 json 데이터를 합치기

path.normalize('경로') //경로관련해서 오류가 있는 부분을 수정해줌

path.isAbsolute('경로') //상대경로, 절대경로, 루트경로인지 알려줌, true or false
path.relative('경로1', '경로2') //경로1에서 경로2로 이동하는 상대경로를 출력

//중요
path.join(__dirname, '..', '..', '/users', '.', '/zerocho'); //절대경로 무시하고 합침, C:\Users\users\zerocho
path.resolve(__dirname, '..', '..', '/users', '.', '/zerocho'); //절대경로 고려해서 합침, C:\zerocho
```



#### 3-8. url 모듈

- 위쪽 : 기존 방식의 주소 체계 (url.parse)
- 아래쪽 : WHATWG방식, (url.URL)
- url.parse는 호스트가 없을때도 사용가능, WHATWG방식(url.URL)은 search 처리가 편함 
- 각각 장단점이 존재하기 때문에 둘다 사용을 익히는 것이 좋음

```
- href : 전체
- protocol : https:
- auth : 로그인필요한화면
- host : hostname:port 
- path : pathname, ?query=string, #hash
```

![1534411305665](C:\Users\YEONJU~1.MOO\AppData\Local\Temp\1534411305665.png)

```js
const url = require('url');

const URL = url.URL;
const myURL = new URL('https://nodejs.org/en/')

console.log('new URL():', myURL); //전체 url을 구성하는 요소들을 각각 보여줌
console.log('url.format():', url.format(myURL)); //각각의 구성요소들을 하나의 주소로 만들어줌
console.log('url.parse():', url.parse(myURL)); //각각의 구성요소들을 파싱하여 보여줌
console.log('----------------------------------')


const parsedUrl = url.parse('https://nodejs.org/en/')
console.log('url.parse():', parseUrl)
```

```js
# searchParams
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
```

