/* 
나이 age가 주어질 때, 2022을 기준 출생연도를
return 하는 함수 solution 
*/

const solution = (age) => {
	const today = new Date(); // => 2023-03-16T02:13:34.945Z
	const thisYear = today.getUTCFullYear(); //=> 2023

	const birthYear = thisYear - age;

	return birthYear;
};

console.log(solution(33));

/*
const solution = (age) => {
	const thisYear = 2022;

	const yourAge = thisYear - age + 1;
	//하지만 이렇게 '+1'을 하는 것은 magic number라 하였다
	//나 밖에 모르는 기적의 number. 그래서 지양해야함
	return yourAge;
};

console.log(solution(30));


var dob = new Date(); //여거를 함수로 뿅 넣으면 되제
console.log("dob ====", dob); // => 2023-03-16T02:13:34.945Z
var year = dob.getUTCFullYear();
console.log(year); // => 2023

var month_diff = Date.now() - dob.getTime();
//console.log("month_diff ====", month_diff);
var age_dt = new Date(month_diff);
//console.log("age_dt =====", age_dt);
var year = age_dt.getUTCFullYear();
//console.log("year ===== ", year);
var age = Math.abs(year - 1970);
//console.log("age =====", age);
*/
