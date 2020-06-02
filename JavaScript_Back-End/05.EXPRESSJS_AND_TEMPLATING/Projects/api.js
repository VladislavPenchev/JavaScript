const express = require('express');
const users = require("./users");

const router = express.Router();


function getCurrentUsers(req, res, next) {
    //next(); //continue to next handler
    setTimeout(function() {
        req.user = user[0];
        next(); 
    }, 500);
}

function auth(req, res, next){
    next(!!req.user ? undefined : new Error('Not allowed!'));
}

router.get('/user', getCurrentUsers, (req, res) => {
    res.send(users);
});

router.get('/user/:id', (req, res) => {
    res.send(users.find(u => u.id === +req.params.id));
});

module.exports = router;