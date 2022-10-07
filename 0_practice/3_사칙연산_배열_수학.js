1. 나머지 구하기

function solution(num1, num2) {
  return num1 % num2
}


2. 중앙값 구하기

function solution(arr) {
  let newArr = arr.sort((a,b) => a-b)
  return arr[Math.floor(newArr.length/2)]
}

console.log(solution([1, 2, 7, 10, 11]))


function solution(array) {
  return array.sort((a,b)=>{return a-b;}).at(Math.floor(array.length/2))    
}


3. 최빈값 구하기

const solution = (array) => {
  const counter = array.reduce((acc, cur) => ({
      ...acc,
      [cur]: (acc[cur] || 0) + 1
  }), {})

  const items = Object.keys(counter).map((key) => [
      Number(key), counter[key]
  ]).sort((a, b) => b[1] - a[1])

  if (items[0][1] === items?.[1]?.[1]) {
      return -1
  }

  return items[0][0];
}



4. 짝수는 싫어요

function solution(n) {
    let answer =[]
    for(let i = 1; i<=n; i++) {
        if(i % 2 !== 0) {
            answer.push(i)
        }
    }
    return answer
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
