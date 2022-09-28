임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
n은 1이상, 50000000000000 이하인 양의 정수입니다.
n	return
121	144
3	  -1
121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.



// 내가 쓴 방식
function solution(n) {
  let answer = Math.sqrt(n)           // n의 제곱근 값을 찾아온다
  if ( answer % 1 == 0 ) {           // 1로 나눴을때 0이면
    answer = (answer+1) * (answer+1)  // 정답+1 해서 제곱을 가져온다
  }
  else {
    answer = -1                       // 제곱이 아니면 -1
  }

  return answer
}

// 내가 쓴 방식2

function solution(n) {
  let answer = Math.sqrt(n)
  if ( answer % 1 === 0) {
    answer = (answer + 1)**2
  }
  else {
    answer = -1
  }
  
  return answer
}



출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
