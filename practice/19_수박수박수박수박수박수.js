길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요.
예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.
n은 길이 10,000이하인 자연수입니다.
n	return
3	"수박수"
4	"수박수박"


function solution(n) {
  var answer = ''                  //정답을 위해 선언
  for(let i = 0; i < n ; i++) {   // n의 길이만큼 돌리면서
    if ( i % 2 == 0) {            // 0부터 시작이므로 짝수이면
      answer += '수'               // 수를 대입
    } else {                      // 홀수면
      answer += '박'               // 박을 대입
    }
  }
  return answer                     // 정답 보여주기
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
