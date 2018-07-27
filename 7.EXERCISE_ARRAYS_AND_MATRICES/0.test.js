function rotateArr(args){

    let increment = args.pop();
    let countOfArr = args.length;
    

    for(let i = 0; i < increment - 1; i++){
        console.log(args.reverse());
    }

}

rotateArr(["Banana", "Orange", "Coconut", "Apple", "15"]);