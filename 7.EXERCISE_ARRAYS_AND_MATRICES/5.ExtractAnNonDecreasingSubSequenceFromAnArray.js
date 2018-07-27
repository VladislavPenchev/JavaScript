function nonDecreasingSequence(args){
    // let biggestNumber = Number.NEGATIVE_INFINITY;

    // function sequence(x){
    //     if(biggestNumber <= x){
    //         biggestNumber = x;
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }
    // let result  = args.filter(x => sequence(x));
    // console.log(result.join("\n"));

    let result = args.filter((el,index) => el >= Math.max(...args.slice(0,index + 1)))

    console.log(result);

}

nonDecreasingSequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);