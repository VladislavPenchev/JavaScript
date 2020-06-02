const homeController = function() {

    const getHome = function(context){
        const loggedIn = storage.getData('userInfo') !== null;
        let username = false;
        if(loggedIn === true){
            username = JSON.parse(storage.getData('userInfo')).username;
        }
        

        context.loggedIn = loggedIn;
        context.username = username;


        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        }).then(function(){
            this.partial('../views/home/home.hbs')
        })
    };

    return {
        getHome,
    }

}();    