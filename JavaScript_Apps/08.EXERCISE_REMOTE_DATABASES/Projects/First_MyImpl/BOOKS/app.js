const kinveyUserName = 'guest';
const kinveyPassword = 'guest';
const appKey = 'kid_SJdh_i8or';
const appSecret = 'a30b30a4975b409bb896ed97acd832a1';

const baseUrl = 'https://baas.kinvey.com/appdata/kid_SJdh_i8or/books';

const elements = {
    btnLoadBooks: document.querySelector('#loadBooks'),
    btnSubmit: document.querySelector('#submitBtn'),
    btnDoneEdit:document.querySelector('#editBtn'),
    btnCancelEdit: document.querySelector('#cancelBtn'),
    inputTitle: document.querySelector('#title'),
    inputAuthor: document.querySelector('#author'),
    inputIsbn: document.querySelector('#isbn'),
    tbodyBooks: document.querySelector('.tbodyBooks'),
    h3Form: document.querySelector('#formHeader'),

}

elements.btnLoadBooks.addEventListener('click', loadBooks);
elements.btnSubmit.addEventListener('click', addBook);
elements.btnDoneEdit.addEventListener('click', editBook);
elements.btnCancelEdit.addEventListener('click', cancelEdit);

function addBook(ev) {
    ev.preventDefault();

    let title = elements.inputTitle.value;
    let author = elements.inputTitle.value;
    let isbn = elements.inputTitle.value;

    if(title && author && isbn){
        const dataObject = {
            title,
            author,
            isbn
        };


        const headers = {
            method: "POST",
            body: JSON.stringify(dataObject),
            credentials: 'include',
            Authorization: 'Basic' + btoa(`${kinveyUserName}:${kinveyPassword}`),
            headers: {
                "Content-type":"application/json"
            }
        };

        fetch(baseUrl, headers)
        .then(handler)
        .then(loadBooks)
        .catch(err => console.log(err));
    }


}

function loadBooks() {

    const headers = {
        credentials: 'include',
        Authorization: 'Kinvey ' + localStorage.getItem('authTokenkid_rJz9UO4qS'),
    };

    fetch(baseUrl, headers)
        .then(handler)
        .then((data) => {
            elements.tbodyBooks.innerHTML = '';

            data.forEach(book => {
                let trNextBook = document.createElement('tr');
                trNextBook.setAttribute('id', book._id);

                trNextBook.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td>
                <button class="btnEdit" value="${book._id}">Edit</button>
                <button class="btnDelete" value="${book._id}">Delete</button>
            </td>
            `;

                trNextBook.querySelector('button.btnEdit')
                    .addEventListener('click', () => loadEditForm(book._id));

                trNextBook.querySelector('button.btnDelete')
                    .addEventListener('click', () => deleteBook(book._id));

                elements.tbodyBooks.appendChild(trNextBook);
            });
        })
        .catch(err => console.log(err));
}

function loadEditForm(bookId){
    let dataToEdit = document.getElementById(bookId).querySelectorAll('td');

    elements.inputTitle.value = dataToEdit[0].textContent;
    elements.inputAuthor.value = dataToEdit[1].textContent;
    elements.inputIsbn.value = dataToEdit[2].textContent;

    elements.h3Form.textContent = 'EDIT BOOK';

    elements.btnSubmit.style.display = 'none';
    elements.btnDoneEdit.style.display = 'block';
    elements.btnCancelEdit.style.display = 'block';

    elements.btnDoneEdit.value = bookId;

}

function editBook(ev) {
    ev.preventDefault();

    let bookId = ev.target.value;
    ev.target.value = '';

    const bookData = {
        "title": elements.inputTitle.value,
        "author": elements.inputAuthor.value,
        "isbn": elements.inputIsbn.value
    };

    let editUrl = `${baseUrl}/${bookId}`;


    const headers = {
        method: "PUT",
        body: JSON.stringify(bookData),
        credentials: 'include',
        Authorization: 'Kinvey ' + localStorage.getItem('authTokenkid_rJz9UO4qS'),
        headers: {
            "Content-Type": "application/json"
        },
    };

    fetch(editUrl, headers)
    .then(handler)
    .then(loadBooks)
    .catch(err => console.error(err));

    fromEditToSubmitForm();
}

function cancelEdit(ev){
    console.log("in");
    ev.preventDefault();
    fromEditToSubmitForm();
}


function fromEditToSubmitForm(){
    clearElementValue(elements.inputAuthor, elements.inputTitle, elements.inputIsbn);

    elements.h3Form.textContent = "FORM";

    elements.btnSubmit.style.display = 'block';
    elements.btnDoneEdit.style.display = 'none';
    elements.btnCancelEdit.style.display = 'none';
}

function clearElementValue(...arguments){
    arguments.forEach(elements => {
        elements.value = '';
    });
}

function deleteBook(bookId){
    const deleteUrl = `${baseUrl}/${bookId}`;

    const headers = {
        method: 'DELETE',
        credentials: 'include',
        Authorization: 'Kinvey ' + localStorage.getItem('authTokenkid_rJz9UO4qS'),
        headers: {
            "Content-Type": "application/json"
        },
    };

    fetch(deleteUrl, headers)
    .then(handler)
    .then(loadBooks)
    .catch(err => console.error(err));
}

function handler(res) {
    if (res.status >= 400) {
        throw new Error(response.status);
    }

    return res.json();
}