// 스코프
var x = 'global'; // global

function ex() {
    var x = 'local'; // local
    x = 'change;'; // change
}

ex();
window.alert(x); // global 

// 스코프 체인
var name = "javascript";

function outer() {
    console.log("외부", name);      // 외부 javascript
    function inner() {
        console.log("내부", name);  // 내부 javascript
        var ename = "java";
    }
    inner();
}
outer();
console.log(ename); // 에러

// 렉시컬 스코프(정적 스코프)
var name = "javascript";
function log() {
    console.log(name);  // java
}
function wrapper() {
    name = "java";
    log();
}
wrapper();
/////////////////////////////////
var name = "javascript";
function log() {
    console.log(name);  // javascript
}
function wrapper() {
    var name = "java";
    log();
}
wrapper();