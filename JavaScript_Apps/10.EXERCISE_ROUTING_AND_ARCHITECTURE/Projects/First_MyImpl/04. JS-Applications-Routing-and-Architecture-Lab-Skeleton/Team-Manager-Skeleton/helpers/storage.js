const storage = function () {

    const appKey = "kid_HkGC01dor";
    const appSecrete = "b6e5fc61af204b40873bb1efd0821a3d";

    const getData = function (key) {
        console.log(localStorage);
        return localStorage.getItem(key + appKey);
    };

    const saveData = function(key, value){
        localStorage.setItem(key + appKey, JSON.stringify(value));
    };

    const saveUser = function(data){
        //console.log(data);
        saveData("userInfo", data);
        saveData("authToken", data._kmd.authtoken);
    };


    return {
        appKey,
        appSecrete,
        saveUser,
        saveData,
        getData,

    };

}();