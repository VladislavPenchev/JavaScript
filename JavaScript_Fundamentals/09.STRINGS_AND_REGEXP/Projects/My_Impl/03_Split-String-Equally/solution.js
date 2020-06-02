function solve() {
    const textArea = document.getElementById('text').value;
    const numberDelimiter = Number(document.getElementById('number').value);
    let result = document.getElementById('result');

    let remainder = textArea.length % numberDelimiter;
    if(remainder !== 0){
       
        let populateWord = textArea + textArea.substr(0,remainder);

        result.innerHTML += populateWord;
    }



}