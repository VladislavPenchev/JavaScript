function stringLength(...params){
    let stringsCount = 0;
    params.forEach((w) => stringsCount += w.length)
    console.log(stringsCount);
    console.log(Math.floor(stringsCount / params.length));

}

stringLength('chocolate', 'ice cream', 'cake');