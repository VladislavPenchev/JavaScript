function solve(arr){

arr.shift();

for(let i = 0; i < arr.length; i++){
let values = arr[i].split(/\s*\|\s*/)
            .filter(a => a !== "");

    arr[i] = {Town : values[0], Latitude: +values[1], Longitude: +values[2]}
}
    
    console.log(JSON.stringify(arr));

}

solve([' | Town | Latitude | Longitude |',
    ' | Sofia | 42.696552 | 23.32601 |',
    ' | Beijing | 39.913818 | 116.363625 | ']);``