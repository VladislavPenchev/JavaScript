window.onload = () =>{
    Sammy('#container', function() {
        this.use('Handlebars', 'hbs');

        //Home
        this.get('/', homeController.getHome);
        this.get('#/home', homeController.getHome);

        //Users
        this.get('#/register', userController.getRegister);
        this.get('#/login', userController.getLogin);

        this.post('#/register', userController.postRegister);
        this.post('#/login', userController.postLogin);

        this.post('#/logout', userController.logout);


    }).run('/');
}