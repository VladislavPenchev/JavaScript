function biggestOfNumber(...arr){
    if(arr[0] > arr[1] && arr[0] > arr[2]){
        console.log(arr[0]);
    }
    else if(arr[1] > arr[0] && arr[1] > arr[2]){
        console.log(arr[1]);
    }
    else{
        console.log(arr[2]);
    }
}

biggestOfNumber(130,5,99)