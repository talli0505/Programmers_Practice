문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
         s	             return
"try hello world"	"TrY HeLlO WoRlD"
"try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다. 
각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 "TrY", "HeLlO", "WoRlD"입니다. 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.


function solution(s) {
    let answer = '';                                   //정답을 대입하기 위한 변수
    let arr = s.split(' ');                            // 각각을 쪼개서 대입 [ 'try', 'hello', 'world' ]

    for (let i = 0; i < arr.length; i++) {             // 쪼갠 길이 만큼 반복문을 돌면서
        for (let j = 0; j < arr[i].length; j++) {      // 2차 배열인데 뒷 부분을 0으로 고정
            if (j % 2 === 0) {                         // 여기서 짝수이면
                answer += arr[i][j].toUpperCase();     // 대문자
            } else {                                    // 홀수이면
                answer += arr[i][j].toLowerCase();      // 소문자
            }
        }                                               
        if (i < arr.length - 1) {                      // 길이를 넘어서지 않는 값이라면 
            answer += ' ';                              // 정답에 대입
        }
    }
    return answer;                                      // 정답 보여주기
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
