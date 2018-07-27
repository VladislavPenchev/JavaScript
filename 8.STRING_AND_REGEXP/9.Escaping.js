function escapingHTML(args){

    let result = '<ul>\n';
    for(const text of args){
        result += `<li>${renderHTML(text)}</li>\n`;
    }

    console.log(result + '</ul>')


    function renderHTML(str){
        return str.replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
                  .replace(/"/g, '&quot;')
                  .replace(/'/g, '&#39');
    }
}

escapingHTML(['<b>unescaped text</b>', 'normal text']);

