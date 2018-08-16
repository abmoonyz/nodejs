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