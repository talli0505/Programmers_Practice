1. 숫자 찾기

function solution(num, k) {
  let a = num.toString().split("")
  let b = []
  for(let i = 0 ; i < a.length; i++) {
    b.push(Number(a[i]))
  }
  for(let j = 0 ; j <= b.length; j++) {
    if(b[j] === k) {
      return j + 1
    }
  }
  return -1
}


2. n의 배수 고르기

function solution(n, numlist) {
  let answer = []
  for(let i = 0; i< numlist.length; i++) {
    if(numlist[i] % n === 0) {
      answer.push(numlist[i])
    }
  }
  return answer
}


3. 자릿수 더하기

function solution(n) {
  return n.toString().split("").reduce((a,b) => a += Number(b), 0)
}