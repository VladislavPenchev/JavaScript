function triangle(number){
    for(let i = 1; i <= number;i++){
        console.log("*".repeat(i));
    }

    for(let i = number - 1; i > 0 ;i--){
        console.log("*".repeat(i));
    }
}

triangle(10);