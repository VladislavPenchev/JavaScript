function attachEvents() {

    const elements = {
        weatherBtn: document.getElementById('submit'),
        inputField: document.getElementById('location'),
        current: document.getElementById('current'),
        forecast: document.getElementById('forecast')
    }

    const symbols = {
        sunny: '☀',
        partySunny: '⛅',
        overcast: '☁',
        rain: '☂',
        degrees: '°'
    }

    elements.weatherBtn.addEventListener('click', loadWeatherInfo);

    function loadWeatherInfo(){
        elements.forecast.style.display = "block";
        fetch('https://judgetests.firebaseio.com/locations.json')
        .then(handler)
        .then(loadLocationWeatherInfo);
    }

    function loadLocationWeatherInfo(data){
        let location = data.filter((o) => o.name === elements.inputField.value)[0];
        
        fetch(`https://judgetests.firebaseio.com/forecast/today/${location.code}.json`)
        .then(handler)
        .then((data) => showLocationWeatherInfo(data, location.code));
    }

    function showLocationWeatherInfo(data, code){
        let divForcast = createHTMLElement('div', 'forecasts');

        let symbol = symbols[data.forecast.condition.toLowerCase()];

        let spanSymbol = createHTMLElement('span', ['condition', 'symbol'], symbol);

        let spanHolder = createHTMLElement('span', 'condition');

        let spanName = createHTMLElement('span', 'forecast-data', data.name);

        let degrees = `${data.forecast.low}${symbols.degrees}/${data.forecast.high}${symbols.degrees}`;
        let spanDegrees = createHTMLElement('span', 'forecast-data', degrees);

        let spanCondition = createHTMLElement('span', 'forecast-data', data.forecast.condition);

        spanHolder = appendChildToParent([spanName, spanDegrees, spanCondition], spanHolder);

        divForcast = appendChildToParent([spanSymbol, spanHolder], divForcast);

        elements.current.appendChild(divForcast);

        loadUpcomingLocationWeatherInfo(code)
    }

    function loadUpcomingLocationWeatherInfo(){
        //fetch()
    }

    function createHTMLElement(tagName, className, textContent){
        let currentElement =document.createElement(tagName);

        if(typeof className === 'string'){
            currentElement.classList.add(className);
        }else if(typeof className === 'object'){
            currentElement.classList.add(...className);
        }

        if(textContent){
            currentElement.textContent = textContent;
        }

        return currentElement;
    }

    function appendChildToParent(children, parent){
        children.forEach((child) => parent.appendChild(child));

        return parent;
    }



    function handler(response){
        if(response.status > 400){
            throw new Error(`Someyhing went wrong. Error: ${response.statusText}`);
        }

        return response.json();
    }

}

attachEvents();