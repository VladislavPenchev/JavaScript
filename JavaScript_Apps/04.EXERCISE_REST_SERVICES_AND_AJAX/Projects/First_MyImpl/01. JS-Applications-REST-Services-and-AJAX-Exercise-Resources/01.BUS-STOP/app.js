function getInfo() {

    let elements = {
        stopIdinput : document.getElementById('stopId'),
        stationNameDiv : document.getElementById('stopName'),
        stationsUl : document.getElementById('buses')
    };


    const url = `https://judgetests.firebaseio.com/businfo/${elements.stopIdinput.value}.json`;


    const handler = function (resp) {
        if (resp.status >= 400) {
            throw new error(resp.status)
        }

        return resp.json();
    }

    const requester = function (data) {
        const {buses,name} = data;

        elements.stationNameDiv.textContent = name;

        Object.keys(buses)
            .forEach(station => {
                const stationLi = document.createElement('li');
                stationLi.textContent = `Bus ${station} arrives in ${buses[station]}`;

                elements.stationsUl.appendChild(stationLi);
            });
    }

    fetch(url)
        .then(handler)
        .then(data => requester(data))
        .catch(err => {
            elements.stationNameDiv.textContent = 'ERROR'; 
        })
}