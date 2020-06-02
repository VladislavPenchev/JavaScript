function solve() {
    let number;

    let selectTo = document.getElementById('selectMenuTo');
    let hexDecimalOption = selectTo.getElementsByTagName('option')[0];
    hexDecimalOption.text = 'Hexadecimal';
    hexDecimalOption.setAttribute('value', 'hexdecimal');

    let binaryOption = document.createElement('option');
    binaryOption.text = 'Binary';
    binaryOption.setAttribute('value', 'binary');

    selectTo.add(binaryOption);

    let resultLabel = document.getElementById('result');    

    document.getElementsByTagName('button')[0].addEventListener('click', function(){
        number = Number(document.getElementById('input').value);

        let currentOptionTo = selectTo.options[selectTo.selectedIndex].value;

        let result = '';

        if(currentOptionTo == 'binary'){
            result = (number >>> 0).toString(2);
            
        }else{
            result = (number >>> 0).toString(16).toUpperCase();
        }

        resultLabel.value = result;
        

    });

}