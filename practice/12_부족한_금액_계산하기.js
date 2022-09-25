새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다.
이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다.
즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
단, 금액이 부족하지 않으면 0을 return 하세요.
놀이기구의 이용료 price : 1 ≤ price ≤ 2,500, price는 자연수
처음 가지고 있던 금액 money : 1 ≤ money ≤ 1,000,000,000, money는 자연수
놀이기구의 이용 횟수 count : 1 ≤ count ≤ 2,500, count는 자연수
price	  money	count	result
 3	      20	  4	    10
이용금액이 3인 놀이기구를 4번 타고 싶은 고객이 현재 가진 금액이 20이라면, 총 필요한 놀이기구의 이용 금액은 30 (= 3+6+9+12) 이 되어 10만큼 부족하므로 10을 return 합니다.


function solution(price, money, count) {
  var answer = 0;                             // 답을 넣기 위한 변수
  let totalPrice = 0;                         // 총 금액을 확인하기 위한 변수
  for(let i=1;i<=count;i++){                  // 몇번 카운트 할지에 대한 반복문을 돌리면서
      totalPrice += price * i;                // 가격과 그 수를 곱한걸 총 값에 대입
  }
  
  if(money > totalPrice) {                    // 만약 가지고 있는 돈이 총 값보다 많으면 
    answer = 0                                // 그냥 0 대입
  } else {  
    answer = totalPrice - money               // 만약 가지고 있는 돈이 적다면 그만큼 뺀 값을 대입
  }
  return answer                               // 그걸 불러오기
}


출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
