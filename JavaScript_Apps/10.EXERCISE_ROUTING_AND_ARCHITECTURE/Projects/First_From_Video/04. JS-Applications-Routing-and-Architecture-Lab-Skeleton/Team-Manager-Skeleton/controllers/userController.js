const userController = function(){
    
    const getRegister = function(context){
        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        }).then(function(){
            this.partial('../views/register/registerPage.hbs');
        })
    };

    const getLogin = function(context) {
        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        }).then(function(){
            this.partial('../views/login/loginPage.hbs');
        })
    };

    const postRegister = function(context) {
        
        userModel.register(context.params)
        .then(helper.handler)
        .then((data) => {
            
            storage.saveUser(data);

            context.redirect('#/home');
        })
    };

    const postLogin = function(context) {
        userModel.login(context.params)
        .then(helper.handler)
        .then((data) => {

            console.log(data);
            storage.saveUser(data);
            
            context.redirect('#/home');
        })
    };

    const logout = function() {
        userModel.logout()
        .then(helper.handler)
        .then((data) => {
            console.log(data);
        });
    };

    return {
        getRegister,
        postRegister,
        getLogin,
        postLogin,
        logout
    }
}();