function calculate(args) {
    for (let i = 1; i < args.length; i++) {
        let op = checkOperation(args[i]);
        
        if(i === 1){
            console.log(args[0]);
            let currentSum = calc(args, 32, op);
        }
        else{
            let currentSum = calc(args,currentSum, op);   
            calc(args,currentSum, op);   
        }
    }


    function calc(arr, initValue, func) {
            initValue = func(initValue);
            console.log(initValue);
    }

}

function checkOperation(count) {       
        switch (count) {
            case 'chop': return function (num) { return num / 2 };
        }
}


calculate([32, "chop", "chop", "chop", "chop", "chop"]);