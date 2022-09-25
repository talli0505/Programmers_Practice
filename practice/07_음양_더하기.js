어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다.
실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.
absolutes의 길이는 1 이상 1,000 이하입니다.
absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
signs의 길이는 absolutes의 길이와 같습니다.
signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.
absolutes	    signs	          result
[4,7,12]	[true,false,true]	      9
[1,2,3]	[false,false,true]	    0
signs가 [true,false,true] 이므로, 실제 수들의 값은 각각 4, -7, 12입니다.


function solution(absolutes, signs) {
  let answer = 0;                                   // 정답 받을 변수
  for (let i = 0; i < absolutes.length; i++) {      // absolute의 길이 만큼 돌면서
    if (signs[i] === true) {                        // 주어진 sign값이 true이면 
      answer = answer + absolutes[i];               // 값을 더하고
    } else {                                        // 주어진 sign값이 false이면
      answer = answer - absolutes[i];               // 값을 뺌
    }
  }
  return answer                                     // 정답에 대입
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
