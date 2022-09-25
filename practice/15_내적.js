길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.
이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)
a, b의 길이는 1 이상 1,000 이하입니다.
a, b의 모든 수는 -1,000 이상 1,000 이하입니다.
     a	        b	      result
 [1,2,3,4]	[-3,-1,0,2]	  3
 [-1,0,1]	  [1,0,-1]	  -2
a와 b의 내적은 1*(-3) + 2*(-1) + 3*0 + 4*2 = 3 입니다.


function solution(a, b) {
  var answer = 0;                         // 값을 받을 변수
  for(let i = 0; i < a.length; i++) {     // a의 배열만큼 돌면서
      answer += a[i]*b[i]                 // 배열의 각각 같은 자리 값을 곱하고 더함
  }
  return answer
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
