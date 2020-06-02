const kinveyUserName = 'guest2';
const kinveyPassword = '123456';
const appKey = 'kid_BJnl1kwoS';
const appSecret = 'ce87ff7f65e6422f87e6c6a2fcab1d7c';

const baseUrl = 'https://baas.kinvey.com/appdata/kid_BJnl1kwoS/students';

const elements = {
    btnLoadStudents: document.querySelector('#loadStudents'),
    btnSubmit: document.querySelector('#submitBtn'),
    btnEditDone: document.querySelector('#editBtn'),
    btnDelete: document.querySelector('#cancelBtn'),
    inputFirstName: document.querySelector('#firstName'),
    inputLastName: document.querySelector('#lastName'),
    inputFacultyNumber: document.querySelector('#facultyNumber'),
    inputGrade: document.querySelector('#grade'),
    tbody: document.querySelector('#results tbody')
};

elements.btnLoadStudents.addEventListener('click', loadStudents);
elements.btnSubmit.addEventListener('click', createStudent);
elements.btnEditDone.addEventListener('click', editDone);
elements.btnDelete.addEventListener('click', cancelEdit);

function createStudent(ev) {
    ev.preventDefault();

    let firstName = elements.inputFirstName.value;
    let lastName = elements.inputLastName.value;
    let facultyNumber = elements.inputFacultyNumber.value;
    let grade = elements.inputGrade.value;
    
    if(firstName && lastName && facultyNumber && grade){
        const dataObject = {
            firstName,
            lastName,
            facultyNumber,
            grade
        };

        const headers = {
            method: 'POST',
            body: JSON.stringify(dataObject),
            credentials: 'include',
            Authorization: 'Basic ' + btoa(`${kinveyUserName}:${kinveyPassword}`),
            headers: {
                "Content-type":"application/json",
            }
        };

        fetch(baseUrl, headers)
        .then(handler)
        .then(loadStudents)
        .catch(err => console.error(err));

    }
}

function loadStudents(){

    const headers = {
        credentials: 'include',
        Authorization: 'Kinvey ' + localStorage.getItem('authTokenkid_rJz9UO4qS'),
    };

    fetch(baseUrl, headers) 
    .then(handler)
    .then((data) => {

        elements.tbody.innerHTML = '';

        data.forEach(student => {
            let trNextStudent = document.createElement('tr');
            trNextStudent.setAttribute("id", student._id);

            trNextStudent.innerHTML = `
                <td>${student._id}</td>
                <td>${student.firstName}</td>
                <td>${student.lastName}</td>
                <td>${student.facultyNumber}</td>
                <td>${student.grade}</td>
                <td>
                <button class="btnEdit" value="${student._id}">Edit</button>
                <button class="btnDelete" value="${student._id}">Delete</button>
            </td>
            `;

            trNextStudent.querySelector('button.btnEdit')
            .addEventListener('click', () => loadEditForm(student._id));


            trNextStudent.querySelector('button.btnDelete')
            .addEventListener('click', () => deleteStudent(student._id));

            elements.tbody.appendChild(trNextStudent);

        }); 
    })
    .catch(err => console.error(err));
}

function loadEditForm(studentId){

    let dataToEdit = document.getElementById(studentId).querySelectorAll('td');

    elements.inputFirstName.value = dataToEdit[1].textContent;
    elements.inputLastName.value = dataToEdit[2].textContent;
    elements.inputFacultyNumber.value = dataToEdit[3].textContent;
    elements.inputGrade.value = dataToEdit[4].textContent;

    elements.btnSubmit.style.display = 'none';
    elements.btnEditDone.style.display = 'block';
    elements.btnDelete.style.display = 'block';

    elements.btnEditDone.value = studentId;

}


function editDone(ev){
    ev.preventDefault();

    const studentId = ev.target.value;
    ev.target.value = '';

    const studentData = {
        "firstName": elements.inputFirstName.value,
        "lastName": elements.inputLastName.value,
        "facultyNumber": elements.inputFacultyNumber.value,
        "grade": elements.inputGrade.value
    };

    const editUrl = `${baseUrl}/${studentId}`;

    const headers = {
        method: 'PUT',
        body: JSON.stringify(studentData),
        credentials: 'include',
        Authorization: 'Kinvey ' + localStorage.getItem('authTokenkid_rJz9UO4qS'),
        headers: {
            "Content-Type": "application/json"
        },
    } ;

    fetch(editUrl, headers)
    .then(handler)
    .then(loadStudents)
    .catch(err => console.error(err));

    fromEditToSubmitForm();
}

function cancelEdit(ev){
    ev.preventDefault();
    fromEditToSubmitForm();
}

function fromEditToSubmitForm(){

    elements.inputFirstName.value = '';
    elements.inputLastName.value = '';
    elements.inputFacultyNumber.value = '';
    elements.inputGrade.value = '';

    elements.btnSubmit.style.display = 'block';
    elements.btnEditDone.style.display = 'none';
    elements.btnDelete.style.display = 'none';
}


function deleteStudent(studentId){
    const deleteUrl = `${baseUrl}/${studentId}`;

    let headers = {
        method: 'DELETE',
        credentials: 'include',
        Authorization: 'Kinvey ' + localStorage.getItem('authTokenkid_rJz9UO4qS'),
        headers: {
            "Content-Type": "application/json"
        },
    };

    fetch(deleteUrl, headers)
    .fetch(handler)
    .fetch(loadStudents)
    .catch(err => console.error(err));

}



function handler(res){
    if(res.status >= 400){
        throw new Error(res.status);
    }

    return res.json();
}

