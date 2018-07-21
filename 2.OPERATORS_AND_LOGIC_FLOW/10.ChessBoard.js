function makeChessBoard(n){
    let color;
    let html = '<div class="chessboard">\n';
    for(let i = 1; i <= n; i++){
        if(i % 2 === 0){
            color = "white";
        }
        else{
            color = "black";
        }
        html += "  <div>\n";
        for(let j = 1; j <= n; j++){
            if(j % 2 !== 0){
                color = "black";
            }
            else{
                color = "white";
            }
            html += `    <span class="${color}"></span>\n`;
        }
        html += "  </div>";
    }
    html += "</div>";

    console.log(html);
}

makeChessBoard(3);