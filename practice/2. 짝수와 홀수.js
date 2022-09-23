정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.
num은 int범위의 정수입니다.
0은 짝수입니다.

function solution(num) {
  var answer = '';    // 값을 받을 변수
  if(num % 2 == 0) {  // 2로 나눴을 때 0이라면
    answer = "Even"   // 짝수 대입
  }
  else {              // 2로 나눴을 때 0이 아니라면
    answer = "Odd"    // 홀수 대입
  }
  return answer;      // 정답으로 이동
}



출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
