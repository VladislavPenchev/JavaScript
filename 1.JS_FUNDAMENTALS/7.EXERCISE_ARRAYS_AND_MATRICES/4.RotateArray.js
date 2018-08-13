function rotateArr(args) {

    let increment = args.pop();

    for (let i = 0; i < increment; i++) {
         args.unshift(args.pop());
    }


    console.log(args);

}

rotateArr(["Banana", "Orange", "Coconut", "Apple", "15"]);