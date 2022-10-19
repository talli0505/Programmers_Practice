1. 모음 제거

function solution(my_string) {
  let answer = ''
  let arr = ["a", "e", "i", "o", "u"]
  let str = my_string.split("")
  for(let i = 0; i< str.length; i++) {
    if(!str[i].includes(arr[0]) && !str[i].includes(arr[1]) && !str[i].includes(arr[2]) && !str[i].includes(arr[3]) && !str[i].includes(arr[4])) {
      answer += str[i]
    }
  }
  return answer
}


2. 문자열 정렬하기(1)

function solution(my_string) {
  let answer = []
  let a = my_string.split("")
  console.log(a)
  for(let i = 0; i < a.length; i++) {
    if(isNaN(Number(a[i])) === false) {
      answer.push(Number(a[i]))
    }
  }
  return answer.sort()
}


3. 숨어있는 숫자의 덧셈 (1)

function solution(my_string) {
  const num = my_string.split("");
  let answer = 0
  for(let i = 0; i < num.length; i++){
    if(Number(num[i])) answer += Number(num[i])
  }
  return answer
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
