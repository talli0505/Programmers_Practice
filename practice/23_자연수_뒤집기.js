자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
n은 10,000,000,000이하인 자연수입니다.
   n	    return
12345	[5,4,3,2,1]


// 숫자 그대로 미는거
function solution(n){
	var answer = []             // 정답을 받기위해 선언
    do{                       // while문을 돌리면서
      answer.push(n%10)       // 10으로 먼저 나누고 나머지 값을 대입
      n = Math.floor(n/10)    // 10으로 나눠서 자리수를 하나 낮춤
    } while ( n > 0 )         // n이 영보다 작아지면 스톱
      
    return answer;            // 정답 보여주기
}

// 문자열로 바꾸기
function solution(n) {
  var arr = n.toString().split('');
  var answer = [];

  for(var i=arr.length-1; i>=0; i--){
      answer.push(Number(arr[i]));
  }

  return answer;
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
