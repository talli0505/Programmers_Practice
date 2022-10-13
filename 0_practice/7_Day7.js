1. 특정 문자 제거하기


function solution(my_string, letter) {
  let answer =''
  for(let i = 0; i< my_string.length; i++) {
    if(my_string[i].includes(letter)) {
      answer += ''
    } else {
      answer += my_string[i]
    }
  }
  return answer
}


2. 각도기


function solution(angle) {
  if ( angle < 90) {
    return 1
  } else if (angle === 90) {
    return 2
  } else if (angle >90 && angle<180) {
    return 3
  } else {
    return 4
  }
}


3. 양꼬치


function solution(n, k) {
  // 양꼬치 : 12000
  // 음료수 : 2000
    return n*12000 + (k - (Math.floor(n/10)))*2000
}


4. 짝수의 합


function solution(n) {
  let answer = 0;
  for(let i = 1; i <= n ; i++) {
    if(i % 2 === 0) {
      answer += i
    }
  }
  return answer
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
