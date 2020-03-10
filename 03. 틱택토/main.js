const body = document.body;

const trs = document.querySelectorAll('tr');
const tdArr = [];
let turn = 'X';

for(tr of trs) {
    const tds = tr.querySelectorAll('td');

    const temp = [];
    for(td of tds) {
        td.addEventListener('click', clickEvent);
        temp.push(td);
    }
    tdArr.push(temp);
}
console.log(tdArr);

function clickEvent(e) {
    console.log(e);
    const row = e.target.parentNode.rowIndex;
    const cell = e.target.cellIndex;

    if(tdArr[row][cell].textContent !== '') { } // 빈칸이 아닐때

    // 빈칸일때
    tdArr[row][cell].textContent = turn;

    // bingo 체크
    let bingoCheck = false;
    // 가로줄 검사
    if(
        tdArr[row][0].textContent === turn &&
        tdArr[row][1].textContent === turn &&
        tdArr[row][2].textContent === turn
    ) {
        bingoCheck = turn;
    }
    // 세로줄 검사
    if(
        tdArr[0][cell].textContent === turn &&
        tdArr[1][cell].textContent === turn &&
        tdArr[2][cell].textContent === turn
    ) {
        bingoCheck = true;
    }
    // 대각선 검사
    if(row - cell === 0) {
        if(
            tdArr[0][0].textContent === turn &&
            tdArr[1][1].textContent === turn &&
            tdArr[2][2].textContent === turn
        ) {
            bingoCheck = true;
        }
    } else if(Math.abs(row - cell) === 2) {
        if(
            tdArr[0][2].textContent === turn &&
            tdArr[1][1].textContent === turn &&
            tdArr[2][0].textContent === turn
        ) {
            bingoCheck = turn;
        }
    }

    if(bingoCheck) {
        document.querySelector('h1').textContent = `${turn}님 승리!`;
        // 초기화
        turn = 'X';
        tdArr.forEach(function (row) {
            row.forEach(function(cell) {
                cell.textContent = '';
            });
        });
    } else {
        if(turn === 'X') {
            turn = 'O';
        } else {
            turn = 'X';
        }
    }
}