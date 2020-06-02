function attachEvents() {

    const loadTownsBtn = document.getElementById('btnLoadTowns');

    loadTownsBtn.addEventListener('click', loadTowns);

    function loadTowns() {

        const inputTowns = document.getElementById('towns').value;


        const towns = 'plovdiv, varna'.split(', ')
             .map(element => ({ name: element })
             );
        renderTowns(towns);
    };

    function renderTowns(towns){
        const template = document.getElementById('root').innerHTML;
        const compiled = Handlebars.compile(template);
        const rendered = compiled({
            towns
        });

        document.getElementById('root').innerHTML = rendered;
    }


}

attachEvents();