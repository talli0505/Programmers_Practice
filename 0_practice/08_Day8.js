1. 배열 자르기


function solution(numbers, num1, num2) {
  let answer = []
  for(let i = num1 ; i <= num2 ; i++) {
    answer.push(numbers[i])
  }
  return answer
}


2. 외계행성의 나이


function solution(age) {
  let answer = '';
  let b = age.toString().split("")
  for(let i = 0; i < b.length ; i++) {
    answer += String.fromCharCode(Number(b[i]) + 97)
  } 
  return answer
}


3. 순서쌍의 개수


function solution(n) {
  let answer = 0
  for(let i = 1; i <= n; i++) {
    if(n % i === 0) {
      answer++
    }
  }
  return answer
}

4. 진료순서 정하기


function solution(emergency) {
  let sortedArr = emergency.slice().sort((a,b)=>b-a); // 얕은 복사
  return emergency.map(v=>sortedArr.indexOf(v)+1);
}

출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
