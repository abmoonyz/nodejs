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

//-----------------------------------------------------------
const timeout = setTimeout(() => {
    sonsole.log('1.5초 후 실행')  ;
  }, 1500);
  
  const interval = setInterval(() => {
      console.log('1초마다 실행');
  }, 1000);
  
  const timeout2 = setTimeout(() => {
      console.log('실행되지 않습니다');
  }, 3000);
  
  setTimeout(() => {
      clearTimeout(timeout2);
      clearInterval(interval);
  }, 2500);

// 1초 : 1초마다 실행
// 1.5 sec : 1.5초 후 실행
// 2 sec : 1초마다 실행
// 2.5 sec : (전부취소) clearTimeout(timeout2)

//-----------------------------------------------------------
//setImmediate는 항상 즉시 실행되지만 이벤트 루프로 보내 비동기로 실행순서를 바꿀수있음.
const im = setImmediate(() => console.log('즉시 실행'));
clearImmediate(im);