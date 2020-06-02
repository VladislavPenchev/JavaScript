const app = Sammy("#main", function(){
    this.use('Handlebars', 'hbs');

    //Home
    this.get('#/home', homeController.getHome);

    //Users

    this.get('#/register', userController.getRegister);

    this.post('#/register', userController.postRegister);
});

(() => {
    app.run('#/home');
})();