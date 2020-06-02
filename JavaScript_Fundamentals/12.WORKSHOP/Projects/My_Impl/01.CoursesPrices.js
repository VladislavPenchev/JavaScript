function courses(...input){
    const jsFund = input[0];
    const jsAdvanced = input[1];
    const jsApp = input[2];
    const form = input[3];

    const courses = {
        'JS Fundamentals' : 170,
        'JS Advanced' : 180,
        'JS Applications' : 190
    }

    let total = 0;

    if(jsFund){
        total += Number(Object.values(courses)[0]);
    }

    if(jsAdvanced){
        total += Number(Object.values(courses)[1]);
    }

    if(jsApp){
        total += Number(Object.values(courses)[2]);
    }

    if(jsFund && jsAdvanced){
        total -= Object.values(courses)[1] * 0.1;
    }

    if(jsFund && jsAdvanced && jsApp){
        total -= total * 0.06;
    }


    if(form === 'online'){
        total -= total * 0.06;
    }

    console.log(Math.round(total));

}

courses(true, true, false, "onsite");