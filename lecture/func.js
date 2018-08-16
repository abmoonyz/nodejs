//func.js

//사용할 변수들을 불러온다. 
const { odd, even } = require('./var.js'); //.js생략가능

console.log(odd);
console.log(even);

function checkOddOrEven(num) {
    if (num % 2) {
        return odd;
    }
    return even; 
}

module.exports = checkOddOrEven;