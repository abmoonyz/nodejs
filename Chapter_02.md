# Chapter_02.

#### 2-1. const와 let

>  ES : ECMAScript, 표준, JavaScript는 구현



- `var `-> `const`, `let`
- `const` : 상수, 값 재할당(=) 불가, 값이 바뀌지 않는 변수를 사용하고 싶을때, 선언할때 값을 할당해야함.
  - const에 객체가 할당된 경우 객체 내부 속성은 변경 가능
- `let` : 값 재할당 가능, 값을 변경하고 싶은 변수를 사용하고 싶을때

```javascript
if (true) {
    var x = 3;
}
console.log(x);
>> 3
```

```javascript
if (true) {
    const y = 3;
}
console.log(y);
>> ERROR, 블럭 밖이라서?
```

```javascript
const a = 0;
a = 1; 
< ERROR

let b = 1;
b = 2;
b;
<- 2

//const에 객체가 할당된 경우 객체 내부 속성은 변경 가능
const g = { a: 1, b: 2, c: 3};
g = [1,2,3]
<- ERROR
g.a = 3;
g
<- {a: 3, b: 2, c: 3}

//배열도 객체, 변경가능
const h = [1,2,3,4,5]
h[0]=true
h[1]=false
h
<- (5) [true, false, 3, 4, 5]
```



#### 2-2. 템플릿 문자열 (백틱, `)

- 백틱, (`) : 멀티 문자열 연결

> ' ' (작은따옴표) 우선선호
>
> " " (큰따옴표) 작은 따옴표를 사용하고 싶을때 ex) " 안녕 'hello' "

```js
//변수와 문자를 함께 쓸때 (+)를 사용하는 복잡함을 (`)백틱을 사용하면 쉽게 사용가능
const a = 'hello'
const b = true
const c = 3;
const d = a + ' ' + b + ' ' + c;

const d = `${a} ${b} ${c}`;
```



#### 2-3. 객체 리터럴의 변화

- 객체 리터럴 : 중괄호, { }로 묶어서 표현하는 객체

```js
const obj = {
    a: 1,
    b: 2,
};
```

```js
//함수선언
var sayNode = function () {
    console.log('Node');
}; 
//객체선언
var es = 'ES'; 

//객체리터럴, sayJS메서드, sayNode메서드
//old
var oldObject = {
    sayJS: function() {
        console.log('JS');
    },
    sayNode: sayNode,
}; 

oldObject[es + 6] = 'Fantastic';
<- "Fantastic"

oldObject.sayNode(); //Node
oldObject.sayJS(); // JS
console.log(oldObject.ES6) //Fantastic

//new
const newObject = {
    sayJS() {
        console.log('JS');
    },
    sayNode,
    [es + 6]: 'Fantastic', //동적속성을 객체리터럴 안에서 함께 사용할 수 있게
};

newObject.sayNode(); //Node
newObject.sayJS(); // JS
console.log(newObject.ES6) //Fantastic
```



#### 2-4. 화살표 함수

```js
//함수선언문
function add1(x, y) {
    return x+y;
};

//함수표현식, function(매개) {return 리턴}
var add2 = function(x, y) {
    return x+y;
};

//new, 화살표함수, (매개) => {return 리턴}
const add3 = (x,y) => {
    return x+y;
};

// 매개변수를 받아서 아무 가공없이 리턴하는 경우 {}중괄호 생략가능, ()소괄호는 생략가능
const add3 = (x,y) => (x+y);
```

```js
// function과 =>(화살표함수)의 내부 this 동작 차이
var relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: function() {
        var that = this; //relationship1을 가리키는 this를 that에 저장
        this.frends.forEach(function(friend) {
            console.log(that.name, friend);
        });
    },
};
relationship1.logFriends();
//zero nero
//zero hero
//zero xero

const relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friend); 
            //this를 바깥쪽 함수(logFriends의 this)를 그대로사용하고싶을때 =>(화살표)
        }); 
    },
};
relationship2.logFriends();
//zero nero
//zero hero
//zero xero
```



#### 2-5. 비구조화 할당(destructuring)

- 변수에 객체의 속성을 대입할 때, 변수와 객체의 속성이름이 동일하면 바로 대입 가능
- 객체에 속성을 하나하나 꺼내서 대입하는 것보다 많은 속성을 한번에 꺼내와서 대입할 때 효율적

```js
//old
var candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy: function() {
        this.status.count--;
        return this.status.count;
    }
};

//객체의 속성을 변수에 대입
var status = candyMachine.status
var getCandy = candyMachine.getCandy
status //"[object object]"
getCandy // undefined

//new
const candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy() {
        this.status.count--; //--는 -1
        return this.status.count;
    }
};

const status=candyMachine.status;
const getCandy = candyMachine.getCandy

//ES2015, 비구조화 할당
const {status, getCandy} = candyMachine;

```

```js
## 참고
//candyManchine(객체)의 getCandy(속성)에 존재하는 this를 candyMachine으로 지정
candyMachine.getCandy(); //4

//비구조화 할당을 통해 getCandy를 가져와서 호출하면 this를 인식하지 못함.
const { getCandy } = candyMachine; 
getCandy(); //undefined
candyMachine.getCandy(); //객체를 꼭 함께 호출해주어야 this가 제대로 동작함
getCandy.call(candyMachine) //this를 바꿔주는 call메소드를 사용
```

```js
## 배열에서 사용하는 비구조화 할당

//배열의 요소를 변수에 대입할 경우
//old
var array = ['nodejs', {}, 10, true];
var node = array[0];
var obj = array[1];
var bool = array[array.length -1];

//new
const array = ['nodejs', {}, 10, true];
const [node, obj, , bool] = array;
const [node, obj, ...bool] = array; //(...변수) rest로 나머지 요소들을 대입
```



#### 2-6. rest문법

```js
const array = ['nodejs', {}, 10, true];

const [node, obj, ...bool] = array; //(...변수) spread, rest
//(...변수)는 rest로 여러 개의 변수를 모아서 배열로 만든다.

bool // (2)[10, true]

const m = (x, y) => console.log(x,y) //return console.log(x,y)
m(5, 6) // 5 6
m(5, 6, 7, 8, 9) // 5 6

const n = (x, ...y) => console.log(x,y)
n(5, 6, 7, 8, 9) //5 (4)[6, 7, 8, 9]

//old
function o(){
    console.log(arguments);
}
o(1,2,3,4,5)
Arguments(5)[1,2,3,4,5] // arguments는 배열처럼보이지만 배열이 아님

//new
const p = (...rest) => console.log(rest)
p(5,6,7,8,9)
(5)[5,6,7,8,9] // rest는 배열, 배열의 메소드들을 사용할 수 있음
```

```js
## 참조
const x = { a: 1, b:2 } //객체, 변수는 메모리에 위치
const y = x; //y가 x를 참조, x값이 저장된 메모리의 위치를 가르킴

x.a = 3; // 객체x의 속성a를 변경하게 되면 객체y에 대한 값도 변경된 값으로 조회
y.a; //3 

const z = [1,2,3,4,5];
z[0]=3;
```



#### 2-7. 콜백(callback) vs 프로미스(promise)

- 노드의 API들이 Promise기반으로 재편되고 있음 (중요)

```js
## 콜백
Users.findOne('zero', (err, user) => {
    if (err) {
        return console.error(err);
    }
    console.log(user);
    
    Users.update('zero', 'nero', (err, updatedUser) => {
        console.log(updatedUser);
        Users.remove('nero', (err, removedUser) => {
            console.log(removedUser);
        });
    });
}); 
console.log('다 찾았니?');

//depth가 깊어지는 callback 지옥 -> callback을 변수로 따로 생성하여 사용. but, 코드의 가독성이 떨어짐
const afterRevmoe = (err, removedUser) => {
    console.log(removedUser);
}
const afterUpdate = (err, updatedUser) => {
    console.log(updatedUser);
    Users.remove('nero', afterRemove);
}

Users.findOne('zero', (err, user) => {
    if (err) {
        return console.error(err);
    }
    console.log(user);
    Users.update('zero', 'nero', afterupdate);
});
console.log('다 찾았니?');
```

```js
## 프로미스 : ES2015부터 정식으로 채택하여 구현
Users.fineOne('zero')
    .then((user) => {
    	console.log(user);
    	return Users.update)'zero', 'nero');
	})
    .then((updatedUser) => {
    	console.log(updatedUser);
    	return Users.remove('nero');
	})
    .then((removedUser) => {
    	console.log(removedUser);
	})
    .catch((err) => {
    	console.error(err);
	});
console.log('다 찾았니?');
```



#### 2-8. 프로미스(Promise) 이해하기

```js
Promise //f promise() { [native code] }

//기본구조
new Promise ((resolve, reject) => {
    ...
})

const plus = new Promise ((resolve, reject) => {
    const a = 1;
    const b = 2;
    if (a + b > 2) {
        resolve(a+b);
    } else {
        reject(a+b);
    }
});
    
plus
    .then ((success) => {
    	//resolve, 성공
    	console.log(success);
	}) 
    .catch((fail) => {
    	console.error(fail);
}) 
//성공 : 3, Promise{<resoled>: undefined}
```

```js
const Users = {
    findOne() {
        return new Promise ((res, rej) => {
            if ('사용자찾음') { res('사용자');}
            else { rej('못찾음')}; }
        })
    },
	remove() {return new Promise (...)}.
	update() {return new Promise (...)}.
}
Users.findOne()
	.then()
	.catch()
// 내부적으로 new Promise를 지원해주고 있으면 then, catch를 사용할 수 있음
```

```js
const condition = true;
const promise new Promise((res, rej) => {
    if (condition) {res('성공');}
    else {rej('실패');
    }
});

promise
    .then((message) => {
    	console.log(message); //성공(res)한 경우 실행
	})
    .catch((error) => {
    	console.error(error); //실패(rej)한 경우 실행
}) //console.log 실행됨


promise
    .then((message) => {
    return new Promise((res, rej) => {
        resolve(message2);
       });
    });
    .then((message2) => {
        console.log(message2);
    	return new Promise((res, rej) => {
        	resolve(message3);
       });
    });
    .then((message3) => {
        console.log(message3); 
    });
    .catch((error) => {
    	console.error(error);
}) 
```



#### 2-9. 프로미스(Promise) API

- 프로미스는 결과값을 가지고 있지만 .then이나 .catch를 붙이기 전까지 반환하지 않는 것
- 콜백은 결과를 표시하는 부분이 바로 있어야 하지만, 프로미스는 원할때 결과를 불러올 수 있음.

```js
const promis = new Promise((res, rej) => {
    res('성공');
});

//무조건 성공 OR 실패
const successPromise = Promise.resolve('성공');
	.then(); //무조건 성공이므로 catch() 불필요

const failurePromise = Promise.resolve('실패');
	.catch(); //무조건 실패이므로 then() 불필요
```

```js
//Promise.all : 여러 프로미스를 동시에 실행가능. 단, 하나라도 실패하면 전체 catch로
Promise.all([Users.findOne(), Users.remove(), Users.update()])
	.then ((results) => {})
	.catch((err) => {})
```



#### 2-10. async/await

```js
Users.fineOne('zero')
    .then((user) => {
    	console.log(user);
    	return Users.update)'zero', 'nero');
	})
    .then((updatedUser) => {
    	console.log(updatedUser);
    	return Users.remove('nero');
	})
    .then((removedUser) => {
    	console.log(removedUser);
	})
    .catch((err) => {
    	console.error(err);
	});
console.log('다 찾았니?');
// promise로 가독성은 높아졌지만, console.log가 먼저 호출됨

# * yield
# ES2017 : await, async
async () => {
    const 변수 = await 값
}

async func() => {
    try {
        const user = await Users.fineOne('zero');
        console.log(user);
        const updatedUser = await Users.update('zero', 'nero');
        console.log(updatedUser);
        const removeduser = await Users.remove('nero');
        console.log(removeduser);
        console.log('다 찾았니?');
    } catch (err) {
        console.error(err);
    }
}
func();
//console.log를 원하는 위치에 출력할 수 있음
//but, try ~ catch ...로 묶어줘야 에러 처리가 가능
//하나만 실패해도 catch로 빠지기 때문에 어느 부분이 에러 났는지 모름. 알고 싶으면 하나씩 try~catch..
```

