function attachEvents() {
    const elements = {
        textView: document.getElementById('messages'),
        authorInput: document.getElementById('author'),
        contentInput: document.getElementById('content'),
        submitBtn: document.getElementById('submit'),
        refreshBtn: document.getElementById('refresh')
    };

    elements.submitBtn.addEventListener('click', createMessage);
    elements.refreshBtn.addEventListener('click', loadMessages);

    const baseUrl  = 'https://rest-messanger.firebaseio.com/messanger.json';

    function createMessage(){

        const messageInfo = {
            author: elements.authorInput.value,
            content: elements.contentInput.value
        };

        const headers = {
            method: 'POST',
            body: JSON.stringify(messageInfo),
            headers: {
                'Content-type': 'application/json'
            }
        };

        fetch(baseUrl, headers)
        .then(response => response.json())
        .then((data) => console.log(data))

        elements.authorInput.value = '';
        elements.contentInput.value = '';
    }

    function loadMessages(){

        fetch(baseUrl)
        .then((response) => response.json())
        .then((data) => importMessagesToTextarea(data))
    }

    function importMessagesToTextarea(data){

        let text = '';

        Object.keys(data)
            .forEach(msg =>{
                const {author, content} = data[msg];
                
                let message = `${author}: ${content}\n`;

                text += message;
                
            });

            elements.textView.value = text;

    }
}

attachEvents();