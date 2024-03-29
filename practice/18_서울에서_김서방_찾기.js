String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요.
seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.
seoul은 길이 1 이상, 1000 이하인 배열입니다.
seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
"Kim"은 반드시 seoul 안에 포함되어 있습니다.
     seoul	        return
 ["Jane", "Kim"]	"김서방은 1에 있다"


function solution(seoul) {
  var answer = '';                            // 정답을 받기 위해 선언
  for(let i = 0; i < seoul.length; i++) {     // 서울의 길이 만큼 반목문을 돌리면서
    if ( seoul[i] === "Kim" ) {               // 서울 배열안에 김이 있으면
      answer = `김서방은 ${i}에 있다`           // 백틱을써서 몇번째인지 알려주고 대입
    }
  }
  return answer;                              // 정답을 보여줌
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
