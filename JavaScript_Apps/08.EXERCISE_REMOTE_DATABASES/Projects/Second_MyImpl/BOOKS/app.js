const authInfo = {
    username: 'guest',
    password: 'guest',
    kinveyAppkey: 'kid_HykJ6jf2r',
    kinveyAppsecrete: '35249ee63ca242ff9e2b25aa398b499b',
}

const baseUrl = `https://baas.kinvey.com/appdata/${authInfo.kinveyAppkey}/books`;

const elements = {
    btnLoad: document.getElementById('loadBooks'),
    btnSubmit: document.querySelector('form button'),
    tbody: document.querySelector('table tbody'),
    titleInput: document.getElementById('title'),
    authorInput: document.getElementById('author'),
    isbnInput: document.getElementById('isbn'),
    h3FormLabel: document.querySelector('form h3'),
    form: document.querySelector('form'),

}

let divConButtonDoneAndCancel = document.createElement('div');
elements.form.appendChild(divConButtonDoneAndCancel);

let doneBtn = document.createElement('button');
doneBtn.setAttribute('id', 'doneBtn');
doneBtn.style.display = 'none';
doneBtn.textContent = 'DONE';
divConButtonDoneAndCancel.appendChild(doneBtn);

let cancleBtn = document.createElement('button');
cancleBtn.setAttribute('id', 'cancelBtn');
cancleBtn.style.display = 'none';
cancleBtn.textContent = 'CANCEL';
divConButtonDoneAndCancel.appendChild(cancleBtn);

elements.btnLoad.addEventListener('click', loadBooks);
elements.btnSubmit.addEventListener('click', createBook);

doneBtn.addEventListener('click', doneEdit);
cancleBtn.addEventListener('click', cancelEdit);

let fragment = document.createDocumentFragment();

function loadBooks() {

    const headers = {
        method: 'GET',
        credentials: 'include',
        Authorization: 'Kinvey ' + localStorage.getItem('authToken')
    }

    fetch(baseUrl, headers)
        .then(handler)
        .then(data => {

            elements.tbody.innerHTML = '';

            data.forEach(book => {

                const curTr = document.createElement('tr');
                curTr.setAttribute('id', `${book._id}`);

                curTr.innerHTML = `
            <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td>
                <button id="editButton" value="${book._id}">Edit</button>
                <button id="deleteButton" value="${book._id}">Delete</button>
            </td>
            </tr>`;

                curTr.querySelector('#deleteButton')
                    .addEventListener('click', () => deleteBook(book._id));

                curTr.querySelector('#editButton')
                    .addEventListener('click', () => editBook(book._id));


                fragment.appendChild(curTr)
            })

            elements.tbody.appendChild(fragment);

        })
}


function createBook(ev) {
    ev.preventDefault();

    const bookInfo = {
        title: elements.titleInput.value,
        author: elements.authorInput.value,
        isbn: elements.isbnInput.value
    }

    const headers = {
        method: "POST",
        body: JSON.stringify(bookInfo),
        credentials: 'include',
        Authorization: 'Basic' + btoa(`${authInfo.username}:${authInfo.password}`),
        headers: {
            "Content-type": "application/json"
        }
    };

    fetch(baseUrl, headers)
        .then(handler)
        .then(loadBooks)
        .catch(err => console.error(err))

    clearFormInputs(elements.titleInput, elements.authorInput, elements.isbnInput);

}

function editBook(bookId) {
    const chosenTrInfo = document.getElementById(bookId)
        .querySelectorAll('td');

    elements.titleInput.value = chosenTrInfo[0].textContent;
    elements.authorInput.value = chosenTrInfo[1].textContent;
    elements.isbnInput.value = chosenTrInfo[2].textContent;

    elements.h3FormLabel.textContext = 'EDIT BOOK';

    elements.btnSubmit.style.display = 'none';
    doneBtn.style.display = 'block';
    cancleBtn.style.display = 'block';

    doneBtn.value = bookId;
}

function deleteBook(bookId) {

    url = `${baseUrl}/${bookId}`;

    const headers = {
        method: 'DELETE',
        credentials: 'include',
        Authorization: 'Kinvey ' + localStorage.getItem('authToken'),
        headers: {
            "Content-Type": "application/json"
        }
    }

    fetch(url, headers)
        .then(handler)
        .then(loadBooks)
        .catch(err => console.error(err))
}

function doneEdit(ev){

    ev.preventDefault();

    let bookId = ev.target.value;
    ev.target.value = '';

    const url = `${baseUrl}/${bookId}`;

    const bookEditInfo = {
        title: elements.titleInput.value,
        author: elements.authorInput.value,
        isbn: elements.isbnInput.value
    }

    const headers = {
        method: 'PUT',
        body: JSON.stringify(bookEditInfo),
        credentials: 'include',
        Authorization: 'Kinvey ' + localStorage.getItem('authToken'),
        headers: {
            "Content-Type": "application/json"
        }

    }

    fetch(url, headers)
    .then(handler)
    .then(loadBooks)
    .catch(err => console.error(err))

    clearFormInputs(elements.titleInput, elements.authorInput, elements.isbnInput);

    elements.h3FormLabel.textContext = 'FORM';

    elements.btnSubmit.style.display = 'block';
    doneBtn.style.display = 'none';
    cancleBtn.style.display = 'none';

}

function cancelEdit(ev){
    ev.preventDefault();

    clearFormInputs(elements.titleInput, elements.authorInput, elements.isbnInput);

    elements.h3FormLabel.textContext = 'FORM';

    elements.btnSubmit.style.display = 'block';
    doneBtn.style.display = 'none';
    cancleBtn.style.display = 'none';
}


function clearFormInputs(...arguments) {
    arguments[0].value = '';
    arguments[1].value = '';
    arguments[2].value = '';

}

function handler(res) {
    if (res.status >= 400) {
        throw new Error(`${res.status}`)
    }

    return res.json();
}