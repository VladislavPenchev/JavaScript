function solve(args){
    let clearMessage = args.replace("<message",'');
    let result;
    let to;
    let from;
    //TODO : Erros:
    if(!args.includes('to')){
        console.log('missing to attribute');
    }
    //if(!args.match(/\w+/)){
    //    console.log('invalid characters in attribute (don’t form a valid attribute');
    //}

    //main
    clearMessage = clearMessage.replace("</message>", '');
    result = clearMessage.split('>');

    let attributes = result[0].split(' ').filter(x => x !== '');
    if(attributes[0].includes('to')){
        to = attributes[0].split(/[^\w+]/g).filter(w => w !== '')[1];        
    }else{
        from = attributes[1].split(/[^\w+]/g).filter(w => w !== '')[1];
    }

    let html = '<article>\n';
    html += `  <div>From: <span class="sender">${from}</span></div>\n`;
    html += `  <div>To: <span class="recipient">${to}</span></div>\n`;
    html += '<div>\n';
    html += `<p>${result[1]}</p>\n`;
    html += '</div>\n';
    html += '</article>\n';

    console.log(html);
    //console.log(attributes);




}

solve(`<message to="Bob" from="Alice" timestamp="1497254092">Hey man, what's up?</message>`);