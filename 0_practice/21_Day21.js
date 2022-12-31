1. 숨어있는 숫자의 덧셈 (2)


function solution(my_string) {
  const nums = my_string.match(/[0-9]+/g);
  return nums ? nums.map(num => Number(num)).reduce((a,c) => a+c, 0) : 0;
}


2. 안전지대 ( 다시 풀어봐야 합니다 )

function solution(board) {
  const dx = [-1, 1, 0, 0, -1, -1, 1, 1]
  const dy = [0, 0, -1, 1, -1, 1, -1, 1]

  // 지뢰가 설치된 곳
  const booms = []
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board.length; y++) {
      if (board[x][y] === 1) {
        booms.push([x, y])
      }
    }
  }

  // 지뢰가 설치된 곳 주변에 폭탄 설치
  booms.forEach(([x, y]) => {
    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i]
      const ny = y + dy[i]
      if (0 <= nx && nx < board.length && 0 <= ny && ny < board.length) {
        board[nx][ny] = 1
      }
    }
  })

  // 폭탄이 설치되지 않은 곳만 카운팅
  let count = 0
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board.length; y++) {
      if (board[x][y] === 0) {
        count++
      }
    }
  }

  return count
}


3. 삼각형의 완성조건 (2)

function solution(sides) {
  let count = 0
  const max = Math.max(...sides)
  const min = Math.min(...sides)
  // 만약 기존 요소 중 가장 긴 변이 있다면
  for(let i = max-min+1 ; i <= max ; i ++) {
      count++
  }
  // 나머지 한 변이 가장 긴 변인 경우
  for(let i = max+1 ; i < max+min ; i ++) {
      count++
  }
  return count
}


4. 외계어 사전


function solution(spell, dic) {
  return dic.filter(v=>spell.every(c=>v.includes(c))).length ? 1 : 2;
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
