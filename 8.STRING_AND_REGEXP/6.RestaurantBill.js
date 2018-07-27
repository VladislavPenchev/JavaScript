function view(args){
    /*
    let sum = 0;
    let arr = [];

    for(let ind in args){
        if(ind % 2 === 0){
            arr.push(args[ind]);
        }else{
            sum += Number(args[ind]);
        }
    }

    console.log(arr);

    console.log(`You purchased ${arr.join(', ')} for a total sum of ${sum}`);
    */

    let product = args.filter((e,i) => i % 2 === 0).join(', ');
    let price = args.filter((e,i) => i % 2 === 1).reduce((a,b) => +a + +b);



    

    console.log(`You purchased ${product} for a total sum of ${price}`);

}

view(["Beer Zagorka", "2.65", "Tripe soup", "7.80", "Lasagna", "5.69"]);