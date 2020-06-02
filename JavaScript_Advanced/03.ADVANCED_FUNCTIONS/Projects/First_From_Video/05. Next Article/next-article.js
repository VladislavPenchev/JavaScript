function getArticleGenerator(input){   

	const div = document.getElementById('content');
	let i = 0;


	function nextArticle(){
		let html = `<article><p>${input[i++]}</p></article>`;

		div.innerHTML += html;
	}

	return nextArticle;
}