const kinveyInfo = {
    username: 'guest',
    password: 'guest',
    appKey: 'kid_HykJ6jf2r',
    appSecrete: '35249ee63ca242ff9e2b25aa398b499b'
}


const elements = {
    tbody: document.querySelector('tbody'),
    submitBtn: document.querySelector('form button'),
    idInput: document.getElementById('id'),
    firstNameInput: document.getElementById('firstName'),
    lastNameInput: document.getElementById('lastName'),
    facultyNumberInput: document.getElementById('facultyNumber'),
    gradeInput: document.getElementById('grade'),
}

const baseUrl = `https://baas.kinvey.com/appdata/${kinveyInfo.appKey}/students`;

elements.submitBtn.addEventListener('click', createStudent);

let fragmet = document.createDocumentFragment();

async function createStudent(ev){

    ev.preventDefault();

    const studentInfo = {
        ID: elements.idInput.value,
        firstName: elements.firstNameInput.value,
        lastName: elements.lastNameInput.value,
        facultyNumber: elements.facultyNumberInput.value,
        grade: elements.gradeInput.value,
    }


    const headers = {
        method: 'POST',
        body: JSON.stringify(studentInfo),
        credentials: 'include',
        Authorization: 'Basic' + btoa(`${kinveyInfo.username}:${kinveyInfo.password}`),
        headers: {
            'Content-Type' : 'application/json'
        }
    }

    try{
        let response = await fetch(baseUrl, headers);
        let data = await handler(response);
        let reload = await laodStudents();
    }catch(err){
        console.error(err);
    }
}

async function laodStudents() {
    const headers = {
        method: 'GET',
        credentials: 'include',
        Authorization: 'Basic' + `${kinveyInfo.username}:${kinveyInfo.password}`,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const response = await fetch(baseUrl, headers);
    const data = await handler(response);

    elements.tbody.innerHTML = '';

    data.forEach(student => {

        const tr = document.createElement('tr');
        tr.setAttribute('id', `${student._id}`);
        

        tr.innerHTML = 
        `<tr>
        <td>${student.ID}</td>
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.facultyNumber}</td>
        <td>${student.grade}</td>
        </tr>`;

        fragmet.appendChild(tr);

    })

    elements.tbody.appendChild(fragmet);

}

function handler(resp) {
    if (resp.status >= 400) {
        throw new Error(resp.status)
    }

    return resp.json();
}

laodStudents();