1. 점위 위치 구하기

function solution(dot) {
  if( dot[0] > 0 && dot[1] > 0) {
    return 1
  } else if( dot[0] < 0 && dot[1] > 0) {
    return 2
  } else if( dot[0] < 0 && dot[1] < 0) {
    return 3
  } else {
    return 4
  }
}


2. 2차원으로 만들기

function solution(num_list, n) {
  let answer = []
  for(let i = 0; i< num_list.length; i+=n) {
    answer.push(num_list.slice(i, i+n))
  }
  return answer
}


3. 배열 회전시키기

function solution(numbers, reverse) {
  if (reverse === "right") numbers.unshift(numbers.pop());
  else numbers.push(numbers.shift());
  return numbers;
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
