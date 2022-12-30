1. 최대값 만들기 (2)


function solution(numbers) {
  numbers.sort((a,b) => b-a)
  if(numbers[0]*numbers[1] > numbers[numbers.length-1]*numbers[numbers.length-2]) {
    return numbers[0]*numbers[1]
  } else {
    return numbers[numbers.length-1]*numbers[numbers.length-2]
  }
}


2. 직사각형 넓이 구하기

function solution(dots) {
  const width = Math.max(...dots.map(a => a[0]))-Math.min(...dots.map(a => a[0]))
  const height = Math.max(...dots.map(a => a[1]))-Math.min(...dots.map(a => a[1]))
  return width*height
}


3. 캐릭터의 좌표


function solution(keyinput, board) {
    
    let x = 0;
    let y = 0;

    
    const range = [
        Math.abs(Math.floor(board[0] / 2)),
        Math.abs(Math.floor(board[1] / 2)),
    ];

    
    for (let k of keyinput) {
        switch (k) {
            case "left":
                x--;
                break;
            case "right":
                x++;
                break;
            case "down":
                y--;
                break;
            case "up":
                y++;
                break;
        }

        
        if (Math.abs(x) > range[0]) {
            x = x > 0 ? range[0] : range[0] * -1;
        }
        if (Math.abs(y) > range[1]) {
            y = y > 0 ? range[1] : range[1] * -1;
        }
    }
    return [x, y];
}

출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
