두 정수 a,b가 주어졌을 때 a와 b사이에 속한 모든 정수의 합을 리턴하는 함수를 만드시오
예를 들어 a = 3, b = 5인 경우, 3+4+5 = 12를 리턴합니다.
a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
a와 b의 대소관계는 정해져있지 않습니다.


function solution(a, b) {
  var answer = 0;                 // 값을 받을 변수
  if(a>=b){                       // 만약 두개의 대입 값중 앞에 값이 클때
      for(let i=b; i<=a; i++){    // 작은 값 부터 큰 값까지 반복문 돌면서
          answer+=i;              // 그 사이 값을 더함
      }
  }else{                          // 만약 두개의 대입 값중 뒤에 값이 크면
      for(let j=a; j<=b; j++){    // 똑같이 작은 값부터 큰 값까지 반본묵 돌면서
          answer+=j;              // 그 사이 값을 더함
      }
  }
  return answer;                  // 정답을 대입
}

출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
