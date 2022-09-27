자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
N의 범위 : 100,000,000 이하의 자연수
N	answer
123	6
987	24


// 문자열
function solution(n){
  let answer = 0                          // 정답을 선언하기 위한 변수
  n = n.toString()                        // 숫자를 문자로 형변환
  for (let i = 0; i < n.length; i++){     // 길이만큼 반복문
    answer += parseInt(n[i])              // 각각 숫자로 다시 형변환하면서 더해주고 정답에 대입
  }
  return answer;                          // 정답 보여주기
}

// 숫자
function solution(n){
  var sum = 0;

  do {
      sum += n%10;
      n = Math.floor(n/10); // 반올림
  } while(n > 0);

  return sum;
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
