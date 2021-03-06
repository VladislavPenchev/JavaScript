(() => {
     renderCatTemplate();

     function renderCatTemplate() {

        const template = document.getElementById('cat-template').innerHTML;

        const compiled = Handlebars.compile(template);

        const rendered = compiled({
            cats:window.cats
        });

        
        document.getElementById('allCats').innerHTML = rendered;
        
        //let showBtn = document.getElementsByClassName('showBtn')[0];

        let section = document.getElementById('allCats');
        section.addEventListener('click', showMoreInfo);

        function showMoreInfo(ev){
            if(ev.target.className === 'showBtn'){

                if(ev.target.textContent === 'Hide status code'){
                    ev.target.textContent = 'Show status code';
                    ev.target.nextElementSibling.style.display = 'none';
                }else {
                    ev.target.textContent = 'Hide status code';
                    ev.target.nextElementSibling.style.display = 'block';
                }
            }
        }


        // showBtn.addEventListener('click', function () {
        //     let clickedBtn = this;

        //     if(clickedBtn.textContent === 'Show status code'){
        //         clickedBtn.textContent = 'Hide status code';
        //         document.getElementById('100').style.display = 'block';
        //     } else {
        //         clickedBtn.textContent = 'Show status code';
        //         document.getElementById('100').style.display = 'none';
        //     }

        //     clickedBtn.nextElementSibling()
        // });
     }
 
})()
