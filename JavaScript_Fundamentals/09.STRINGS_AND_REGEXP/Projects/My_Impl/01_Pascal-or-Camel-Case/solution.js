function solve() {
   const text = document.getElementById('text').value;
   const convention = document.getElementById('naming-convention').value;

  let textWords = text.toLowerCase().split(' ');


  let result = '';
   if(convention === 'Camel Case' || convention === 'Pascal Case'){
      textWords.forEach(word => {
        result += word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase(); 
      })
   }else{
      result = 'Error!';
   }

   if(convention === 'Camel Case'){
     result = result.substr(0,1).toLowerCase() + result.substr(1);
   }

   document.getElementById('result').innerHTML = result;
}