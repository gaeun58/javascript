console.log('Hello World!')

// 변수 선언
let espressoPrice = 3000;
let lattePrice = 4000;

console.log(espressoPrice * 3);
console.log(espressoPrice * 2 + lattePrice * 3);

// 함수 선언
function greetings() {
    console.log('Hi');
    console.log('안녕');
    console.log('Guten Tag');
    console.log('Bonjour');
}
// 함수 호출
greetings();

// 함수 선언 실습: 애국가 가사
function printChorus() {
    console.log('무궁화 삼천리 화려 강산');
    console.log('대한 사람 대한으로 길이 보전하세');
}

console.log('1절');
console.log('동해 물과 백두산이 마르고 닳도록');
console.log('하느님이 보우하사 우리나라 만세');
printChorus();

console.log('2절');
console.log('남산 위에 저 소나무 철갑을 두른 듯');
console.log('바람서리 불변함은 우리 기상일세');
printChorus();

/*
1MB = 1024KB
1GB = 1024MB
1TB = 1024GB 라고 합니다.

(출력예시)
2TB는
2048GB 입니다.
2TB는
2097152MB 입니다.
 */

function teraToGiga(volume) {
    console.log(volume + 'TB는' )
    console.log(volume * 1024 + 'GB 입니다.')
}

function teraToMega(volume) {
    console.log(volume + 'TB는')
    console.log(volume * 1024 * 1024 + 'MB 입니다.')
}

teraToGiga(2);
teraToMega(2);

// 여러 개의 파라미터
function bmiCalculator(name, weight, tall) {
    console.log(name + '님의 체질량지수는 ' + weight / (tall * tall / 10000) + '입니다.')
}

bmiCalculator('홀쭉이', 43.52, 160);
bmiCalculator('코린이', 61.25, 175);
bmiCalculator('통통이', 77.76, 180);

// 불린
console.log(true && true); /*and*/
console.log(true || false); /*or*/
console.log(!true); /*반대값*/

// typeof 연산자
// 형 변환
console.log(Number('10') + Number('5'));