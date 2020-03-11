for(var i=0; i<10; i++){
    setTimeout(function() {
        console.log("i");
    }, i * 1000);
}
// output
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10

// 자바스크립트 실행 방법
setTimeout(function() {
    console.log(i); // i = 0 : X => 함수가 실행 되기 전까지는 i는 변하지않는다.
                    // i === 10 : O => 비동기함수가 실행될때 i의 값인 10이 출력
}, 0 * 1000);
setTimeout(function() {
    console.log(i);
}, 1 * 1000);
setTimeout(function() {
    console.log(i);
}, 2 * 1000);
setTimeout(function() {
    console.log(i);
}, 3 * 1000);
setTimeout(function() {
    console.log(i);
}, 4 * 1000);
setTimeout(function() {
    console.log(i);
}, 5 * 1000);
setTimeout(function() {
    console.log(i);
}, 6 * 1000);
setTimeout(function() {
    console.log(i);
}, 7 * 1000);
setTimeout(function() {
    console.log(i);
}, 8 * 1000);
setTimeout(function() {
    console.log(i);
}, 9 * 1000);


// 해결법
for(var i=0; i<10; i++){
    function closure(j) {
        setTimeout(function() {
            console.log(j);
        }, j * 1000);
    }
    closure(i);
}
for(var i=0; i<10; i++){
    (function closure(j) {
        setTimeout(function() {
            console.log(j);
        }, j * 1000);
    })(i); // 즉시 실행 함수
}
