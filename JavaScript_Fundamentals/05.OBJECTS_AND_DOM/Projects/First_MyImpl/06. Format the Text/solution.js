function solve() {
  let output = document.getElementById('output');
  let text = document.getElementById('input').textContent;


  let arrWithSentences = text.split('.');

  for(let i = 0; i < arrWithSentences.length; i+=3){
    let p = document.createElement('p');

    let currentText = `${arrWithSentences[i]}${arrWithSentences[i + 1]}${arrWithSentences[i + 2]}`;

    p.textContent = currentText;

    output.appendChild(p);
  }
  
}