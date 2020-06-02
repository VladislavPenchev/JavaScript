const requester = function () {
    const baseUrl = "https://baas.kinvey.com";
    
    const post = function(url, headers){
        headers.method = "POST";

        return makeRequest(baseUrl + url, headers);
    } 


    const makeRequest = function(url, headers){
        headers.headers["Content-Type"] = "application/json";

        if(storage.getData('userInfo') !== null) {
            const token = JSON.parse(storage.getData('authToken'));
            headers.headers["Authorization"] = `Kinvet ${token}`; 
        }

        return fetch(url, headers);
    };

    return{
        post,
    };

}();