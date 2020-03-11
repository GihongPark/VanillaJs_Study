var dataset = [];
document.querySelector("#exec").addEventListener("click", function() {
    var hor = document.querySelector("#hor").value;
    var ver = document.querySelector("#ver").value;
    var mine = document.querySelector("#mine").value;
    // console.log(hor, ver, mine)
    
    // 지뢰찾기 테이블 생성
    var tbody = document.querySelector("#table tbody");
    tbody.innerHTML='';
    for(var i=0; i<ver; i++) {
        var arr = [];
        dataset.push(arr);
        
        var tr = document.createElement("tr");
        for(var j=0; j<hor; j++) {
            arr.push(1);
            
            var td = document.createElement("td");

            td.addEventListener('contextmenu', function(e) {
                e.preventDefault();

                // e.currentTarget : 이벤트를 달아준 대상
                // e.target : 실제 이벤트가 발생한 객체
                var parentTr = e.currentTarget.parentNode;
                var parentTable = parentTr.parentNode;
                var tCell = Array.prototype.indexOf.call(parentTr.children, e.currentTarget);
                var tRow = Array.prototype.indexOf.call(parentTable.children, parentTr);
                // console.log(parentTr, parentTable, e.currentTarget, tCell, tRow);

                if(e.currentTarget.textContent === '' || e.currentTarget.textContent === 'X'){
                    e.currentTarget.textContent = "!";
                } else if(e.currentTarget.textContent === '!') {
                    e.currentTarget.textContent = "?";
                } else if(e.currentTarget.textContent === '?') {
                    console.log(tRow, tCell, dataset[tRow][tCell]);
                    if(dataset[tRow][tCell] === 1) {
                        e.currentTarget.textContent = "";
                    } else if(dataset[tRow][tCell] === 'X') {
                        e.currentTarget.textContent = "X";
                    }
                }
                
            });
            td.addEventListener('click', function (e) {
                var parentTr = e.currentTarget.parentNode;
                var parentTable = parentTr.parentNode;
                var tCell = Array.prototype.indexOf.call(parentTr.children, e.currentTarget);
                var tRow = Array.prototype.indexOf.call(parentTable.children, parentTr);

                if(dataset[tRow][tCell] === 'X') {
                    e.currentTarget.textContent = '펑';
                } else { // 주변 지뢰 개수
                    var tempArr = [
                        dataset[tRow][tCell-1],                         dataset[tRow][tCell+1],
                    ];
                    if(dataset[tRow-1]) {
                        // concat : 배열과 배열을 합쳐 새로운 배열 반환
                        tempArr = tempArr.concat(dataset[tRow-1][tCell-1],dataset[tRow-1][tCell],dataset[tRow-1][tCell+1]);
                    }
                    if(dataset[tRow+1]){
                        tempArr = tempArr.concat(dataset[tRow+1][tCell-1],dataset[tRow+1][tCell],dataset[tRow+1][tCell+1]);
                    }
                    console.log(tempArr);
                    e.currentTarget.textContent = tempArr.filter(v => v==='X').length;
                }
            })
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    // 지뢰 위치
    var minePosition = createMinePosition(hor, ver, mine);
    console.log(minePosition);
    // 지뢰 심기
    for(var k=0; k<minePosition.length; k++) {
        var row = Math.floor(minePosition[k] / hor);
        var cell = minePosition[k] % hor;
        tbody.children[row].children[cell].textContent = "X";
        dataset[row][cell] = "X";
    }
    // console.log(dataset)


});

function createMinePosition(hor, ver, mine) {
    var mineList = Array(hor * ver)
        .fill()
        .map((v,i) => i);

    var cnt = hor * ver - mine
    var shuffle = [];
    while(mineList.length > cnt) {
        var temp = mineList.splice(Math.floor(Math.random() * mineList.length), 1)[0];
        shuffle.push(temp);
    }
    return shuffle.slice(0, mine);
}

