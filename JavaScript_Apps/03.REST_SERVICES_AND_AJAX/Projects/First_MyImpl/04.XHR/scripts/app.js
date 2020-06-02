function loadRepos() {

   const divIdResult = document.getElementById('res');

   const req = new XMLHttpRequest();
   req.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
            divIdResult.textContent = this.response;
      }
   }

   req.open('GET', "https://api.github.com/users/testnakov/repos", true);
   req.send();
}