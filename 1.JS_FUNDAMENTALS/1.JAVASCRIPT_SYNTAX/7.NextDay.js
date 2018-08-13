function nextDay(year,day,month){
    ++day;
    if(month === 2 && day === 28){
        day = 1;
        month = 3;            
        console.log(`${year}-${month}-${day}`);        
    }
    else if(month % 2 === 1 && day === 31){
        
        ++month;
        day = 1;
        console.log(`${year}-${month}-${day}`);
    }
    else if(month % 2 === 0 && day === 30 && month !== 12){
        ++month
        day = 1;
        console.log(`${year}-${month}-${day}`);        
    }
    else if(month % 2 === 0 && day === 30 && month === 12){
        ++year ;
        month = 1;
        day = 1;
        console.log(`${year}-${month}-${day}`);        
    }
    else{
        console.log(`${year}-${month}-${day}`);
    }
}

nextDay(2016,9,30);
