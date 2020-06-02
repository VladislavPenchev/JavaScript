const requester = function () {

    const baseUrl = "https://baas.kinvey.com/";

    const appKey = "kid_HykJ6jf2r";
    const appSecret = "35249ee63ca242ff9e2b25aa398b499b";

    const get = function (endpoint, module, type) {
        const headers = makeHeader(type, 'GET');
        const url = `${baseUrl}${module}/${appKey}/${endpoint}`;

        return fetch(url, headers);
    };

    const post = function(endpoint, module, type, data){
        const headers = makeHeader(type, 'POST', data);
        const url = `${baseUrl}${module}/${appKey}/${endpoint}`

        return fetch(url, headers);
    }   

    const makeAuth = (type) => {
        return type === 'Basic'
        ? 'Basic ' + btoa(appKey + ':' + appSecret)
        : 'Kinvey ' + sessionStorage.getItem('authtoken');
    }

    const makeHeader  = (type, httpMethod, data) => {
        const headers = {
            method: httpMethod,
            headers: {
                'Authorization': makeAuth(type),
                'Context-Type': 'application/json'
            }
        };

        if(httpMethod === 'POST' || httpMethod === 'PUT') {
            headers.body = JSON.stringify(data);
        }

        return headers;
    }

    return {
        get,
        post,
    };
}()