const words = Object.entries(JSON.parse(localStorage.getItem('words')));
const add = () => {
	words.push([wordkey.value, wordmean.value]);
	localStorage.setItem('words', JSON.stringify(Object.fromEntries(words)));
	alert(`追加しました：\n単語: ${wordkey.value}\n意味: ${wordmean.value}`);
	wordkey.value = wordmean.value = "";
}