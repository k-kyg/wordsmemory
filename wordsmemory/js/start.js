downloadfile.download = 'words.csv';
downloadfile.onclick = () => {
    let text = convertCSV(txt);
    downloadfile.href = `data:,${encodeURIComponent(text)}`;
};
let txt = [];
window.onload = () => { if(localStorage.getItem('words')) txt.push(...(Object.entries(JSON.parse(localStorage.getItem('words'))))) };
const read = () => {
    try{
        const reader = new FileReader();
        reader.onload = evt => {
            txt = evt.target.result;
            console.log(txt);
            txt = txt.split("\n").map(x => x.split(","));
            console.log(txt);
            if(localStorage.getItem('words')) txt.push(...(Object.entries(JSON.parse(localStorage.getItem('words')))));
            localStorage.setItem('words', JSON.stringify(Object.fromEntries(txt)));
            rflabel.textContent = readfile.value;
        };
        reader.readAsText(readfile.files[0], 'utf-8');
    }catch{
        alert('ファイルを選択してください');
    }
};
const convertCSV = x => x.map(y => y.join(",")).join("\n");