function solve() {
  const textInput = document.getElementById('text').value;
  const result = document.getElementById('result');

  let numberToWords = '';

  textInput.split(' ').forEach(el => {
    if(Number(el)){
      numberToWords += (String.fromCharCode(el));
    }else{
      let charToWords = [];
      
      [...el].forEach(ch => {
        let numberToChar = ch.charCodeAt(0);
        charToWords.push(numberToChar);
      });
      
      let p = document.createElement('p');
      p.innerHTML = charToWords.join(' ');
      result.append(p);
    }
  });

  let p = document.createElement('p');
  p.innerHTML = numberToWords;
  result.appendChild(p);
  

}