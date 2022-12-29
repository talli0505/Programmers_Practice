1. 인덱스 바꾸기

function solution(my_string, num1, num2) {
  let a = my_string.split("")
  let temp;
  temp = a[num1]
  a[num1] = a[num2]
  a[num2] = temp
  return a.join("")
}


2. 한번만 등장한 문자

function solution(s) {
  let arr = s.toString().split("")
  let t = arr.filter((item, index) => arr.indexOf(item) !== index);
  console.log(t)
  let k = arr.filter(x => !t.includes(x));
  console.log(k);
  return k.sort().join("")
}


3. 약수 구하기

function solution(n) {
  let answer =[]
  for(let i = 1 ; i <= n ; i++) {
    if(n % i === 0) {
      answer.push(i)
    }
  }
  return answer
}


4. 영어가 싫어요


function solution(numbers) {
  const nums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

  nums.forEach((item, index) => {
      numbers = numbers.split(item).join(String(index));
  })
  
  return Number(numbers);
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
