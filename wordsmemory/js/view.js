const words = Object.entries(JSON.parse(localStorage.getItem('words')));
window.onload = () => outPutWord();
window.onkeydown = () => search();
const outPutWord = () => {
    if(words.length === 0 || !words){
        let line = document.createElement('hr');
        let wordview = document.createElement('tr');
        let view1 = document.createElement('td');
        let view2 = document.createElement('td');
        view1.textContent = "※単語を登録してください";
        view2.textContent = "";
        wordsview.appendChild(wordview);
        wordsview.appendChild(line);
        wordview.appendChild(view1);
        wordview.appendChild(view2);
    }
    for(let word of words){
        let line = document.createElement('hr');
        let wordview = document.createElement('tr');
        let view1 = document.createElement('td');
        let view2 = document.createElement('td');
        view1.textContent = word[0];
        view2.textContent = word[1];
        wordsview.appendChild(wordview);
        wordsview.appendChild(line);
        wordview.appendChild(view1);
        wordview.appendChild(view2);
    }
}
const search = () => {
    if(words){
        setTimeout(() => {
            const val = searchWords.value.trim();
            wordsview.innerHTML = "";
            if(val){
                const searched = words.filter(x => x.toString().indexOf(val) > -1);
                for(let word of searched){
                    let line = document.createElement('hr');
                    let wordview = document.createElement('tr');
                    let view1 = document.createElement('td');
                    let view2 = document.createElement('td');
                    view1.textContent = word[0];
                    view2.textContent = word[1];
                    wordsview.appendChild(wordview);
                    wordsview.appendChild(line);
                    wordview.appendChild(view1);
                    wordview.appendChild(view2);
                }
                if(searched.length === 0) {
                    let line = document.createElement('hr');
                    let wordview = document.createElement('tr');
                    let view1 = document.createElement('td');
                    let view2 = document.createElement('td');
                    view1.textContent = "※単語が見つかりませんでした";
                    view2.textContent = "";
                    wordsview.appendChild(wordview);
                    wordsview.appendChild(line);
                    wordview.appendChild(view1);
                    wordview.appendChild(view2);
                }
            }else{
                outPutWord();
            }
        }, 100);
    }
}