function solve() {
    
    let infoSpan = document.querySelector('#info .info');

    let currentStopId = 'depot';
    let currentStop = '';


    const baseUrl = `https://judgetests.firebaseio.com/schedule/`;


    function depart() {

        let url = `${baseUrl}${currentStopId}.json`;

        fetch(url)
        .then(req => req.json())
        .then(data => loadInfo(data)); 
    }

    function arrive() {
        document.querySelector('span.info').textContent = `Arriving at ${currentStop.name}`;
        currentStopId = currentStop.next; 


        document.getElementById('depart').disabled = false;
        document.getElementById('arrive').disabled = true;
    }

    function loadInfo(data){
        currentStop = data;
        document.querySelector('span.info').textContent = `Next stop ${currentStop.name}`;
        currentStopId = currentStop.next;
        document.getElementById('depart').setAttribute('disabled', true);
        document.getElementById('arrive').disabled = false;
    }


    return {
        depart,
        arrive
    };
}

let result = solve();