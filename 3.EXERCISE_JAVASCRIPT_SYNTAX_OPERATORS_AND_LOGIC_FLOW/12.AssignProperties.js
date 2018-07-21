function createObject(arr){
    let firstArg = arr[0];
    let secondArg = arr[1];
    let thirdArg = arr[2];
    let person = {
        firstArg : arr[1],
        secondArg : arr[3],
        thirdArg : arr[5]
    };
    console.log(person);
}

createObject(['name', 'Pesho', 'age', '23', 'gender', 'male']);