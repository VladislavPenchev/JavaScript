const helper = function () {

    const handler = function (response) {

        if (response.status >= 400) {
            throw new Error(`Something went wrong. Error: ${response.statusText}`);
        }

        if (response.status !== 204) {
            response = response.json();
        }

        return response;
    };

    const passwordCheck = function (params) {
        return params.password === params.rePassword;
    };

    const notify = function (type, textContent) {

        let element = "";

        element.addEventListener('click', (event) => event.currentTarget.style.display = "none");

        switch(type){
            case "success":
                element = document.getElementById('successBox');
                break;
            case "error":
                    element = document.getElementById('errorBox');
                break;
            case "loading":
                    element = document.getElementById('loadingBox');
                break;            
        }

        element.style.display = "block";
    };
    return {
        handler,
        passwordCheck,
        notify
    }
}();