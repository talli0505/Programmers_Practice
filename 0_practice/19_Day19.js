1. 7의 개수

function solution(array) {
  let answer = 0
  let a = array.toString().split("")
  for(let i = 0; i< a.length; i++) {
    if(a[i].includes('7')) {
      answer++
    }
  }
  return answer
}


2. 잘라서 배열 저장하기

function solution(my_str, n) {
  let answer = []
  for(let i = 0; i< my_str.length; i+=n) {
    answer.push(my_str.slice(i, i+n))
  }
  return answer
}


3. 중복된 숫자 개수

function solution(array, n) {
  let answer = 0
  for(let i = 0; i < array.length; i++) {
    if(array[i] === n) {
      answer ++
    }
  }
  return answer
}


4. 머쓱이보다 키 큰 사람

function solution(array, height) {
  let answer = 0
  for(let i =0; i < array.length; i++) {
    if(array[i] > height) {
      answer++
    }
  }
  return answer
}

출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
