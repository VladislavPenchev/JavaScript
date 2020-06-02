function sortArray(array, sortType){
    if(sortType === 'asc'){
        return array.sort((a, b) => {
            return a - b;
        })
    }else {
        return array.sort((a, b) => {
            return b - a; 
        })
    }
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));