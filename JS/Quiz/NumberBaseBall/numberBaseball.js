// 실습 진행 방법 및 제출 방법
// 실습은 자신이 가장 자신 있는 언어를 선택해 다음 문제를 구현한다.
// 실습 결과물은 GitHub를 통해 공유한다.
// 숫자 야구게임
// 요구사항
// 기본적으로 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 맞추는 게임이다.

// 같은 수가 같은 자리에 있으면 스트라이크, 다른 자리에 있으면 볼, 같은 수가 전혀 없으면 포볼 또는 낫싱이란 힌트를 얻고, 그 힌트를 이용해서 먼저 상대방의 수를 맞추면 승리한다.

// [예] 상대방의 수가 425일 때, 123을 제시한 경우 : 1 스트라이크 456을 제시한 경우 : 1 스트라이크 1볼 789를 제시한 경우 : 낫싱

// 위 숫자 야구게임에서 상대방의 역할을 컴퓨터가 한다. 컴퓨터는 1에서 9까지 서로 다른 임의의 수 3개를 선택한다. 게임 플레이어는 컴퓨터가 생각하고 있는 3개의 숫자를 입력하고, 컴퓨터는 입력한 숫자에 대한 결과를 출력한다.

// 이 같은 과정을 반복해 컴퓨터가 선택한 3개의 숫자를 모두 맞히면 게임이 종료된다.

// 게임 진행 결과는 다음과 같다.

// 숫자를 입력해주세요 ex)123 : 123
// 1 스트라이크 1볼 
// 숫자를 입력해주세요 ex)123 : 145
// 1볼 
// 숫자를 입력해주세요 ex)123 : 671
// 2볼 
// 숫자를 입력해주세요 ex)123 : 216
// 1 스트라이크 
// 숫자를 입력해주세요 ex)123 : 713
// 3 스트라이크 
// 3개의 숫자를 모두 맞히셨습니다! 게임 종료
// 프로그래밍 구현 제약사항
// 함수(또는 메소드) 하나의 크기가 최대 10라인을 넘지 않도록 구현한다.
// 함수(또는 메소드)가 한 가지 일만 하도록 최대한 작게 만들어라.
// indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
// 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
// 전역 변수를 사용하지 않는다.
// 힌트
// 컴퓨터가 3개의 값을 선택할 때 각 언어별 random 함수(또는 메소드) 또는 shuffle 함수(또는 메소드)를 이용하면 편한다.
// 반복문을 2중(반복문 안의 반복문)으로 사용하면 한번에 고려할 부분이 많다. 2중 반복문을 1중 반복문 2개로 나누어 처리하는 방법은 없는지 고려해 본다.
// indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.

let shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
            }
let numberList = [1,2,3,4,5,6,7,8,9]

//Array.from(Array(9).keys()).map(item => {return item+1}); 숫자리스트의 숫자가 커지면 크면 고려
        
//0. 1~9 숫자로 이루어진 3자리수 랜덤넘버를 가지고 온다.
let getTargetNumber = parseInt(shuffle(numberList).slice(0,3).join(''));
console.log("getTargetNumber", getTargetNumber);

// 인풋, 버튼 , 결과를 출력할 엘리먼트들을 지정해둔다.
let Input = document.querySelector('.inputNumber')
let hitBtn = document.querySelector('.hitBtn')
let resultBox = document.querySelector('.resultBox')

// 3자리숫가 맞는지 확인하는 함수 
let is3digits = number => parseInt(number / 1000) === 0 && parseInt(number / 100) >= 1

//  세자리 숫자를 받아 각 자리수의 배열을 리턴하는 함수 
let makeDigitsArray = number => {
    let digits3 = parseInt(number / 100)
    let digits2 = parseInt(number % 100 / 10)
    let digits1 = number % 10
    let digits = [digits3, digits2, digits1]
    return digits;
}
// 랜덤넘버로 뽑은 타켓 숫자의 각각의 자리수들을 배열로 저장한다.
let targetDigits = makeDigitsArray(getTargetNumber)

// 엔터키가 눌리면 이닝 함수와 인풋 밸류를 초기화 해준다.
let isEnter = function (e) {
    if (e.keyCode == 13) {
        inning()
        e.target.value = ''
    }
}
// 타켓숫자와 입력한 숫자의 자리수를 비교하여 스트라이크 볼 이닝 등의 결과값을 저장한다. 
// 10줄 넘는 코드
// 이 부분을 분리할 필요성 !!! 
let winningMessage = 'You Win'
const MATCH = 3
let alertUserWin = strike => {
    if (strike === MATCH) return alert(winningMessage); 
};

let compareDigits = (digits, inning) => {
    console.log('digits', digits, 'targetDigits', targetDigits)
    let result = {
        inningText: 'Inning',
        textStrike: 'Strike',
        textBall: 'Ball',
        logText: 'Your Hit is',
        hit: digits.join(''),
        strike: 0,
        ball:  0,
        inning,                           
    }
    for(let i = digits.length-1; i>=0; i--){
        for(let j= targetDigits.length-1; j>=0; j--){
            if(targetDigits [j] === digits[i]){
                if(i===j){
                result.strike++;
                }
                else{
                result.ball++;    
                }
            }
        }
    }
    return result
}
// 전역변수 사용 , 수정 필요?
let inningCount = 0;

// 이닝함수도 10줄이 넘음 
// 3자릿수가 아닌경우 이닝 카운트를 늘려서 비교함수를 실행하는 이닝 함수를 실행합니다.
let inning = function () {
    let InputNumber = Input.value
    if (is3digits(InputNumber)) {
        //세자릿수가 넘으면 이닝카운트를 증가시켜줍니다
        inningCount++;
        // 인풋숫자들 자릿수 배열로 반환하여 저장
        let inputDigits = makeDigitsArray(InputNumber)
        // 비교하여 스트라이크, 볼등의 결과값을 가진 결과를 저장합니다
        let result = compareDigits(inputDigits, inningCount)
        // 게임 이기면 위닝 메시지 알림 
        alertUserWin(result.strike);
        // console.log('strike', result.strike, 'ball', result.ball)
        // 결과값을 가지고 Dom에 출력해 줄 값을 저장합니다.
        // 뒤에 text가 있어서... 순서를 
        // for(let key in result){
        //     `<span class="${key}">${result[key]} ${result.inningText}</span>`
        // }
        let resultTexts = `<p class="resultText">
                                <span class="inning">${result.inning} ${result.inningText}</span>
                                <span class="strike">${result.strike} ${result.textStrike}</span>
                                <span class="ball">${result.ball} ${result.textBall}</span>
                                <span class="hit">${result.logText} ${result.hit}</span>
                            </p>`;
        resultBox.insertAdjacentHTML('beforeend', resultTexts)
    }
    // 셋자릿수가 아닌 경우 값을 초기화 시키고 에러를 발생시킵니다
    else {
        Input.value = ''
        throw new Error('3자리 숫자를 입력해주세요 :D')
    }
}
// 사용자로 부터 엔터나 클릭 이벤트로 부터 이닝함수를 호출합니다
hitBtn.addEventListener('click', inning)
Input.addEventListener('keydown', isEnter)

