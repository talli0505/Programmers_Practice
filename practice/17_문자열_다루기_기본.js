문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.
s는 길이 1 이상, 길이 8 이하인 문자열입니다.
s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.
   s	  return
"a234"	false
"1234"	true


function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;   // 문자열 s의 길이가 4또는 6인지 먼저 확인
  for (let i = 0; i < s.length; i++) {                  // 그 이후 s의 길이 만큼 반복
    if (isNaN(Number(s[i]))) return false;              // s의 값을 숫자로 형변환을 시킨후 그게 다 숫자 인지 확인
  }
  return true;                                          // 숫자면 true 아니면 false
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
