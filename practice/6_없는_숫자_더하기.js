0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.
1 ≤ numbers의 길이 ≤ 9
0 ≤ numbers의 모든 원소 ≤ 9
numbers의 모든 원소는 서로 다릅니다.
numbers	          result
[1,2,3,4,6,7,8,0]	  14
[5,8,4,0,6,7,9]	    6
5, 9가 numbers에 없으므로, 5 + 9 = 14를 return 해야 합니다.


function solution(numbers) {
  var answer = 0;                   // 값을 대입 받을 변수
  for(let i = 0; i < 10; i++) {     // 길이가 1~9라고 했으니 반복문 그 사이
    if(!numbers.includes(i)) {      //  돌면서 그 값이 포함되어있는지 아닌지 확인
      answer += i                   // 그 값이 없으면 그 값만 꺼내서 더함
    }
  }
  return answer;                    // 정답에 대입
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
