const words = Object.entries(JSON.parse(localStorage.getItem('words')) ?? []);
const add = () => {
	try{
		if (!wordkey.value || !wordmean.value) throw new Error("Null words content");
		words.push([wordkey.value, wordmean.value]);
		localStorage.setItem('words', JSON.stringify(Object.fromEntries(words)));
		alert(`追加しました：\n単語: ${wordkey.value}\n意味: ${wordmean.value}`);
	}catch{
		alert("テキストボックスが空です\n単語を入力してください");
	}
	wordkey.value = wordmean.value = "";
}
