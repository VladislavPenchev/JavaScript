function solve() {
   let searchBtnInput = document.getElementById('searchField');
   let searchButton = document.getElementById('searchBtn');

   let allTr = document.getElementsByTagName('tr');

   searchButton.addEventListener('click', function(){

      searchBtnValue = searchBtnInput.value;

      for (const tr of allTr) {

         tr.className = '';

         let tdInfo = tr.getElementsByTagName('td');

         if(tdInfo.length !== 3){
            continue;
         }else{
            for (const td of tdInfo) {
                  if(td.textContent.includes(searchBtnValue)){
                     tr.className = 'select';
                  }
            }
         }
      }

      searchBtnInput.value = '';
   });

}