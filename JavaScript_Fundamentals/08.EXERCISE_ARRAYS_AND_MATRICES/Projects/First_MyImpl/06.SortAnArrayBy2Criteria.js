function sortByCriteria(arr){

    arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });

    console.log(arr.join('\n'));
}

sortByCriteria(['alpha', 
'beta', 
'gamma']
);