1. 최대값 만들기 (2)


function solution(numbers) {
  numbers.sort((a,b) => b-a)
  if(numbers[0]*numbers[1] > numbers[numbers.length-1]*numbers[numbers.length-2]) {
    return numbers[0]*numbers[1]
  } else {
    return numbers[numbers.length-1]*numbers[numbers.length-2]
  }
}

출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
