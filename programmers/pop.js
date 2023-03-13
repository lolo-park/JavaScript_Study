/*
등차수열 혹은 등

*/

function solution(common) {
	if (common[2] - common[1] === common[1] - common[0]) {
		return common.pop() + common[1] - common[0];
	} else {
		return common.pop() * (common[1] / common[0]);
	}
}

console.log(solution([1, 2, 3, 4])); // 5
console.log(solution([3, 6, 9])); // 12

/*
common = [1,2,3,4]
common[2]-common[1] = 1 (3 - 2)
coommon[1]-common[0] = 1 (2 - 1)

commom.pop() = Removes the last element from an array and returns it. 
return common.pop() + common[1]-common[0] (두수의 차) => 4 + 1 = 5  wow 
두 수의 차 만큼 증가하는 배열이니까요

*/
/*
등차수열 혹은 등

*/

/*function solution(common) {
	if (common[2] - common[1] === common[1] - common[0]) {
		return common.pop() + common[1] - common[0];
	} else {
		return common.pop() * (common[1] / common[0]);
	}
}
arrow function 을 애용하기로 하자 !
*/

const solution = (common) => {
	if (common[1] - common[0] === common[2] - common[1]) {
		return common.pop() + (common[1] - common[0]);
	} else {
		return common.pop() * (common[1] / common[0]);
	}
};

console.log(solution([1, 2, 3, 4])); // 5
console.log(solution([3, 6, 9])); // 12

/*
common = [1,2,3,4]
common[2]-common[1] = 1 (3 - 2)
coommon[1]-common[0] = 1 (2 - 1)

commom.pop() = Removes the last element from an array and returns it. 
return common.pop() + common[1]-common[0] (두수의 차) => 4 + 1 = 5  wow 
두 수의 차 만큼 증가하는 배열이니까요

*/
