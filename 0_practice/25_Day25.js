1. 문자열 밀기

function solution(A, B) {
  if(A === B) return 0;

  let total = 0;
  const arr = A.split("");
  
  for (let i = arr.length-1; i >= 0; i-- ){
      let tmp = arr.splice(arr.length-1, 1)[0]
      arr.unshift(tmp);
      total++
      if(arr.join("") === B) return total;
  }
  return -1;
}


2. 종이 자르기

function solution(M,N) {
  return M*N -1
}



3. 연속된 수의 합


function solution(num, total) {
  var min = Math.ceil(total/num - Math.floor(num/2));
  var max = Math.floor(total/num + Math.floor(num/2));

  return new Array(max-min+1).fill(0).map((el,i)=>{return i+min;});
}


4. 다음에 올 숫자

function solution(common) {
  const consfirm = common[1]-common[0] === common[2]-common[1]
  if(consfirm) {
      return common[common.length-1]+common[1]-common[0]
  } else {
      return common[common.length-1]*(common[1]/common[0])
  }
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
