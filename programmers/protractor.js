/*
각에서 0도 초과 90도 미만은 예각, 90도는 직각, 
90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 
각 angle이 매개변수로 주어질 때 
예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 
return하도록 solution 함수를 완성해주세요.
*/

const solution = (angle) => {
	const i = angle;

	const acute = 1;
	const right = 2;
	const obtuse = 3;
	const straight = 4;

	if (0 < i && i < 90) {
		return acute;
	} else if (i === 90) {
		return right;
	} else if (90 < i && i < 180) {
		return obtuse;
	} else if (i === 180) {
		return straight;
	}
};

console.log(solution(70));

/* -> input값에 상관없이 1이 나오고 있다. ㅎㅎㅎ

그.. 프로그래밍에서 1 < i < 100 이런식으로 이중 조건을 걸 수가 없어요; 
논리적연산자 && AND 둘다 true 일때 true
논리적연산자 || OR 인수 중 하나라도 true이면 true를 반환하고, 그렇지 않으면 false를 반환하죠.
논리적연산자 ! NOT
*/
