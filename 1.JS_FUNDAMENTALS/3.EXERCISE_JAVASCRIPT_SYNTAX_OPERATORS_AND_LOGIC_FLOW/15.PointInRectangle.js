function checkPoint(...arr){
    if((arr[0] < arr[2] || arr[0]> arr[3]) || (arr[1]< arr[4] || arr[1]>arr[5])){
        console.log("outside");
    }
    else{
        console.log("inside");
    }
}

checkPoint(12.5,-1,2,12,-3,3);