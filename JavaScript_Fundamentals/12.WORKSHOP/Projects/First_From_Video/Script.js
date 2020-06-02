function demo(){

    let objNames = {
        1 : "Qsen",
        2 : "Gabi",
        3 : "Stamat",
        4 : "Bilqna"
    };

    let valuesOfObj = Object.values(objNames);
    valuesOfObj.sort((a, b) => a.localeCompare(b));

    console.log(valuesOfObj);
}

demo();