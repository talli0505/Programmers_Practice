양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.
x는 1 이상, 10000 이하인 정수입니다.
arr	return
10	  true
12	  true
11	  false
13	  false



function solution(x) { 
  let sum = 0;                        // 더한 값을 넣을 변수
  let arr = String(x).split("");      // 받은 x값을 쪼개서 배열로
  
  for(let i=0; i<arr.length; i++){    // 배열 길이만큼 돌면서
      sum += Number(arr[i])           // 숫자로 형변환해서 더하기
  }
  if ( x % sum == 0) {                // x값을 더한값으로 나눌때 0이면
    return true                       // true
  } else {                            // 0이 아니면
    return false                      // false
  }
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
