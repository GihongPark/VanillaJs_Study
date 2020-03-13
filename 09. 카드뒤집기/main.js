var 가로 = 4;
var 세로 = 3;
var color = ['red','red', 'orange', 'orange', 'green', 'green', 'yellow', 'yellow', 'white', 'white', 'pink', 'pink'];
var cardList = []
var clickFlag = true;
var clickCard = [];
var finishCard = [];
var startTime;
var procTimeInterval;

for(var i=0; color.length>0; i++) {
    cardList = cardList.concat(color.splice(Math.floor(Math.random() * color.length), 1));
}
console.log(cardList);

function 카드세팅(가로, 세로) {
    clickFlag = false;
    for(var i=0; i<가로 * 세로; i++) {
        var card = document.createElement('div');
        card.className = 'card';
        var cardInner = document.createElement('div');
        cardInner.className = 'card-inner';
        var cardFront = document.createElement('div');
        cardFront.className = 'card-front';
        var cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        cardBack.style.backgroundColor = cardList[i];
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        (function(c) {
            card.addEventListener('click', () => {
                if(clickFlag && !finishCard.includes(c)) {
                    c.classList.toggle('flipped');

                    clickCard.push(c);
                    if(clickCard.length === 2) {
                        var c1 = clickCard[0].querySelector('.card-back').style.backgroundColor;
                        var c2 = clickCard[1].querySelector('.card-back').style.backgroundColor;
                        if(c1 === c2) {
                            finishCard.push(clickCard[0]);
                            finishCard.push(clickCard[1]);
                            clickCard=[];

                            if(finishCard.length === 12) {
                                clearInterval(procTimeInterval);
                                var totTime = (new Date() - startTime) / 1000;
                                setTimeout(() => {
                                    alert('성공 시간 : ' + totTime + '초');
                                }, 100);
                            }
                        } else {
                            clickFlag = false;
                            setTimeout(() => {
                                clickCard[0].classList.remove('flipped');
                                clickCard[1].classList.remove('flipped');
                                clickFlag = true;
                                clickCard = [];
                            }, 500);
                        }
                    }
                }
            });
        })(card);
        document.querySelector('.container').appendChild(card);
    }
}

function cardFlippedAll() {
    var flag = false;
    document.querySelectorAll('.card').forEach((card, i, t) => {
        (function (i) {
            setTimeout(() => {
                card.classList.add('flipped');
                if(i === t.length-1) {
                    flag = true;
                }
            }, 1000 + i * 500)

        })(i);
    });

    var interval = setInterval(() => {
        if(flag) {
            clearInterval(interval);
            setTimeout(() => {
                document.querySelectorAll('.card').forEach((card, i, t) => {
                    card.classList.remove('flipped');
                    clickFlag = true;
                    startTime = new Date();
                    var procTime = document.querySelector('.time span');
                    procTimeInterval = setInterval(() => {
                        procTime.textContent = Math.floor((new Date - startTime) / 1000);
                    }, 1000);
                });
            }, 3000);
        }
    }, 500);
}

카드세팅(가로, 세로);
cardFlippedAll();