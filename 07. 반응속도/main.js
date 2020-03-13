const 스크린 = document.querySelector("#screen");
var 시작시간;
var 끝시간;
var 기록 = [];
var 타임아웃

스크린.addEventListener('click', () => {
    if(스크린.classList.contains('waiting')){   // contains() : 현재 클래스 파악
        스크린.classList.remove('waiting');
        스크린.classList.add('ready');
        스크린.textContent = "초록색이되면 클릭";

        타임아웃 = setTimeout(() => {
            시작시간 = new Date();
            스크린.click();
        }, (Math.random() * 1000) + 200);
    } else if(스크린.classList.contains('ready')){   // contains() : 현재 클래스 파악
        if(!시작시간) {  // 부정클릭
            clearTimeout(타임아웃);
            스크린.classList.remove('ready');
            스크린.classList.add('waiting');
            스크린.textContent = "성급하시군요 다시시작해주세요";
        } else {
            스크린.classList.remove('ready');
            스크린.classList.add('now');
            스크린.textContent = "클릭!!";
        }
    } else if(스크린.classList.contains('now')){   // contains() : 현재 클래스 파악
        끝시간 = new Date();
        console.log("반응속도 : " + (끝시간 - 시작시간) + 'ms');
        기록.push(끝시간 - 시작시간);
        시작시간 = null;
        끝시간 = null;

        스크린.classList.remove('now');
        스크린.classList.add('waiting');
        스크린.textContent = "클릭해서 시작";
    }
    console.log('클릭');
});