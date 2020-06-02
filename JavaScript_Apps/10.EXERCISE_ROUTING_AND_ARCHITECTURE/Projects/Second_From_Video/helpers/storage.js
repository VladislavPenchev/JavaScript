const storage = function() {

    const appKey = 'kid_HykJ6jf2r';
    const appSecret = '35249ee63ca242ff9e2b25aa398b499b';

    const getData = function(key) {
        return localStorage.getItem(key + appKey);
    };

    const saveData = function(key, value) {
        localStorage.setItem(key + appKey, JSON.stringify(value));
    };

    const saveUser = function(data) {
        saveData("userInfo", data);
        saveData("authToken", data._kmd.authtoken);
    };

    const deleteUser = function() {
        localStorage.removeItem(`userInfo${appKey}`);
        localStorage.removeItem(`authToken${appKey}`);
    };

    return {
        appKey,
        appSecret,
        getData,
        saveData,
        saveUser,
        deleteUser
    }
}();