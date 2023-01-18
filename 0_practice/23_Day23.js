1. 특이한 정렬

function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const [A, B] = [Math.abs(a - n), Math.abs(b - n)];
    if (A === B) return b - a;
    return A - B;
  });
}


2. 등수 매기기

function solution(score) {
  const avg = score.map(([a,b]) => (a+b)/2)
  const sortedAvg = avg.slice().sort((a,b) => b-a)
  return avg.map(a => sortedAvg.indexOf(a) + 1)
}


3. 로그인 성공?
  
  
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  if(!db.find(([ids]) => ids === id)) return 'fail';
  return db.find(([ids, pws]) => ids === id && pws === pw) ? 'login' : 'wrong pw';
}
