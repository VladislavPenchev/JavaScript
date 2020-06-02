const helper = function(){
    
    const handler = function(resp){
        if(resp.status >= 400){
            throw new Error(`${resp.status}`);
        }

        return resp.json();
    }

    return{
        handler
    }

}();