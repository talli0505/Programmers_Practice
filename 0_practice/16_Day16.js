1. 편지

function solution(message) {
  return message.length *2
}


2. 가장 큰 수 찾기

function solution(array) {
  let a = Math.max(...array)
  let b = 0
  for(let i = 0; i < array.length; i++) {
    if(a === array[i]) {
      b = i
    }
  }
  return [a,b]
}


3. 배열의 유사도

function solution(s1, s2) {
  let count = 0
  s1 = s1.sort()
  s2 = s2.sort()
  for(let i = 0; i < s2.length; i++) {
    if(s2.includes(s1[i])) {
      count ++
    }
  }
  return count
}

4. 문자열 계산하기

function solution(my_string) {
  return eval(my_string)
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
