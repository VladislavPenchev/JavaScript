function attachEvents() {

    const weatherSymbol = {
        sunny: '☀',
        'partly sunny': '⛅',
        overcast: '☁',
        rain: '☂',
        degrees: '°'

    }

    const elements = {
        locationInput: document.getElementById('location'),
        submitInput: document.getElementById('submit'),
        currentDiv: document.getElementById('current'),
        upcommingDiv: document.getElementById('upcoming'),
        forecastDiv: document.getElementById('forecast'),
    }

    const urls = {
        locationUrl: 'https://judgetests.firebaseio.com/locations.json',
        forecastInfoUrl: 'https://judgetests.firebaseio.com/forecast/today/',
        upcomingUrl: 'https://judgetests.firebaseio.com/forecast/upcoming/',
    }

    elements.submitInput.addEventListener('click', loadLocation);

    async function loadLocation() {

        elements.forecastDiv.style.display = 'inline';

        try{
            let response = await fetch(urls.locationUrl);
            let data = await response.json();

            let curLoc = Object.values(data).filter(loc => loc.name === elements.locationInput.value)[0];
                   
            loadForecastCurrentInfo(curLoc.code);
            loadForecastUpcomingInfo(curLoc.code);

        }catch(err){
            console.log(err);
        }
    }


    async function loadForecastCurrentInfo(code) {
        try {

            let curUrl = `${urls.forecastInfoUrl}${code}.json`;

            let response = await fetch(curUrl);
            let data = await response.json();

            const {condition, high, low} = data.forecast;

            const lowHight = `${low}${weatherSymbol.degrees}/${high}${weatherSymbol.degrees}`;
            
            const forecastInfo = [data.name, lowHight, condition];

            let forecastsDiv = document.createElement('div');
            forecastsDiv.classList.add('forecasts');
            elements.currentDiv.appendChild(forecastsDiv);

            let condtionSymbolSpan = document.createElement('span');
            condtionSymbolSpan.classList.add('condition');
            condtionSymbolSpan.classList.add('symbol');

            if(weatherSymbol.hasOwnProperty(condition.toLowerCase())){
             condtionSymbolSpan.textContent = weatherSymbol[condition.toLowerCase()]; 
            }
            forecastsDiv.appendChild(condtionSymbolSpan);

            let conditionSpan = document.createElement('span');
            conditionSpan.classList.add('condition');
            forecastsDiv.appendChild(conditionSpan);

            forecastInfo.forEach(info =>{
                let forecastData = document.createElement('span');
                forecastData.classList.add('forecast-data');
                forecastData.textContent = info;
                conditionSpan.appendChild(forecastData);
            });


        }catch(err){

        }
    }


    async function loadForecastUpcomingInfo(code){
        try{
            let curUrl = `${urls.upcomingUrl}${code}.json`

            let response = await fetch(curUrl);
            let data = await response.json();

            console.log(data.forecast);

            const forecastInfoDiv = document.createElement('div');
            forecastInfoDiv.classList.add('forecast-info');
            elements.upcommingDiv.appendChild(forecastInfoDiv);

            data.forecast.forEach(upcomInfo => {
                const lowHight = `${upcomInfo.low}${weatherSymbol.degrees}/${upcomInfo.high}${weatherSymbol.degrees}`;

                let curSymb = '';

                const upcomingSpan = document.createElement('span');
                upcomingSpan.classList.add('upcoming');
                forecastInfoDiv.appendChild(upcomingSpan);

                if(weatherSymbol.hasOwnProperty(upcomInfo.condition.toLowerCase())){
                    curSymb = weatherSymbol[upcomInfo.condition.toLowerCase()];
                }

                let forecastSymb = document.createElement('span');
                forecastSymb.classList.add('symbol');
                forecastSymb.textContent = curSymb;
                upcomingSpan.appendChild(forecastSymb);

                let forecastInfo = [lowHight, upcomInfo.condition];

                forecastInfo.forEach(fcinfo => {
                    let forecastData = document.createElement('span');
                    forecastData.classList.add('forecast-data');
                    forecastData.textContent = fcinfo;
                    upcomingSpan.appendChild(forecastData);
                })

            })


        }catch(err){

        }
    }

}

attachEvents();