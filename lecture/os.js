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