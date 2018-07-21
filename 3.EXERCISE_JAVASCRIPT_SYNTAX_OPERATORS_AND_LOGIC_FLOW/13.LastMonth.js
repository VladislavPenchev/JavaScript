// function printLastMonth(arr) {
//     let input = arr[1];

//     switch (input) {
//         case 1: console.log(31); //dec
//             break;
//         case 2: console.log(31);
//             break;
//         case 3: console.log(28);  //feb
//             break;
//         case 4: console.log(31);
//             break;
//         case 5: console.log(30);
//             break;
//         case 6: console.log(31);  //may
//             break;
//         case 7: console.log(30);
//             break;
//         case 8: console.log(31);
//             break;
//         case 9: console.log(31);
//             break;
//         case 10: console.log(30);
//             break;
//         case 11: console.log(31);
//             break;
//         case 12: console.log(30);
//             break;
//         default: 1
//             break;
//     }
// }

// printLastMonth([17, 3, 2002]);


 function lastMonth(...input){
    let date = new Date(input[2],input[1]-1,0);
    let days = date.getDate();
    console.log(days);
 }

 lastMonth(5,3,2000);