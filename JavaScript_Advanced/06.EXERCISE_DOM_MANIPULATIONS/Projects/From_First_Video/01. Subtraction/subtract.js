function subtract() {
    let firstInputField = document.getElementById('firstNumber').value;
    let secondInputField = document.getElementById('secondNumber').value;

    let result = Number(firstInputField) - Number(secondInputField);

    let resultTag = document.getElementById('result');
    resultTag.textContent = result;


}