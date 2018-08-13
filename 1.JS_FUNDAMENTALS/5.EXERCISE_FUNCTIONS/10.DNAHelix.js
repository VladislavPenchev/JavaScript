function printDNA(num){

    let multy = Math.ceil(num / 4);    

    let str = "ATCGTTAGGG";
    let start = 0;

    str += str * multy - 1;

    while(start <= num){

        for(let i = 0; i <num ; i++){

            if(i === 3){
                i = 0; 
                num /2;
            }
        
            switch(i){
                case 0: console.log(`**${str[i]}${str[i+1]}**`);
                    break;
                case 1: console.log(`*${str[i]}--${str[i+1]}*`);
                    break;
                case 2: console.log(`${str[i]}----${str[i+1]}`);
                    break;
                case 3: console.log(`${str[i]}----${str[i+1]}`);
                    break;
            }
        }

        start++;
    }


}

printDNA(10);