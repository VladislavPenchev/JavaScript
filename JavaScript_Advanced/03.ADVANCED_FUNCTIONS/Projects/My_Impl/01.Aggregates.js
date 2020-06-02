function solve(args) {
    const input = args;

    aggregate(input);

    function aggregate(arr){
        console.log(reducer(arr, (a, b) => a + b, 0));
        console.log(reducer(arr, (a, b) => Math.min(a,b), Number.MAX_SAFE_INTEGER));
        console.log(reducer(arr, (a, b) => Math.max(a, b), Number.MIN_SAFE_INTEGER));
        console.log(reducer(arr, (a, b) => a * b, 1));
        console.log(reducer(arr, (a, b) => `${a}${b}`, ''));
    }

    function reducer(arr, operator, inital){

        const myArr = arr;//.slice(0);
        let result = inital;

        if(result === undefined){
            result = myArr.shift();
        }

        for(let element of myArr){
            result = operator(result, element);
        }


        return result;
    }

}

solve([5, -3, 20, 7, 0.5]);