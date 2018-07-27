function test(args){
    let arr = JSON.parse(args);
    let result = '<table>\n  <tr>';
    for(const key in arr[0]){
        result += `<th>${key}</th>`;
    }
    result += '</tr>\n';

    for(const value of arr){
        result += `  <tr><td>${escapeHTML(value['name'])}</td><td>${escapeHTML(value['score'])}</td></tr>\n`
    }

    

    console.log(result + '</table>');

    function escapeHTML(str){
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39');
    }

}

test('[{"name":"Pesho & Kiro", "score":479},{"name":"Gosho, Maria & Viki","score":205}]');