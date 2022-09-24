프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.
phone_number는 길이 4 이상, 20이하인 문자열입니다.
phone_number	      return
"01033334444"	"*******4444"
"027778888"	    "*****8888"


function solution(phone_number) {
  var answer = '';                                // 값을 대입할 변수
  for(let i = 0; i< phone_number.length; i++) {   // 전화번호 길이 만큼 반복문 돌면서
    if( i < phone_number.length - 4) {            // 전화번호 뒷자리 4자리 길이만큼 뺀 값 보다 작으면
      answer += "*"                               // 다 별(*)로 채우고
    }
    else {                                        // 나머지 4자리는
      answer += phone_number[i]                   // 그대로 넣음
    }
  }
  return answer;                                  // 정답에 대입
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
