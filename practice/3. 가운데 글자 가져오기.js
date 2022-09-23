단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
단어의 길이가 짝수라면 가우넫 두글자를 반환하면 됩니다.
s는 길이가 1이상, 100이하인 스트링입니다.

function solution(s) {
  var answer = '';                                    // 값을 받을 변수
  if( s.length % 2 == 0) {                            // s의 길이가 2로 나눴을때 0이라면
    answer = s[s.length / 2 - 1] + s[s.length / 2];   // 짝수 길이 이므로 가운데에 이전값과 이후값 두개
  } else {      
    answer = s[Math.floor(s.length/2)];               // 0이 아니라면 홀수 이므로 가운데 숫자만 가져옴 
  }
  return answer;                                      // 정답 넣기
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
