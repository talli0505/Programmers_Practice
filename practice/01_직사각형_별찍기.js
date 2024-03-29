이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.
n과 m은 각각 1000이하인 자연수 입니다.


process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);  // 여기까지는 주어진 코드 ( 입력 두개 받겠다 라는 뜻)
    for(let  i = 0 ; i < b ; i++) { // 세로 길이
        for (let j = 0 ; j < a; j++) { // 가로 길이
            process.stdout.write("*") // 별 찍기
        }
        process.stdout.write("\n") // 5번찍으면 다음 줄로 이동
    }
});


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
