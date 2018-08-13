function aggregateElements(arg){
    aggregate(arg, 0, (a,b) => a + b);
    aggregate(arg, 0, (a,b) => a + 1/b);
    aggregate(arg, '', (a,b) => a + b);

    function aggregate(arr,initialValue,func){
        for(let i = 0; i < arr.length; i++){
            initialValue = func(initialValue,arr[i]);
        }
        console.log(initialValue);
    }
}

aggregateElements([1, 2, 3]);