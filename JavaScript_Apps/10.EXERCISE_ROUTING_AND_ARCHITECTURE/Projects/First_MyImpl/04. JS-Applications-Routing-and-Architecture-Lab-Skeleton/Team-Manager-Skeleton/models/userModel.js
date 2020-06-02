const userModel = function () {

    const register = function (params) {
        //console.log(params);
        const data = {
            username: params.username,
            password: params.password
        };

        const url = `/user/${storage.appKey}`;

        const auth = btoa(`${storage.appKey}:${storage.appSecrete}`);
        const authString = `Basic ${auth}`;

        const headers = {
            body: JSON.stringify(data),
            headers: {
                Authorization: authString
            }
        };

        return requester.post(url, headers);



    };

    return {
        register,
    };


}();