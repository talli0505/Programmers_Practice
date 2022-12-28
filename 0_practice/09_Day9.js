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

3. 모스 부호(1)

function solution(letter) {
  morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
  }
  return letter.split(" ").map(a => morse[a]).join("")
}

4. 구슬을_나누는_경우의 수

function solution(balls, share) {
  // 서로 다른 n개 중 m개를 뽑는 경우의 수 공식
  return factorial(balls) / (factorial((balls-share)) * factorial(share))
}
// 팩토리얼을 구하는 함수
function factorial(num) {
  let returnFactorial = BigInt(1) // bigint써서 범위 지정
  for(let i = num; i >= 2; i-- ) {
      returnFactorial*=BigInt(i)
  }
  return returnFactorial
}

출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
