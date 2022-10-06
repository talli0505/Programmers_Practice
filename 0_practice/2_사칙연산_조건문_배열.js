1. 두 수 나눗셈

const solution = (num1, num2) => parseInt(num1 / num2 * 1000)



2. 숫자 비교하기

function solution(num1, num2) {
  if(num1 === num2) {
    return 1
  } else {
    return -1
  }
}



3. 분수의 덧셈

function solution(denum1, num1, denum2, num2) {
  let top = denum1*num2 + denum2*num1
  let low = num1*num2
  while(true) {
    let k = false
    for(let i = 2 ; i < 1000 ;i++) {
      if(top % i === 0 && low % i === 0) {
      top = (top/i)
      low = (low/i)
      k = true
      break
    }
    }
    if(!k) {
      break
    }    
  }
  return [top,low]
}



4. 배열 두배 만들기

function solution(numbers) {
  return numbers.map(x => x*2)
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
