function newArrayDemo(arr){

    let newArr = [];

    for(let i = 0; i <= arr.length - 1; i++){
        if(arr[i] < 0){
            newArr.unshift(arr[i]);
        }else {
            newArr.push(arr[i]);
        }
    }

    for (const number of newArr) {
        console.log(number);
    }
}

newArrayDemo([7, -2, 8, 9]);