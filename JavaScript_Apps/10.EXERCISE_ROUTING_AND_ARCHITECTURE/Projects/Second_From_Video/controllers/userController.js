const userController = function() {



    const getRegister = function(context) {
        
        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        })
        .then(function(){
            this.partial("../views/register/registerPage.hbs")
        })
    };

    const getLogin = function(context){
        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "./views/common/footer.hbs"
        })
        .then(function(){
            this.partial("../views/login/loginPage.hbs")
        })
    };

    const postRegister = function(context) {
        debugger;
        userModel.register(context.params)
        .then(helper.handler)
        .then((data) => {
            storage.saveUser(data);
            //notify
            context.redirect('#/home');
        })
    };

    const postLogin = function(context) {
        userModel.login(context.params)
        .then(helper.handler)
        .then((data) => {
            storage.saveUser(data);
            context.redirect('#/home');
        })

    };

    const logout = function(context) {
        //debugger;
        userModel.logout()
        .then(helper.handler)
        .then((data) =>{
            storage.deleteUser();
            homeController.getHome(context);
            
        })

        context.redirect('#/home');
    };


    return {
        getRegister,
        postRegister,
        getLogin,
        postLogin,
        logout
    }
}();