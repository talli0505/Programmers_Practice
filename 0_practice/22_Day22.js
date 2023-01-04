1. 저주의 숫자3

function solution(n) {
  let count = 0;
  for(let i = 1 ; i <= n ; i ++) {
      count++;
      while(count.toString().includes('3') || count % 3 === 0) {
          count++;
      }
  }
  return count;
}


2. 유한소수 판별하기

function solution(a, b) {
  // 최대공약수
  let g = 1;
  for (let i = 1; i<= b; i++){
      if(a%i ===0 && b%i ===0) g = i;
  }
  
  // 분모를 최대공약수로 나누기
  b = b/g;

  // 2,5 로 기약분수인지 확인 유한이면 1, 무한이면 2
  while (b%2 === 0) b = b/2;
  while (b%5 === 0) b = b/5;
  return b === 1? 1 : 2;
}

출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
