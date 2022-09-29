// 자연수 n이 매개변수로 주어집니다.
// n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.
// n은 1 이상 100,000,000 이하인 자연수입니다.
// n	result
// 45	  7
// 125	229


function solution(n) {
  // 순서
  // 1. 받은 값을 3진법으로 바꾼다
  // 2. 바꾼 값을 split으로 쪼개서 배열로 넣는다
  // 3. 배열 값을 뒤집는다
  // 4. 다시 합친다.
  // 5. 합친 배열 값을 숫자로 형변환 하면서 값을 10진법으로 바꾼다.
  let answer = n.toString(3).split("").reverse().join("");;
  return parseInt(answer, 3);
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
