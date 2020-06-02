function loadRepos() {
	
	const ulRes = document.getElementById('repos');
	ulRes.innerHTML += '';
	const username = document.getElementById('username').value;
	const url = `https://api.github.com/users/${username}/repos`

	const handler = function(resp){
		if(resp.status >= 400){
			console.log(resp.status);
		}

		return resp.json();
	}

	fetch(url)
		.then(handler)
		.then((data) => displayRepos(data))
		.catch(err => console.log(err));


	 const displayRepos = function(data) {
		
		//debugger;
		data.forEach(el => {
			const {full_name, html_url} = el;
			let li = document.createElement('li');
			let ahref = document.createElement('a');
			ahref.setAttribute('href', html_url);
			ahref.textContent = full_name;
			li.appendChild(ahref);
			ulRes.appendChild(li);

		});
	}
	
	   
}