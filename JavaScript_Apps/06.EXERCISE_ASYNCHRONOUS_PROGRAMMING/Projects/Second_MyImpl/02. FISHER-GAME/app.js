function attachEvents() {
    
    const baseUrl = 'https://fisher-game.firebaseio.com/catches';

    const elements = {
        loadButton: document.querySelector('aside button.load'),
        addButton: document.querySelector('aside button.add'),
        catchesDiv: document.getElementById('catches'),
        //updateButton: document.querySelector('div button.update'),
        //deleteButton: document.querySelector('div button.delete'),
        // angler: document.querySelector('div#catch input.angler'),
        // weight: document.querySelector('div#catch input.weight'),
        // species: document.querySelector('div.catch input.species'),
        // location: document.querySelector('div.catch input.location'),
        // bait: document.querySelector('div.catch input.bait'),
        // captureTime: document.querySelector('div.catch input.captureTime'),
    }


    elements.loadButton.addEventListener('click', loadCatches);

    let fragment = document.createDocumentFragment();

    function createHr(parentElement){
        let hr = document.createElement('hr');
        parentElement.appendChild(hr);
    }

    function createCatch(id, arr) {
        let idDiv = document.createElement('div');
        idDiv.classList.add('catch');
        idDiv.setAttribute('data-id', `${id}`);

        let anglerLabel = document.createElement('label');
        anglerLabel.textContent = 'Angler';
        idDiv.appendChild(anglerLabel);

        let anglerInput = document.createElement('input');
        anglerInput.setAttribute('type', 'text');
        anglerInput.classList.add('angler');
        anglerInput.setAttribute('value', `${arr.angler}`);
        idDiv.appendChild(anglerInput);

        createHr(idDiv);

        //--
        let weightLabel = document.createElement('label');
        weightLabel.textContent = 'Weight';
        idDiv.appendChild(weightLabel);

        let weightInput = document.createElement('input');
        weightInput.setAttribute('type', 'number');
        weightInput.classList.add('weight');
        weightInput.setAttribute('value', `${arr.weight}`);
        idDiv.appendChild(weightInput);

        createHr(idDiv);

        //--

        let speciesLabel = document.createElement('label');
        speciesLabel.textContent = 'Species';
        idDiv.appendChild(speciesLabel);

        let speciesInput = document.createElement('input');
        speciesInput.setAttribute('type', 'text');
        speciesInput.classList.add('species');
        speciesInput.setAttribute('value', `${arr.species}`);
        idDiv.appendChild(speciesInput);

        createHr(idDiv);

        //--

        let locationLabel = document.createElement('label');
        locationLabel.textContent = 'Location';
        idDiv.appendChild(locationLabel);

        let locationInput = document.createElement('input');
        locationInput.setAttribute('type', 'text');
        locationInput.classList.add('location');
        locationInput.setAttribute('value', `${arr.location}`);
        idDiv.appendChild(locationInput);

        createHr(idDiv);

        //--

        let baitLabel = document.createElement('label');
        baitLabel.textContent = 'Bait';
        idDiv.appendChild(baitLabel);

        let baitInput = document.createElement('input');
        baitInput.setAttribute('type', 'text');
        baitInput.classList.add('bait');
        baitInput.setAttribute('value', `${arr.bait}`);
        idDiv.appendChild(baitInput);

        createHr(idDiv);
        
        //--

        let captureTimeLabel = document.createElement('label');
        captureTimeLabel.textContent = 'Capture Time';
        idDiv.appendChild(captureTimeLabel);

        let captureTimeInput = document.createElement('input');
        captureTimeInput.setAttribute('type', 'number');
        captureTimeInput.classList.add('captureTime');
        captureTimeInput.setAttribute('value', `${arr.angler}`);
        idDiv.appendChild(captureTimeInput);

        createHr(idDiv);

        let updateButton = document.createElement('button');
        updateButton.classList.add('update');
        updateButton.textContent = 'Update';
        idDiv.appendChild(updateButton);

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', deleteCatch);
        idDiv.appendChild(deleteButton);

        fragment.appendChild(idDiv);

    }

    async function loadCatches(){

        const url = `${baseUrl}.json`;

        elements.catchesDiv.innerHTML = '';

        try{
            let response = await fetch(url);
            let data = await response.json();

            console.log(data);  

            
            Object.keys(data)
                .forEach(catchKey => {
                    createCatch(catchKey, data[catchKey]);
                });

            elements.catchesDiv.appendChild(fragment);




        }catch(err){

        }
    }

    async function deleteCatch(id){
        const url = `${baseUrl}/${id}.json`;

        console.log(url);

        const headers ={
            method: 'DELETE',
            body: JSON.stringify({id: id}),
            headers: {'Content-type' : 'application/json'}
        }

        //let response = fetch(url, headers);
       // let data = response.json();

       // console.log(data);

        loadCatches();

    }

}

attachEvents();

