/*
각에서 0도 초과 90도 미만은 예각, 90도는 직각, 
90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 
각 angle이 매개변수로 주어질 때 
예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 
return하도록 solution 함수를 완성해주세요.
*/

const solution = (angle) => {
	//
	const acute = 1;
	const right = 2;
	const obtuse = 3;
	const straight = 4;

	if (0 < angle < 90) {
		return acute;
	} else if (angle === 90) {
		return right;
	} else if (90 < angle < 180) {
		return obtuse;
	} else if (angle === 180) {
		return straight;
	}
};

console.log(solution(180));

/* -> input값에 상관없이 1이 나오고 있다. ㅎㅎㅎ

그.. 프로그래밍에서 1 < i < 100 이런식으로 이중 조건을 걸 수가 없어요; 


*/
