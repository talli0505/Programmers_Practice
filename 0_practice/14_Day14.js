1. 369게임

function solution(order) {
  let answer = 0
  let a = order.toString().split("")
  for(let i = 0 ; i < a.length; i++) {
    if(a[i] === "3" || a[i] === "6" || a[i] === "9") {
      answer++
    }
  }
  return answer
}


2. 암호해독

function solution(cipher, code) {
  let answer = ''
  for(let i = 0; i < cipher.length; i++) {
    if( (i+1) % code === 0) {
      answer +=cipher[i]
    }
  }
  return answer
}


3. 대문자와 소문자

function solution(my_string) {
  let answer = ''
  for(let i = 0 ; i< my_string.length; i++) {
    if(my_string[i] === my_string[i].toLowerCase()) {
      answer += my_string[i].toUpperCase()
    } else {
      answer += my_string[i].toLowerCase()
    }
  }
  return answer
}


4. 가까운 수

function solution(array, n) {
  let answer = [];
  
  array.forEach((a) => {
      answer.push(Math.abs(a - n));
  })
  
  const min = Math.min(...answer);
  
  let check = [];
  
  for(let i = 0; i < answer.length; i++){
      if(answer[i] === min){
          check.push(array[i]);
      }
  }
  
  return Math.min(...check);
}



출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
