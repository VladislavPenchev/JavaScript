const helper = function(){

    const handler = function(response){
        if(response.status >= 400){
            throw new Error(`Something went wrong. Error: ${response.statusText}`);
        }

        if(response.status !== 204){
            response = response.json();
        }

        return response;
    }


    const addHeaderInfo = function(context){
        const loggedIn = sessionStorage.getItem('authToken') !== null;

        if(loggedIn){
            context.loggedIn = loggedIn;
            context.username = sessionStorage.getItem('username');
        }
    }


    return{
        addHeaderInfo,
        handler
    }

}()