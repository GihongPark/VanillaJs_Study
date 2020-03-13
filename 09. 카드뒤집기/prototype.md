# 프로토타입

### 팩토리패턴
```javascript
function factory (name, age) {
    return {
        name: name,
        age: age,
        text: '팩토리패턴',
        print() {
            console.log(`${this.name}, ${this.age}, ${this.text}`);
        }
    }
}
var fac1 = factory('홍길동', 20);
var fac2 = factory('알라딘', 35);
```

### 프로토타입
```javascript
var prototype = {
    text: '프로토타입',
    print() {
        console.log(`${this.name}, ${this.age}, ${this.text}`);
    }
}
var proto1 = {
    name: '홍길동',
    age: 20
}
proto1.__proto__ = prototype;   // 권장하지않음 => Object.create(prototype) 사용 권장
```
#### 프로토타입 생성방법
**팩토리패턴** 사용
```javascript
var prototype = {
    type : 'prototype'
}
function Proto(name, age) {
    var pro = Object.create(prototype);
    pro.name = name;
    pro.age = age;
    return pro;
}

var proto1 = Proto('홍길동', 20);
var proto2 = Proto('임꺽정', 35);
```
**생성자함수**사용
```javascript
var prototype = {
    type : 'prototype'
}
function Proto(name, age) {
    this.name = name;
    this.age = age;
}
Proto.prototype = prototype

var proto1 = new Proto('홍길동', 20);
var proto2 = new Proto('임꺽정', 35);
```