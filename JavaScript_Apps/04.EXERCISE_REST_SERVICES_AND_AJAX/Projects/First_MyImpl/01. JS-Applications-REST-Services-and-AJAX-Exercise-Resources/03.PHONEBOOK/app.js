function attachEvents() {

    baseUrl = 'https://phonebook-nakov.firebaseio.com/phonebook.json';
    baseDeleteUrl = `https://phonebook-nakov.firebaseio.com/phonebook/`;

    const elements = {
        phonebookUl: document.getElementById('phonebook'),
        loadBtn: document.getElementById('btnLoad'),
        personInput: document.getElementById('person'),
        phoneInput: document.getElementById('phone'),
        btnCreate: document.getElementById('btnCreate'),
    };

    let userId = '';

    elements.loadBtn.addEventListener('click', loadPhoneBookUsers);
    elements.btnCreate.addEventListener('click', createUser);

    function loadPhoneBookUsers (){
        fetch(baseUrl)
            .then(requester => requester.json())
            .then(data => loadData(data));

            
    }

    function loadData(data){
        if(data){
            Object.keys(data)
                .forEach(userInfo => {

                    userId = userInfo;

                    const {person, phone} = data[userInfo];
                    
                    let userInfoLi = document.createElement('li');
                    userInfoLi.textContent = `${person}:${phone}`;

                    const buttonDelete = document.createElement('button');
                    buttonDelete.classList.add('btnDelete');
                    buttonDelete.textContent = 'DELETE';

                    buttonDelete.addEventListener('click',() => deleteUser(userId));

                    userInfoLi.appendChild(buttonDelete);

                    elements.phonebookUl.appendChild(userInfoLi);

                });

        }
    }

    function deleteUser(userId){

        //debugger;
        const url = `${baseDeleteUrl}${userId}.json`; 

        const headers = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(url,headers)
        .then(res => res.json())
        .then(data => console.log(data))    ;

    }


    function createUser(){

        const userInfoObj = {
            person: elements.personInput.value,
            phone: elements.phoneInput.value
        }

        const headers = {
            'Content-Type': 'application/json'
        }

        fetch(baseUrl, {
            method: 'POST',
            headers,
            body: JSON.stringify(userInfoObj)
        })
            .then(response => response.json)
            .then(data => console.log(data));

        elements.personInput.value = '';
        elements.phoneInput.value = '';
    }
}

attachEvents();