let computer = 0;
const dictionary = {
    rock : 0,
    scissor : '-142px',
    paper : '-284px',
}
console.log(Object.entries(dictionary));    // Object.entries() : 객체를 배열로 바까줌
function findComputerValue(value) {
    return Object.entries(dictionary).find(v => v[1] === value)[0]; 

    // find : 배열에서 원하는 값을 찾아줌
    // findIndex : 원하는 값의 index를 찾아줌
}

let interval;
function makerInterval () {
    interval = setInterval(function () {
        if(computer === dictionary.rock) {
            computer = dictionary.scissor;
        } else if (computer === dictionary.scissor) {
            computer = dictionary.paper;
        } else {
            computer = dictionary.rock;
        }

        document.querySelector('#computer').style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${computer}, 0`;
    }   , 100);
}
makerInterval();

var score = {
    rock: 1,
    scissor: 0,
    paper: -1,
}
document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        clearInterval(interval);
        setTimeout(makerInterval, 1000);
 
        const mySelect = this.textContent;
        const comSelect = findComputerValue(computer);

        if(score[mySelect] - score[comSelect] === 0) {
            console.log("비겼습니다.")
        //} else if(score[mySelect] - score[comSelect] === -1 || score[mySelect] - score[comSelect] === 2) {
        } else if([-1, 2].includes(score[mySelect] - score[comSelect])) {   // 배열안의 값들 중 파라미터 값이 잇으면 true
            console.log("이겼습니다.");
        } else {
            console.log("졌습니다.");
        }
    })
});