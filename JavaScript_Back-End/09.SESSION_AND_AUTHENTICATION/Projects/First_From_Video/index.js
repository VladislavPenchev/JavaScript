const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

function auth(authLevel) {
    return (req, res, next) => {
        const authUser = users.find(user => user.id === req.body.username);
        if(!authUser) {
            res.status(401).send('401');
            return;
        }
    
        req.user = authUser;
        next();
    }
}

app.use(session(
    { secret: 'my secret'},
    { httpOnly: true },
    { secure: false}
));


const users = [{
    id: 1,
    username: 'user1',
    password: '123',
    authLevel: 23
}];

app.use(cookieParser());
app.use(bodyParser.urlencoded());

app.get('/protected', auth(4), (req, res) => {
    res.send('This is protected');
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve('pages', 'register.html'));
});

app.get('/register', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);
    if(user) {
        res.sendFile(path.resolve('pages', 'register.html'));
        return;
    }
    users = user.concat({ id:2, username, password});
    res.redirect('/');
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve('pages', 'login.html'));
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if(err){
            console.log(err);
            res.status(500).send(err.message);
        }
        res.redirect('/')
    });
})

app.post('/login', (req, res) => {
    const authUser = users.find(user => user.username === req.body.username);
    if(authUser.password !== req.body.password){
        res.redirect('/login?');
        //res.sendFile(path.resolve('path'))
        return;
    }
    req.session.userId = authUser.id;
    res.redirect('/');
})


app.get('/', (req, res) => {
    res.send('Default page');
    //res.cookie('test_cookie', { test: 123 }).send('Hello');    
});

app.listen(8080, () => {
    console.log('Server is listening on 8080');
});