const http = require('http');
const port = 8000;

const app = http.createServer(function(req, res){
    res.write('Hello');
});

app.listen(port,function() {
    console.log(`Server is listening on ${port}`);
});