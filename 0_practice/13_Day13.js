1. 배열 원소의 길이

function solution(strlist) {
  return strlist.map(x => x.length)
}


2. 중복된 문자 제거

function solution(s) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer += s[i];
  }

  return answer;
}


3. 삼각형의 완성조건 (1)

function solution(sides) {
  let a = sides.sort()
  if(a[0]+a[1] <= a[2]) {
    return 2
  } else {
    return 1
  }
}

출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
