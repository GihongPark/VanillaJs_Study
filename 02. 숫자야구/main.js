var body = document.body;

var numberArr = setNumberArr();

var result = document.createElement('h1');
body.append(result);
var form = document.createElement('form');
body.append(form);
var input = document.createElement('input');
input.type='number';
input.maxLength= 4;
form.append(input);
var button = document.createElement('button');
button.textContent = '입력';
form.append(button);

var cnt = 0;
form.addEventListener('submit', function(e) {
    e.preventDefault();

    var anser = input.value;
    if(anser === numberArr.join('')) {  // join() : 배열을 문자열로 (param은 구분점)
        result.textContent = '홈런';
        numberArr = setNumberArr();
    } else {    // 틀리면
        cnt++;
        if(cnt>10) {
            result.textContent = `10회 이상 틀렸습니다. 답은 ${numberArr.join('')}입니다`;
            numberArr = setNumberArr();
            cnt = 0;
            return;
        } else {

            var anserArr = anser.split(''); // split() : 문자열을 배열로
            var strike = 0;
            var ball = 0;
            for(var i=0; i<4; i++) {
                console.log(Number(anserArr[i]), numberArr[i]);
                if(Number(anserArr[i]) === numberArr[i]) {
                    strike++;
                } else if(numberArr.indexOf(Number(anserArr[i])) > -1) {    // indexOf(param) : param이 있는 index 반환 (없으면 -1);
                    ball++;
                }
            }
    
            result.textContent = `${cnt}회 스트라이크 : ${strike}, ball : ${ball}`;
        }
    }

    input.value = ''
    input.focus();
});

function setNumberArr() {
    var numberList = [1,2,3,4,5,6,7,8,9];
    var numberArr = [];

    for(var i=0; i<4; i++) {
        // var num = numberList.pop();     // [9,8,7,6]
        // var num = numberList.shift();   // [1,2,3,4]

        // numberArr.push(num);            // 0번째 인덱스부터 삽입
        // numberArr.unshift(num);         // 마지막 인덱스부터 삽입

        // 랜덤한 숫자 뽑기
        var num = numberList.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        numberArr.push(num);
    }

    console.log(numberArr);
    return numberArr;
}