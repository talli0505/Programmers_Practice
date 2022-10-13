1. 문자열 뒤집기


function solution(my_string) {
  return my_string.split("").reverse().join("")
}


2. 직각 삼각형 출력하기


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const num = Number(input[0]);
    let logStr = ''
    for(let i = 0 ; i < num; i++) {
        for(let j = 0 ; j <= i; j++) {
            logStr+='*'
        }
        logStr+='\n'
    }
    console.log(logStr)
});


3. 짝수 홀수 개수


function solution(num_list) {
  let even = 0
  let odd = 0
  for(let i = 0; i < num_list.length; i++) {
    if(num_list[i] % 2 === 0) {
      even++
    } else {
      odd++
    }
  }
  return [even,odd]
}


4. 문자 반복 출력하기


function solution(my_string, n) {
  return my_string.split("").map(x => x.repeat(n)).join("")
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
