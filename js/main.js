window.onload = () => {
	answer.decideCorrectAnswer();
}
const words = Object.entries(JSON.parse(localStorage.getItem('words')));
const random =  (x, y) => parseInt(Math.random() * (y - x + 1) + x);
const randomArr = (x, y ,z) => {
	let arr = [];
	for(let i = x; i <= y; ++i) arr.push(i);
	let arlen = arr.length;
	while(arlen){
		const j = parseInt(Math.random() * arlen);
		const t = arr[--arlen];
		arr[arlen] = arr[j];
		arr[j] = t;
	}
	return arr.slice(0, z);
}
const answer = {
	decideCorrectAnswer: () => {
		const choosedWords = randomArr(0, words.length - 1, 3);
		const correctAnswer = random(0,2);
		answer.outPut(choosedWords, correctAnswer);
	},
	outPut: (x, y) => {
		question.textContent = words[x[y]][0];
		select0.textContent = words[x[0]][1];
		select1.textContent = words[x[1]][1];
		select2.textContent = words[x[2]][1];
		answer.x = x;
		answer.y = y;
	},
	checkAnswer: x => {
		if(answer.y === x) {
			question.textContent = "Correct!";
			setTimeout('answer.decideCorrectAnswer()', 1000);
		}else{
			question.textContent = "incorrect...";
			setTimeout(() => question.textContent = words[answer.x[answer.y]][0], 1000);
		}
	}
};