함수 solution은 정수 n을 매개변수로 입력받습니다.
n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
예를들어 n이 118372면 873211을 리턴하면 됩니다.
n은 1이상 8000000000 이하인 자연수입니다.
   n	   return
118372	873211


function solution(n) {
  const str = n.toString(); // 들어온 숫자를 배열로 변환하기 위해 우선 문자열로 변환한다.
  const arr = str.split("");  // split() 메서드를 이용해 문자열을 배열로 변환한다.  "118372" -> ["1", "1", "8", "3", "7", "2"]
  const sortedArr = arr.sort((a, b) => b - a);   // Array의 sort() 메서드를 이용해 문자를 정렬한다. ["1", "1", "8", "3", "7", "2"] -> ["8", "7", "3", "2", "1", "1"]
  const sorted = parseInt(sortedArr.join("")) // join() 메서드를 이용해 배열을 문자열로 변환한다. ["8", "7", "3", "2", "1", "1"] -> "873211"

  return sorted // 최종적으로 나온 정렬된 문자열 값을 정수로 변환 후 반환한다."873211" -> 873211
}

// 내가 푼 두번째 방식
function solution(n) { 
  return parseInt(n.toString().split('').sort((a,b) => b-a).join(''))
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
