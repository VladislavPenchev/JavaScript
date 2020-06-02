const fileManager = require('./file-manager');
const _ = require('lodash');

fileManager.readUsers(function(err, content){
    if(err){
        console.error(err);
        return;
    }

    const userArray = content.split(',');
    console.log(_.chunk(userArray,2));

    console.log(content);
});

console.log('Hello World!');