/*
머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 
양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 
정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 
총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.

양꼬치 = n * 12000
음료수 = k * 2000
return = 총액 

10인분 음료수 하나 공짜
양꼬치 10인분 = 120,000 -> 음료수 1개 공짜
if n >= 10, k = free 
*/

const lambMeet = (n, k) => {
	if (n >= 10) {
		k -= Math.floor(n / 10);
	}
	console.log(k); // → 2

	lambCost = n * 12000;
	drinkCost = k * 2000;

	return lambCost + drinkCost;
};

console.log(lambMeet(15, 3));

/*
<공부할 개념> 
- 빼기 할당 연산자(-=) subtraction assignment
	: 오른쪽 피연산자의 값을 변수에서 뺀 결과를 다시 변수에 담는다
	ex) let a = 2;
			console.log(a -= 3) // → 1 

- Math.floor()


	*parseInt와의 차이는 무엇인가 
		- MDN: parseInt는 정수 값을 반환하기 위해 소수점 이하 값을 잘라낸다. 
					 parseInt를 매우 크거나 매우 작은 숫자의 소수점 이하 값을 자르기 위해
					 사용하면 예기치 못한 결과가 발생할 수 있다. 
					 Math.floor()의 대체품으로 사용하면 안된다!

*/
