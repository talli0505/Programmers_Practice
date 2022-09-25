함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개
지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수를 완성해주세요
x는 -10000000 이상, 10000000 이하인 정수입니다.
n은 1000 이하인 자연수입니다.


function solution(x, n) {
  var answer = [];                 // 정답
  for(let i = 0; i < n; i++) {     // n만큼 반복문을 돌리면서 
    answer[i] = x*(i+1)             // 변수 값에 x만큼 곱해지는 값을 대입 예를 들어 2,4,6,8,10
  }
  return answer;                   // 정답을 나타냄
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
