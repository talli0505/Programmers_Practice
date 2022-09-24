행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 
2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.
행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.
arr1	              arr2	        return
[[1,2],[2,3]]	[[3,4],[5,6]]	[[4,6],[7,9]]
[[1],[2]]	      [[3],[4]]	    [[4],[6]]



function solution(arr1, arr2) {
  var answer = [];                            // 값을 받을 변수
  for(let i=0; i<arr1.length; i++){           // 배열 arr1에 길이에 맞춰 반복문 돌면서
      let sum = [];                           // 핪을 받을 변수
      for(let j=0; j<arr1[i].length; j++){    // 2차 배열 처럼 [0,0] [0,1] [1,0] [1,1] 이런식으로 받기 위해 반복묵 돌리면서
          sum.push(arr1[i][j] + arr2[i][j])   // 같은 자리 끼리 더한걸 sum에 넣고
      }
      answer.push(sum)                        // 그 합 값을 답으로 보내줌
  }
  return answer;                              // 그 답을 대입
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
