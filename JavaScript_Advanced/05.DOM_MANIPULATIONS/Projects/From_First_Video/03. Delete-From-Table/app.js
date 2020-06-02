const SELECTORS = {
    email: '[name=email]',
    rows: '#customers tbody tr',
    emailCell: '.email-cell',
    notification: '#result'
}

const NOTIFICATION_TEXTS = {
    success: 'Deleted.',
    error: 'Not found.'
}

const getEmail = () => document.querySelector(SELECTORS.email).value;

const getRows = () => document.querySelectorAll(SELECTORS.rows);

const getRowToDelete = (rows, email) => {
    [...rows].find(row => 
        email == row.querySelector(SELECTORS.emailCell).innerHTML);
};

const deleteRow = (row) => row.remove();

const clearEmail = 
    () => document.querySelector(SELECTORS.email).value = '';

const setNotification = (text) => document.querySelector(SELECTORS.notification).innerHTML = text;

const setSuccessfulNotification = () => setNotification(NOTIFICATION_TEXTS.success);

const setErrorNotification = () =>  setNotification(NOTIFICATION_TEXTS.error);

const deleteByEmail =() => {
    const email = getEmail();
    const rows = getRows();
    const rowToDelete = getRowToDelete(rows, email);
    if(rowToDelete){
        deleteRow(rowToDelete);
        setSuccessfulNotification();
    }else{
        setErrorNotification();
    }
    clearEmail();
}

