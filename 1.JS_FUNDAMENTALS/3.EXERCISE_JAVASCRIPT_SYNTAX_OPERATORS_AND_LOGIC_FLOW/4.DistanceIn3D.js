function calculateDistance(...arr){
    console.log(arr);
    d = (((arr[3] - arr[0])**2)+((arr[4]-arr[1])**2)+((arr[5]-arr[2])**2));
    console.log(Math.sqrt(d));

}

calculateDistance(3.5,0,1,0,2,-1);