// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.
//      arr	        divisor	        return
// [5, 9, 7, 10]	    5	          [5, 10]
// [2, 36, 1, 3]	    1	        [1, 2, 3, 36]
//   [3, 2, 6]	      10	          [-1]


function solution(arr, divisor) {
  var answer = [];                    // 답을 받을 변수
  for(i=0; i<arr.length; i++) {       // 배열길이 만큼 돌면서
    if(arr[i] % divisor == 0) {       // 배열값을 divisor로 나눴을때 나머지가 없으면
      answer.push(arr[i]);            // 정답에 푸쉬
    }
  }
  if(answer.length == 0) {            // 아무값도 못받아서 정답 변수의 길이가 0이면
    answer.push(-1);                  // 정답에 -1 푸쉬
  }
  answer.sort((a,b) => a - b);        // 오른쪽 값이 크면 빼고 아니면 말고
  return answer;                      // 정답 올리기
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
