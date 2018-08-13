function sumAndVat(first,second,third){
    let sum = first + second + third;
    console.log(sum);
    let vat = sum * 20/100;
    console.log(vat);
    let total = sum + vat;
    console.log(total);
}

sumAndVat(1.20,2.60,3.50);