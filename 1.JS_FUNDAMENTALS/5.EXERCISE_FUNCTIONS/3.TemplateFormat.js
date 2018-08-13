function createXML(args){
    let xml = " ";
    xml += '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<quiz>\n';
    if(args.length % 2 === 0){
        
    }
    for(let i = 0; i <args.length;i+=2){
        xml += '  <question>\n';
        xml += `    ${args[i]}\n`;
        xml += '  </question>\n';
        xml += '  <answer>\n';
        xml += `    ${args[i + 1]}\n`;
        xml += '  </answer>\n';        
    }

    xml += '</quiz>\n'; 

    console.log(xml);
}

createXML(["Who was the forty-second president of the U.S.A.?", "William Jefferson Clinton","asdasd","111111","dddddd","vvvvvvv","aaaaa","bbbb"]);