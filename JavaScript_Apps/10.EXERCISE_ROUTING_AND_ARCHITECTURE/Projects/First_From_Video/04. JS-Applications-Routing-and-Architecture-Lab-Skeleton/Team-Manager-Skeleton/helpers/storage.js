const storage = function(){

    const appKey = "kid_HkGC01dor";
    const appSecret = "b6e5fc61af204b40873bb1efd0821a3d";

    const getData = function(key){
        return localStorage.getItem(key + appKey)
    };

    const saveData = function(key, value) {
        localStorage.setItem(key + appKey, JSON.stringify(value));
        
    };

    const saveUser = function(data){
        saveData("userInfo", data);
        saveData("authToken", data._kmd.authtoken);
    };

    const deleteUser = function(){
        localStorage.removeItem('userInfo');
        localStorage.removeItem('authToken');
    };


    return {
        getData,
        saveData,
        saveUser,
        deleteUser,
        appKey,
        appSecret
    }

}();