//Name two ways to dynamically add the value "bar" to the array "foo";

// function arraysDemo(){
//     let foo = [];
//     foo.push("bar");
//     foo[foo.length] = "bar";
// }

// arraysDemo();

//----------------------------------------

//Of what JavaScript type is an Array ?

// function arraysDemo(){
//     let foo = [];
//     console.log(typeof(foo));
    
// }

// arraysDemo();

//----------------------------------------

// What property tells you the length of a JavaScript array ?

// function arraysDemo(){
//     let foo = [];
//     console.log(foo.length);
    
// }

// arraysDemo();

//----------------------------------------

//If the array "foo" has a length of 12, what is the index of the first element in the array?

//-> 0

//----------------------------------------

//If the array "foo" has a length of 10,  what is the index of the last element in the array ?

// function arraysDemo(){
//     let foo = [];
//     console.log(foo[foo.length - 1]);
    
// }

//----------------------------------------

//What is the syntax you would use to assign the first element in the array "foo" to the variable "bar"?


// function arraysDemo(){
//     let foo = [];

//     let bar = 123;

//     foo.unshift(bar);
//     console.log(foo);
    
// }

//----------------------------------------

//Given the following line of code, what is the length of the array ""? var foo = [];

//-> 0

//----------------------------------------

//What does the array.shift() method do , and what does it return ?

//-> връща самия елемент като pop

//----------------------------------------

//Given the following line of code, what would be the output of the console ?

// function arraysDemo(){
    
//     let firstObj = {
//         name: "first",
//         age : 2222
//     }

//     let secondObj = {};

//     for(let kvp in firstObj) {
//         if(!secondObj.hasOwnProperty(kvp)){
//             secondObj[kvp] = firstObj[kvp];
//         }
//     }
    
// }

// arraysDemo();

//----------------------------------------

//What is hoisting ?

//възможността на една функция да бъде извикане преди да е декларирата

function arraysDemo(){

    test();

    function test(){
        console.log("test");
    }
    
}

arraysDemo();