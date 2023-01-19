1. 치킨 쿠폰

function solution(chicken) {
  let service = 0
  while(chicken >= 10) {
      service+=Math.floor(chicken/10) 
      chicken = chicken%10 + Math.floor(chicken/10)
  }
  return service
}


2. 이진수 더하기

function solution(bin1, bin2) {
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}


3. A로 B 만들기

function solution(before, after) {
  let a = before.split("").sort()
  let b = after.split("").sort()
  let count = 0
  for(let i = 0 ; i < a.length; i++) {
    if(a[i] === b[i]) {
      count++
    }
  }
  if(count === a.length) {
    return 1
  } else {
    return 0
  }
}


4. K의 개수

function solution(i,j,k) {
  let arr = []
  let answer = 0
  for(let m = i; m <= j; m++) {
    arr.push(m)
  }
  let s = arr.join("")
  for(let i = 0; i < s.length; i++) {
    if(Number(s[i]) === k) {
      answer++
    }
  }
  return answer
}

출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
