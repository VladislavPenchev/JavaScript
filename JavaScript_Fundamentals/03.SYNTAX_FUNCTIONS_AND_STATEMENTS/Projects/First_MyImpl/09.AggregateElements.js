function aggregateElements(elements){


    aggregate(elements, 0, (f, s) => f + s);
    aggregate(elements, 0, (f, s) => f + 1 / s);
    aggregate(elements, '', (f, s) => f + s);


    function aggregate(arr, initVal, func){
        let val = initVal;
        for(let i = 0; i < arr.length; i++){
            val = func(val, arr[i]);
        }

        console.log(val);
    }
}

aggregateElements([1, 2, 3]);
