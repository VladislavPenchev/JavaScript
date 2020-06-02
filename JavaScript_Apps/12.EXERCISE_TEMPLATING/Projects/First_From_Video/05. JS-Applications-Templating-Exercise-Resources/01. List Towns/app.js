function attachEvents() {
    const loadTownsBtn = document.getElementById('btnLoadTowns');

    loadTownsBtn.addEventListener('click', loadTowns);

    function loadTowns(){
        let towns = document.getElementById('towns').value
            .split(', ')
            .map(element => 
                ({name:element})
            );

        renderTowns(towns);

    };

    function renderTowns(towns){
        const template = document.getElementById('towns-template').innerHTML;
        const compiled = Handlebars.compile(template);
        const rendered = compiled({
            towns
        });

        document.getElementById('root').innerHTML = rendered;
    }
}

attachEvents();