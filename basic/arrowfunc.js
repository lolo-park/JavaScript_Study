/* 
2023-02-16

project 초기세팅하면서 app.js에서 서버 health check 하면서
express 프레임워크를 사용하여 http 통신을 하기 위해
endpoint /ping 에 pong이 response 되도록 하는 함수를 아래와 같이 작성하였다 
*/

app.get("/ping", function (req, res, next) {
	res.json({ message: " pong ! " });
});

/* express의 get 메서드를 활용하는 것이었는데, 첫번째 인자로 endpoint를 받은 뒤 
두번째 인자로 콜백함수를 실행시키는 함수이다. 이렇게 콜백함수를 함수문 그 자체로 적어도 되지만
더 깔끔한 가독성을 위해서 아래와 같이 수정할 수 있다 */

app.get("/ping", (req, res, next) => {
	res.json({ message: " pong ! " });
});

/* 
1 ---- 여기서 세번째 인자로 들어온 next 는 다음 함수로 넘겨주는 middleware 인데
(아직 이것이 명확하게 이해가 안된듯) healthcheck 이후 넘겨 받는 함수가 없기때문에 
여기서 next를 호출하는 것은 불필요하다

2 ---- 또한 해당 api 는 pong 만 response로 전달하고 끝나는 로직이기 때문에 함수가
끝나는 것을 명확하게 표현해주면 더 좋음 
*/

app.get("/ping", (req, res) => {
	return res.json({ message: " pong ! " });
});

// Ta-da ! 깔끔 & 명확
