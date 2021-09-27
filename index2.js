// 각 등급별 가격
let VIPPrice = 15;
let RPrice = 13;
let SPrice = 10;
let APrice = 8;

// 각 등급에 맞는 가격을 출력하는 함수 checkPrice를 완성하기.
function checkPrice(grade) {
    switch (grade) {
        case 'VIP' :
            console.log(`${grade}석은 ${VIPPrice}만원 입니다.`);
            break;
        case 'R' :
            console.log(`${grade}석은 ${RPrice}만원 입니다.`);
            break;
        case 'S' :
            console.log(`${grade}석은 ${SPrice}만원 입니다.`);
            break;
        case 'A' :
            console.log(`${grade}석은 ${APrice}만원 입니다.`);
            break;
        default:
            console.log('VIP, R, S, A 중에서 하나를 선택해 주세요.');
    }
}

// 테스트 코드
checkPrice('R');
checkPrice('VIP');
checkPrice('S');

// for 반복문을 사용하여 1 이상 100 이하의 짝수를 모두 출력
for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (let i = 1; i <= 50; i++) {
    console.log(i * 2);
}

// while 반복문을 사용하여 1 이상 100 이하의 홀수를 모두 출력
let i = 1;

while(i < 100) {
    console.log(i);
    i += 2;
}

while (i <= 100) {
    if (i % 2 === 1) {
        console.log(i);
    }
    i++;
}