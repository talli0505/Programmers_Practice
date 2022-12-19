1. 문자열안에 문자열

function solution(str1, str2) {
  if(str1.includes(str2)) {
    return 1
  } else {
    return 2
  }
}


2. 제곱수 판별하기

function solution(n) {
  if(Math.sqrt(n) % 1 === 0) {
    return 1
  } else {
    return 2
  }
}


3. 세균 증식

function solution(n, t) {
  return n*(2**(t))
}


4. 문자열 정렬하기 (2)

function solution(my_string) {
  return  my_string.toLowerCase().split("").sort().join("")
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
