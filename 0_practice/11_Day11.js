1. 주사위의 개수

function solution(box, n) {
  let a = 0
  let b = 0
  let c = 0
  while(true) {
    if(box[0] >= n && box[0] >= 0) {
      a++
      box[0] = box[0] - n
    } else if (box[1] >= n && box[1] >= 0) {
      b++
      box[1] = box[1] - n
    } else if (box[2] >= n && box[2] >= 0) {
      c++
      box[2] = box[2] - n
    } else {
      break
    }
  }
  return a*b*c
}


2. 함성수 찾기

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {           
    if (num % i === 0) return false                      
  }
  return num                                          
}

function solution(n) {
  let num1 = []
  for(let i = 1; i <= n ; i++) {
    if(!isPrime(i)) {
      num1.push(i)
    }
  }
  return num1.length
}


3. 최댓값 만들기(1)

function solution(numbers) {
  return numbers.sort((a,b) => b-a)[0] * numbers.sort((a,b) => b-a)[1]
}


4. 팩토리얼

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

function solution(n) {
  for(let i = 1; i <= 11; i++) {
    if ( factorial(i) > n) {
      return i-1
    }
  }
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
