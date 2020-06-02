const SELECTORS = {
    NUM1: '#num1',
    NUM2: '#num2',
    RESULT: '#result',
    SUM_BUTTON: '#sumButton',
    SUBTRACT_BUTTON: '#subtractButton',
}

class Calculator {
    constructor(){

        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleSubtractClick = this.handleSubtractClick.bind(this);

        this.num1 = document.querySelector(SELECTORS.NUM1);
        this.num2 = document.querySelector(SELECTORS.NUM2);
        this.result = document.querySelector(SELECTORS.RESULT);
        this.btnAdd = document.querySelector(SELECTORS.SUM_BUTTON);
        this.btnSubtract = document.querySelector(SELECTORS.SUBTRACT_BUTTON);

        this._initEvents();
    }

    _initEvents(){
        this.btnAdd.addEventListener('click', this.handleAddClick);
        this.btnSubtract.addEventListener('click', this.handleSubtractClick);
    }

    handleAddClick(){
        const x = Number(this.num1.value);
        const y = Number(this.num2.value);
        this.result.value = x + y;
    }
    handleSubtractClick(){
        const x = this.num1.value;
        const y = this.num2.value;
        this.result.value = x - y;
    }
}

new Calculator();