function solve() {
    const wordToReplaceIndex = 2;
    const word = document.getElementById('word').value;
    const text = document.getElementById('text').value;
    let parts = JSON.parse(text);
    const wordToReplace = parts[0].split(' ')[2];
    const pattern = new RegExp(wordToReplace, 'gi');
    console.log(wordToReplace);
    parts = parts.map(part => part.replace(pattern, word));
    console.log(parts);
}