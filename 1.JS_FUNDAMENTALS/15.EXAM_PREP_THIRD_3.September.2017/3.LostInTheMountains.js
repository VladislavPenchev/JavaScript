function solve(keyWord,text){
   
   let pattern = /(north|east)\D*(\d{2})[^\,]*\D*(,{1})\D*(\d{6})/gi;

   let match = pattern.exec(text);
   let latitude;
   let longitude;
   while(match){
       if(match[1].toLowerCase() == 'north'){
           latitude = `${match[2]}.${match[4]} N`;
       }else if(match[1].toLowerCase == 'east'){
           longitude = `${match[2]}.${match[4]} E`;
       }
       match = pattern.exec(text);
   }
   console.log(latitude);
   console.log(longitude);
   
}

solve('<>', 'o u%&lu43t&^ftgv><nortH4276hrv756dcc,  jytbu64574655k <>ThE sanDwich is iN the refrIGErator<>yl i75evEAsTer23,lfwe 987324tlblu6b');