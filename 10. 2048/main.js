var table = document.getElementById('table');
var score = document.getElementById('score');
var data = [];

function init() {
    data = [];
    var fragment = document.createDocumentFragment();
    [1,2,3,4].forEach(() => {
        var rowData = [];
        data.push(rowData);
        var tr = document.createElement('tr');
        [1,2,3,4].forEach(() => {
            rowData.push(0);
            var td = document.createElement('td');
            tr.appendChild(td);
        })
        fragment.appendChild(tr);
    });
    table.appendChild(fragment);
}

function random() {
    var blankArr = [];
    data.forEach((rowData, i) => {
        rowData.forEach((cellData, j) => {
            if(!cellData) {
                blankArr.push([i, j]);
            }
        });
    });

    // console.log(blankArr);
    if(blankArr.length === 0) {
        alert(`게임오버 : ${score.textContent}`);
        table.innerHTML = '';
        score.textContent = 0;
        init();
        random();
    } else {
        var randomData = blankArr[Math.floor(Math.random() * blankArr.length)];
        data[randomData[0]][randomData[1]] = 2;
        draw();
    }
}

function draw() {
    data.forEach((rowData, i) => {
        rowData.forEach((cellData, j) => {
            if(cellData > 0) {
                table.children[i].children[j].textContent = cellData;
            } else {
                table.children[i].children[j].textContent = '';
            }
        });
    });
}


init();
random();
draw();

// screenX: 모니터 기준 좌표
// pageX: 페이지(스크롤포함)
// clientX: 브라우저 화면 기준
// offsetX: 이벤트 타겟 기준
var dragStart = false;
var dragging = false;
var startPoint, endPoint;
window.addEventListener('mousedown', (e) => {
    // console.log('down', e);
    dragStart = true
    startPoint = [e.clientX, e.clientY];
});
window.addEventListener('mousemove', (e) => {
    if(dragStart) {
        // console.log('move', e);
        dragging = true;
    }
});
window.addEventListener('mouseup', (e) => {
    // console.log('up', e);
    dragStart = false;
    endPoint = [e.clientX, e.clientY];
    
    if(!dragging){
        return;
    }

    dragging = false;

    var direction,
        x = endPoint[0] - startPoint[0],
        y = endPoint[1] - startPoint[1];
    if(x < 0 && Math.abs(x) / Math.abs(y) > 1) {
        direction = 'left';
    } else if(x > 0 && Math.abs(x) / Math.abs(y) > 1) {
        direction = 'right';
    } else if(y > 0 && Math.abs(x) / Math.abs(y) < 1) {
        direction = 'down';
    } else if(y < 0 && Math.abs(x) / Math.abs(y) < 1) {
        direction = 'up';
    }
    console.log(direction);

    // 재귀로 풀어보기 다시 풀어보기
    var tempArr = [[],[],[],[]];
    var maxScore= parseInt(score.textContent);
    switch(direction) {
        case 'left':
            data.forEach((rowData, i) => {
                rowData.forEach((cellData, j) => {
                    if(cellData) {
                        var prevCellData = tempArr[i][tempArr[i].length - 1];
                        if(prevCellData === cellData) {
                            tempArr[i][tempArr[i].length - 1] *= 2;
                            maxScore = maxScore > tempArr[i][tempArr[i].length - 1] ? maxScore : tempArr[i][tempArr[i].length - 1]
                            score.textContent = maxScore;
                        } else {
                            tempArr[i].push(cellData);
                        }

                    }
                });
            });

            // 그리기
            [1,2,3,4].forEach((cellData, i) => {
                [1,2,3,4].forEach((rowData,j) => {
                    data[i][j] = tempArr[i][j] || 0
                });
            });

            break;
        case 'right':
            data.forEach((rowData, i) => {
                rowData.forEach((cellData, j) => {
                    if(cellData) {
                        var prevCellData = tempArr[i][0];
                        if(prevCellData === cellData) {
                            tempArr[i][0] *= 2;
                            maxScore = maxScore > tempArr[i][0] ? maxScore : tempArr[i][0]
                            score.textContent = maxScore;
                        } else {
                            tempArr[i].unshift(cellData);
                        }
                    }
                });
            });

            // 그리기
            [1,2,3,4].forEach((cellData, i) => {
                [1,2,3,4].forEach((rowData,j) => {
                    data[i][3 - j] = tempArr[i][j] || 0
                });
            });

            break;
        case 'up':
            data.forEach((rowData, i) => {
                rowData.forEach((cellData, j) => {
                    if(cellData) {
                        var prevCellData = tempArr[j][tempArr[j].length - 1];
                        if(prevCellData === cellData) {
                            tempArr[j][tempArr[j].length - 1] *= 2;
                            maxScore = maxScore > tempArr[j][tempArr[j].length - 1] ? maxScore : tempArr[j][tempArr[j].length - 1]
                            score.textContent = maxScore;
                        } else {
                            tempArr[j].push(cellData);
                        }

                    }
                });
            });

            // 그리기
            [1,2,3,4].forEach((cellData, i) => {
                [1,2,3,4].forEach((rowData,j) => {
                    data[j][i] = tempArr[i][j] || 0
                });
            });

            break;
        case 'down':
            data.forEach((rowData, i) => {
                rowData.forEach((cellData, j) => {
                    if(cellData) {
                        var prevCellData = tempArr[j][0];
                        if(prevCellData === cellData) {
                            tempArr[j][0] *= 2;
                            maxScore = maxScore > tempArr[j][0] ? maxScore : tempArr[j][0]
                            score.textContent = maxScore;
                        } else {
                            tempArr[j].unshift(cellData);
                        }
                    }
                });
            });

            // 그리기
            [1,2,3,4].forEach((cellData, i) => {
                [1,2,3,4].forEach((rowData,j) => {
                    data[3 - j][i] = tempArr[i][j] || 0
                });
            });

            break;
    }
    random();
});