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
