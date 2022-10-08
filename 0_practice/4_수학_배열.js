1. 피자 나눠 먹기(1)

function solution(n) {
  return n % 7 === 0 ? Math.floor(n / 7) : Math.floor(n / 7) + 1;
}

2. 피자 나눠 먹기(2)

function LCM(num1, num2) {                                  // 최소공배수 함수
  let lcm = 1                                               // 기본 1
  while(true) {                                             // 반복문 돌면서
    if(lcm % num1 == 0 && lcm % num2 == 0) {                // 둘이 동시에 나누어지는 값을
      break;                                                // 찾으면 나가고
    } else {                                                // 못찾으면
      lcm ++                                                // 숫자 올리기
    }
  }
  return lcm                                                // break하면서 받은 값 반환
}

function solution(n) {
  return Math.floor(LCM(n,6)) / 6
}


3. 피자 나눠 먹기(3)

function solution(slice, n) {
  for(let i = 1; i <= 100 ; i++) {
    if ( slice*i >= n ) {
      return i
    }
  }
}


4. 배열의 평균값

function solution(numbers) {
  return numbers.reduce((a,b) => a+b) / numbers.length
}



출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
