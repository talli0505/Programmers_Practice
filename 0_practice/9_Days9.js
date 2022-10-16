1. 개미군단


function solution(hp) {
  let a = 5
  let b = 3
  let c = 1
  let low = hp
  let count = 0
  while(true) {
    if(low >= a) {
      low -= a
      count ++
    } else if ( low < a && low >= b) {
      low -= b
      count ++
    } else if ( low < b && low >= c) {
      low -= c
      count++
    } else {
      break
    }
  }
  return count
}


2. 가위 바위 보


function solution(rsp) {
  let answer = ''
  for(let i = 0; i < rsp.length; i++) {
    if(rsp[i] === "2") {
      answer += "0"
    } else if (rsp[i] === "0") {
      answer += "5"
    } else if (rsp[i] === "5") {
      answer += "2"
    }
  }
  return answer
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
