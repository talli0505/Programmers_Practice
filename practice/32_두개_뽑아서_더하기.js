정수 배열 numbers가 주어집니다.
numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.
numbers의 길이는 2 이상 100 이하입니다.
numbers의 모든 수는 0 이상 100 이하입니다.
numbers	        result
[2,1,3,4,1]	[2,3,4,5,6,7]
[5,0,2,7]	    [2,5,7,9,12]


function solution(numbers) {
  let answer = [];                                // 답을 받을 변수
  for (let i =0; i < numbers.length-1; i++){      // 배열에서 0부터 끝보다 하나 아래까지 반복문
    for (let j = i+1; j < numbers.length; j++){   // 배열에서 1부터 끝가지 반복문
      const sum = numbers[i] + numbers[j]         // 서로 더한 값을 sum에 대입
      if(answer.indexOf(sum) == -1){              // 변수 안에 sum의 존재안하면
        answer.push(sum) }                        // 없으면 push
            }
      }
    answer.sort((a,b)=>a-b)                       // 정렬
    return answer;
  }


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
