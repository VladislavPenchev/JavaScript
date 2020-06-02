function solve() {

   let firstPlayerCards = document.getElementById('player1Div').getElementsByTagName('img');
   let secondPlauerCards = document.getElementById('player2Div').getElementsByTagName('img');

   let result = document.getElementById('result').getElementsByTagName('span');
   let cardOfFirstPlayer;
   let cardOfSecondPlayer;

   let history = document.getElementById('history')

   for (const card of firstPlayerCards) {
      card.addEventListener('click', function(){
         cardOfFirstPlayer = card;
         card.removeAttribute('src');
         card.setAttribute('src', 'images/whiteCard.jpg');
         result[0].textContent = card.name;
      })
   }

   for (const card of secondPlauerCards) {
      card.addEventListener('click', function(){
         cardOfSecondPlayer = card;
         card.removeAttribute('src');
         card.setAttribute('src', 'images/whiteCard.jpg');
         result[2].textContent = card.name;

         let span = document.createElement('span');

         if(Number(cardOfFirstPlayer.name) > Number(card.name)){
            cardOfFirstPlayer.style.border = '2px solid green';
            card.style.border = '2px solid red';

            span.textContent = `[${cardOfFirstPlayer.name} vs ${card.name} ]`;

         }else{
            card.style.border = '2px solid green';
            cardOfFirstPlayer.style.border = '2px solid red';
            span.textContent = `[${card.name} vs ${cardOfFirstPlayer.name}]`;
         }



         history.appendChild(span);
         

      })
   }

   result[0].textContent = '';
   result[2].textContent = '';
   
   
}