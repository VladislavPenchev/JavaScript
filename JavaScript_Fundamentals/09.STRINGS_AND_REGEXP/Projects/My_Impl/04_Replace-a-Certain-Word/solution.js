function solve() {
    const wordtoReplace = 'pROgRaMminG';
    const wordWithReplcae = document.getElementById('word').value;
    const textArea = document.getElementById('text').value;
    const result = document.getElementById('result');

    
    let parts = JSON.parse(textArea);
    const pattern = new RegExp(wordtoReplace, 'gi');

    parts = parts.map(el => {
        let newEl = el.replace(pattern, wordWithReplcae);
        let p = document.createElement('p');
        p.innerHTML = newEl;
        result.append(p);
    
    });

    
    
}   