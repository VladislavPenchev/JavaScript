function nOfElement(args){
//map to number
    let increment = parseInt(args.pop());
    args.map((el,i) => i % increment === 0 ? console.log(el) : false);

}

nOfElement(["5","20","31","4","20","2"]);