function getData () {
	
	let data = JSON.parse(document.querySelector('textarea').value);
	let peopleInP = document.querySelector('#peopleIn p');
	let blacklistP = document.querySelector('#blacklist p');
	let peopleOut = document.querySelector('#peopleOut p');
	
	peopleIn = [];
	blacklist = [];
	peopleOut = [];

	function isPeopleIn(person){
		return person.name === 'peopleIn';
	}

	
	data.forEach(el => {
		if(el['action'] === 'peopleIn'){
			if(!blacklist.find(p => p.firstName === el.firstName
				&& p.lastName === el.lastName)){
					peopleIn.push(el);
			}
				
		}else if(el['action'] === 'peopleOut'){
			if(peopleIn.find(p => p.firstName === el.firstName && p.lastName === el.lastName)){
				let index = peopleIn.findIndex(p => p.firstName === el.firstName 
													&& p.lastName === el.lastName);
				peopleIn.splice(index, 1);
				peopleOut.push(el);
				
			}
		}
	});

	//peopleIn.forEach(x => console.log(x));
	peopleOut.forEach(x => console.log(x));
}