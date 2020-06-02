window.onload = () => {

    Sammy('#container', function() {
        this.use('Handlebars', 'hbs');

        // Home
        this.get('/', homeController.getHome);
        this.get('#/home', homeController.getHome);
    
        // User
        this.get('#/register', userController.getRegister);
        this.get('#/login', userController.getLogin);
    
        this.post('#/register', userController.postRegister);
        this.post('#/login', userController.postLogin);
        this.get('#/logout', userController.logout);

        //Movies
        this.get('#/movie/create',movieController.createGet);
        this.get('#/cinema', movieController.loadCinema);

        this.post('#/movie/create',movieController.createPost);



    }).run('/');

}
