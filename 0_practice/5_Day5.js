1. 옷가게 할인 받기


function solution(price) {
  if (price >= 500000)
      return parseInt(price*(1-0.2));

  if (price >= 300000)
      return parseInt(price*(1-0.1));

  if (price >= 100000)
      return parseInt(price*(1-0.05));  

  return price
}


2. 아이스 아메리카노


function solution(money) {
  let answer =[]
  answer.push(Math.floor(money/5500))
  answer.push(money%5500)
  return answer
}



3. 나이 출력


function solution(age) {
  return 2022 - age + 1
}



4. 배열 뒤집기


function solution(num_list) {
  return num_list.reverse()
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
