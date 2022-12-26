1. 점위 위치 구하기

function solution(dot) {
  if( dot[0] > 0 && dot[1] > 0) {
    return 1
  } else if( dot[0] < 0 && dot[1] > 0) {
    return 2
  } else if( dot[0] < 0 && dot[1] < 0) {
    return 3
  } else {
    return 4
  }
}


2. 2차원으로 만들기

function solution(num_list, n) {
  let answer = []
  for(let i = 0; i< num_list.length; i+=n) {
    answer.push(num_list.slice(i, i+n))
  }
  return answer
}


3. 공 던지기


function solution(numbers, k) {
  let ansIndex = 0;
  
  for(let i = 0; i < k; i++){
      ansIndex += 2;    
      
      if(ansIndex > numbers.length){
          ansIndex -= numbers.length;
      }
  }
  
  return numbers[ansIndex - 2];
}


4. 배열 회전시키기

function solution(numbers, reverse) {
  if (reverse === "right") numbers.unshift(numbers.pop());
  else numbers.push(numbers.shift());
  return numbers;
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
