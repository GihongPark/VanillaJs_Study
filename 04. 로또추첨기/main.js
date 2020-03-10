const lottoList = Array(45)
    .fill()
    .map((v,i) => i+1 );

var shuffle = [];
while(lottoList.length > 0) {
    const temp = lottoList.splice(Math.floor(Math.random() * lottoList.length), 1)[0];
    shuffle.push(temp);
}

const bonusNum = shuffle[shuffle.length - 1];
const resultNum = shuffle.slice(0,6);
console.log(`당첨번호 : ${resultNum.sort((p, c) => p-c)}, 보너스 : ${bonusNum}`);
// sort((p,c) => p-c)  // 오름차순  // 리턴값이 0보다 크면 순서바꿈
// sort((p,c) => c-p)  // 내림차순

const result = document.getElementById("result");
const bonus = document.getElementsByClassName('bonus')[0];
for(let i=0; i<resultNum.length; i++) {
    setTimeout(function() {
        createBall(resultNum[i], result);
    }.bind(i), 1000 * i);
}
setTimeout(function() {
    createBall(bonusNum, bonus);
}, 6000);

function createBall (value, container) {
    const ball = document.createElement('div');
    ball.textContent = value;
    ball.style.display = 'inline-block';
    ball.style.border = '1px solid black';
    ball.style.borderRadius = '10px';
    ball.style.width = '20px';
    ball.style.height = '20px';
    ball.style.textAlign = 'center';
    ball.className = 'ball_' + value;

    var backgroundColor;
    if(value <= 10) {
        backgroundColor = 'red';
    } else if(value <= 20) {
        backgroundColor = 'orange';
    } else if(value <= 30) {
        backgroundColor = 'yellow';
    } else if(value <= 40) {
        backgroundColor = 'blue';
    } else {
        backgroundColor = 'green';
    }
    ball.style.backgroundColor = backgroundColor;
    container.appendChild(ball);
}