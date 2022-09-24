정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
arr은 길이 1 이상, 100 이하인 배열입니다.
arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
arr	      return
[1,2,3,4]	    2.5
[5,5]	        5


function solution(arr) {
  var answer = 0;                           // 값을 대입할 변수
  for(let i = 0; i < arr.length; i++) {     // 배열 arr길이 만큼 반목문 돌면서
    answer += arr[i]                        // 그 안에 값들은 더해주고
  }
  answer = answer/arr.length                // 더해준 값을 배열 길이로 나누어서 평균을 잡음
  return answer                             // 정답을 대입
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
