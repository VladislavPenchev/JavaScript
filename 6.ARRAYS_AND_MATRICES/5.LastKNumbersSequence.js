function sequence(...arr){
    let result = [1];
    let countOfArr = arr[0];
    let incr = arr[1];

    for(let i = 1; i < countOfArr; i++){
        let start = Math.max(0, i - incr);
        let sum = result.slice(start,i).reduce((a,b) => a + b);
        result.push(sum);

    }

    console.log(result.join(', '));

}

sequence(6,3);